#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BIB_FILE = path.join(__dirname, '../publications.bib');
const SITE_FILE = path.join(__dirname, '../data/site.ts');

// Decode LaTeX accents and remove surrounding braces
function cleanLaTeX(str) {
  if (!str) return '';
  return str
    .replace(/\\\'\{i\}/g, 'í')
    .replace(/\\\'i/g, 'í')
    .replace(/\\\'\{a\}/g, 'á')
    .replace(/\\\'\{e\}/g, 'é')
    .replace(/\\\'\{o\}/g, 'ó')
    .replace(/\\\'\{u\}/g, 'ú')
    .replace(/\\\'\{c\}/g, 'ć')
    .replace(/\\\'c/g, 'ć')
    .replace(/\\\'\{n\}/g, 'ń')
    .replace(/\\\'n/g, 'ń')
    .replace(/\\\'\{s\}/g, 'ś')
    .replace(/\\\'s/g, 'ś')
    .replace(/\\\'\{z\}/g, 'ź')
    .replace(/\\\'z/g, 'ź')
    .replace(/\\v\{c\}/g, 'č')
    .replace(/\\v\s*c/g, 'č')
    .replace(/\\v\{s\}/g, 'š')
    .replace(/\\v\s*s/g, 'š')
    .replace(/\\v\{z\}/g, 'ž')
    .replace(/\\v\s*z/g, 'ž')
    .replace(/\\\"\{a\}/g, 'ä')
    .replace(/\\\"\{e\}/g, 'ë')
    .replace(/\\\"\{o\}/g, 'ö')
    .replace(/\\\"\{u\}/g, 'ü')
    .replace(/\\~\{n\}/g, 'ñ')
    .replace(/\\~n/g, 'ñ')
    .replace(/\{([^{}]+)\}/g, '$1') // Remove braces surrounding text like {Astro}
    .replace(/\\/g, '')             // Strip any remaining backslashes
    .trim();
}

// Convert "Last, First" separated by " and " into "First Last, First Last"
function parseAuthors(authorString) {
  if (!authorString) return '';
  
  const authors = authorString.split(/\s+and\s+/i);
  
  const formattedAuthors = authors.map(author => {
    let cleaned = cleanLaTeX(author.trim());
    
    // Check if it is in "Last, First" format
    const commaIndex = cleaned.indexOf(',');
    if (commaIndex !== -1) {
      const last = cleaned.slice(0, commaIndex).trim();
      const first = cleaned.slice(commaIndex + 1).trim();
      return `${first} ${last}`;
    }
    
    return cleaned;
  });
  
  return formattedAuthors.join(', ');
}

function mapBibTypeToPublicationType(bibType) {
  const typeMap = {
    article: 'Journal',
    inproceedings: 'Conference',
    conference: 'Conference',
    book: 'Book',
    bookchapter: 'BookSection',
    incollection: 'BookSection',
    phdthesis: 'Thesis',
    mastersthesis: 'Thesis',
    techreport: 'Report',
    misc: 'Uncategorized',
    preprint: 'Preprint',
  };
  return typeMap[bibType] || 'Uncategorized';
}

// Parse BibTeX fields robustly by counting braces
function parseFields(fieldsString) {
  const fields = {};
  let i = 0;
  
  while (i < fieldsString.length) {
    // Find the field name
    const eqIndex = fieldsString.indexOf('=', i);
    if (eqIndex === -1) break;
    
    const fieldName = fieldsString.slice(i, eqIndex).trim().toLowerCase();
    i = eqIndex + 1;
    
    // Skip whitespace
    while (i < fieldsString.length && /\s/.test(fieldsString[i])) {
      i++;
    }
    
    if (i >= fieldsString.length) break;
    
    let value = '';
    if (fieldsString[i] === '{') {
      i++; // Skip '{'
      let braceCount = 1;
      let start = i;
      while (i < fieldsString.length && braceCount > 0) {
        if (fieldsString[i] === '{') braceCount++;
        else if (fieldsString[i] === '}') braceCount--;
        i++;
      }
      value = fieldsString.slice(start, i - 1);
    } else if (fieldsString[i] === '"') {
      i++; // Skip '"'
      let start = i;
      while (i < fieldsString.length && fieldsString[i] !== '"') {
        if (fieldsString[i] === '\\' && fieldsString[i+1] === '"') {
          i += 2;
        } else {
          i++;
        }
      }
      value = fieldsString.slice(start, i);
      i++; // Skip '"'
    } else {
      let start = i;
      while (i < fieldsString.length && fieldsString[i] !== ',' && fieldsString[i] !== '\n') {
        i++;
      }
      value = fieldsString.slice(start, i).trim();
    }
    
    fields[fieldName] = value.trim();
    
    const commaIndex = fieldsString.indexOf(',', i);
    if (commaIndex !== -1) {
      i = commaIndex + 1;
    } else {
      break;
    }
  }
  
  return fields;
}

// Parse BibTeX file robustly
function parseBibTeX(content) {
  const entries = [];
  let i = 0;
  
  while (i < content.length) {
    const atIndex = content.indexOf('@', i);
    if (atIndex === -1) break;
    
    i = atIndex + 1;
    
    const braceIndex = content.indexOf('{', i);
    if (braceIndex === -1) break;
    
    const entryType = content.slice(i, braceIndex).trim().toLowerCase();
    
    if (entryType === 'comment' || entryType === 'preamble' || entryType === 'string') {
      i = braceIndex + 1;
      continue;
    }
    
    i = braceIndex + 1;
    
    const commaIndex = content.indexOf(',', i);
    if (commaIndex === -1) break;
    
    i = commaIndex + 1;
    
    let braceCount = 1;
    let startFields = i;
    while (i < content.length && braceCount > 0) {
      if (content[i] === '{') braceCount++;
      else if (content[i] === '}') braceCount--;
      i++;
    }
    
    const fieldsString = content.slice(startFields, i - 1);
    const fieldMap = parseFields(fieldsString);
    
    const pub = {
      title: cleanLaTeX(fieldMap.title || ''),
      year: parseInt(fieldMap.year || '0') || new Date().getFullYear(),
      authors: parseAuthors(fieldMap.author || ''),
      publication: cleanLaTeX(fieldMap.journal || fieldMap.booktitle || fieldMap.series || ''),
      doi: fieldMap.doi || '',
      type: mapBibTypeToPublicationType(entryType),
      abstract: cleanLaTeX(fieldMap.abstract || ''),
      url: fieldMap.url || fieldMap.pdf || '',
    };
    
    if (pub.title) {
      entries.push(pub);
    }
  }
  
  return entries;
}

// Format publication for TypeScript
function formatPublication(pub) {
  const fields = [
    `      title: '${pub.title.replace(/'/g, "\\'")}'`,
    `      year: ${pub.year}`,
    `      authors: '${pub.authors.replace(/'/g, "\\'")}'`,
    `      publication: '${pub.publication.replace(/'/g, "\\'")}'`
  ];
  
  if (pub.doi) {
    fields.push(`      doi: '${pub.doi.replace(/'/g, "\\'")}'`);
  }
  
  fields.push(`      type: '${pub.type}'`);
  
  if (pub.abstract) {
    fields.push(`      abstract: '${pub.abstract.replace(/'/g, "\\'")}'`);
  }
  
  if (pub.url) {
    fields.push(`      url: '${pub.url.replace(/'/g, "\\'")}'`);
  }
  
  return `    {\n${fields.join(',\n')}\n    }`;
}

// Main sync function
async function syncPublications() {
  try {
    if (!fs.existsSync(BIB_FILE)) {
      console.error(`Error: ${BIB_FILE} not found`);
      process.exit(1);
    }

    const bibContent = fs.readFileSync(BIB_FILE, 'utf-8');
    const bibPublications = parseBibTeX(bibContent);

    // De-duplicate publications by title (case-insensitively, trimmed)
    const uniquePublications = [];
    const seenTitles = new Set();
    let duplicateCount = 0;
    
    for (const pub of bibPublications) {
      const cleanTitle = pub.title.toLowerCase().trim();
      if (!seenTitles.has(cleanTitle)) {
        seenTitles.add(cleanTitle);
        uniquePublications.push(pub);
      } else {
        duplicateCount++;
      }
    }

    // Sort unique publications by year descending (reverse chronological order)
    uniquePublications.sort((a, b) => b.year - a.year);

    if (uniquePublications.length === 0) {
      console.log('✓ No publications found in BibTeX file');
      return;
    }

    console.log(`Found ${uniquePublications.length} unique publication(s) in BibTeX (ignored ${duplicateCount} duplicate(s)):`);
    uniquePublications.forEach(pub => {
      console.log(`  • ${pub.title} (${pub.year})`);
    });

    if (!fs.existsSync(SITE_FILE)) {
      console.error(`Error: ${SITE_FILE} not found`);
      process.exit(1);
    }

    let siteContent = fs.readFileSync(SITE_FILE, 'utf-8');

    // Find the publications array in site.ts and replace it
    const publicationsArrayRegex = /(publications:\s*\[)([\s\S]*?)(\s*\],)/;
    const arrayMatch = siteContent.match(publicationsArrayRegex);

    if (!arrayMatch) {
      console.error('Error: Could not find publications array in site.ts');
      process.exit(1);
    }

    // Fully replace publications with de-duplicated items
    const formattedPubs = uniquePublications.map(formatPublication).join(',\n');
    const updatedArray = arrayMatch[1] + '\n' + formattedPubs + '\n' + arrayMatch[3];
    
    siteContent = siteContent.replace(publicationsArrayRegex, updatedArray);

    // Write updated site.ts
    fs.writeFileSync(SITE_FILE, siteContent, 'utf-8');

    console.log(`\n✓ Successfully synced and updated data/site.ts with ${uniquePublications.length} unique publication(s)`);
  } catch (error) {
    console.error('Error syncing publications:', error);
    process.exit(1);
  }
}

syncPublications();
