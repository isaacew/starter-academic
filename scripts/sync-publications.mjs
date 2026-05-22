#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BIB_FILE = path.join(__dirname, '../publications.bib');
const SITE_FILE = path.join(__dirname, '../data/site.ts');

// Parse BibTeX file
function parseBibTeX(content) {
  const entries = [];
  
  // Match each BibTeX entry
  const entryRegex = /@(\w+)\s*\{\s*([^,]+),\s*([\s\S]*?)\n\}/g;
  let match;

  while ((match = entryRegex.exec(content)) !== null) {
    const entryType = match[1].toLowerCase();
    const entryKey = match[2].trim();
    const fields = match[3];

    // Parse fields
    const fieldMap = {};
    const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}|(\w+)\s*=\s*"([^"]*)"|(\w+)\s*=\s*(\d+)/g;
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(fields)) !== null) {
      const key = (fieldMatch[1] || fieldMatch[3] || fieldMatch[5]).toLowerCase();
      const value = fieldMatch[2] || fieldMatch[4] || fieldMatch[6];
      fieldMap[key] = value.trim();
    }

    // Map to publication object
    const pub = {
      title: fieldMap.title || '',
      year: parseInt(fieldMap.year || '0') || new Date().getFullYear(),
      authors: fieldMap.author || '',
      publication: fieldMap.journal || fieldMap.booktitle || fieldMap.series || '',
      doi: fieldMap.doi,
      type: mapBibTypeToPublicationType(entryType),
      abstract: fieldMap.abstract || '',
      url: fieldMap.url || fieldMap.pdf,
    };

    if (pub.title) {
      entries.push(pub);
    }
  }

  return entries;
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

// Read current site.ts and extract existing publications
function getExistingPublications(siteContent) {
  const titles = new Set();
  
  // Extract publication titles from site.ts - handles escaped quotes
  const pubRegex = /title:\s*['"`]((?:[^'"`\\]|\\.)*?)['"`]/g;
  let match;
  
  while ((match = pubRegex.exec(siteContent)) !== null) {
    // Unescape the title
    const unescaped = match[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    titles.add(unescaped.toLowerCase().trim());
  }
  
  return titles;
}

// Format publication for TypeScript
function formatPublication(pub) {
  const url = pub.url ? `url: '${pub.url.replace(/'/g, "\\'")}',` : '';
  
  return `    {
      title: '${pub.title.replace(/'/g, "\\'")}',
      year: ${pub.year},
      authors: '${pub.authors.replace(/'/g, "\\'")}',
      publication: '${pub.publication.replace(/'/g, "\\'")}',
      ${pub.doi ? `doi: '${pub.doi}',` : ''}
      type: '${pub.type}',
      abstract: '${pub.abstract.replace(/'/g, "\\'")}',
      ${url}
    }`;
}

// Main sync function
async function syncPublications() {
  try {
    // Read BibTeX file
    if (!fs.existsSync(BIB_FILE)) {
      console.error(`Error: ${BIB_FILE} not found`);
      process.exit(1);
    }

    const bibContent = fs.readFileSync(BIB_FILE, 'utf-8');
    const bibPublications = parseBibTeX(bibContent);

    // Read current site.ts
    if (!fs.existsSync(SITE_FILE)) {
      console.error(`Error: ${SITE_FILE} not found`);
      process.exit(1);
    }

    let siteContent = fs.readFileSync(SITE_FILE, 'utf-8');
    const existingTitles = getExistingPublications(siteContent);

    // Find new publications
    const newPublications = bibPublications.filter(
      pub => !existingTitles.has(pub.title.toLowerCase().trim())
    );

    if (newPublications.length === 0) {
      console.log('✓ No new publications to add');
      return;
    }

    console.log(`Found ${newPublications.length} new publication(s):`);
    newPublications.forEach(pub => {
      console.log(`  • ${pub.title} (${pub.year})`);
    });

    // Find the publications array in site.ts and add new entries
    const publicationsArrayRegex = /(publications:\s*\[)([\s\S]*?)(\s*\],)/;
    const arrayMatch = siteContent.match(publicationsArrayRegex);

    if (!arrayMatch) {
      console.error('Error: Could not find publications array in site.ts');
      process.exit(1);
    }

    // Insert new publications before the closing bracket
    const formattedNew = newPublications.map(formatPublication).join(',\n');
    const updatedArray = arrayMatch[1] + arrayMatch[2] + ',\n' + formattedNew + arrayMatch[3];
    
    siteContent = siteContent.replace(publicationsArrayRegex, updatedArray);

    // Write updated site.ts
    fs.writeFileSync(SITE_FILE, siteContent, 'utf-8');

    console.log(`\n✓ Successfully added ${newPublications.length} new publication(s) to data/site.ts`);
  } catch (error) {
    console.error('Error syncing publications:', error);
    process.exit(1);
  }
}

syncPublications();
