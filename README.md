# Personal Website (Quarto)

This repository contains the source for Isaac Weintraub's personal academic website. The site is built with [Quarto](https://quarto.org) and has been migrated from the original Hugo/Wowchemy-based starter template.

## Project structure

- `_quarto.yml` – Quarto project configuration (website, theme, navbar, etc.).
- `index.qmd` – Homepage with photo and short biography.
- `about.qmd` – Detailed biography and links to scholarly profiles.
- `publications/` – One folder per publication (generated from `publications.bib`).
- `talks/` – Quarto pages for talks and presentations.
- `styles.css` – Custom CSS for layout, dark theme, and publication cards.
- `scripts/` – Helper scripts for managing content and metadata.

## Publications workflow

Publications are managed via a BibTeX file and generator script:

- `publications.bib` is the source of truth for publication metadata (titles, authors, years, venues, DOIs, URLs, abstracts).
- `scripts/generate_publications_from_bib.py` reads `publications.bib` and generates one Quarto page per entry:
  - Output structure: `publications/<Key>/index.qmd`.
  - Front matter fields include `title`, `authors`, `year`, `doi`, `url`, `image`, and `abstract`.
  - A citation block using the BibTeX key is included in the page body.

Publications are listed on `publications.qmd` using a custom card layout:

- `_templates/publication-card.html` defines the layout for each publication "tile":
  - Bold title linking to the individual publication page.
  - Year and venue (journal/conference) shown under the title.
  - Authors and optional abstract in smaller text.
  - Optional featured image, configured via `image: 'featured.jpg'` in the publication's front matter.
  - Links for URL/DOI/PDF along the bottom of the card.

To regenerate publication pages after editing `publications.bib`:

```bash
python scripts/generate_publications_from_bib.py
```

Then preview the site locally with:

```bash
quarto preview
```

## Automated update & rebuild

To minimize manual work and API calls, a master update script is
provided: `scripts/update.py`.

Typical monthly update procedure:

1. (Optional) Update `scripts/id_to_key.yml` to map Semantic Scholar
   IDs to publication folder keys (under `publications/`).
2. (Optional) Run the update script with the IDs you want to refresh
   from Semantic Scholar:

   ```bash
   python scripts/update.py --ids CorpusID:238582866 CorpusID:257834217
   ```

   This will:
   - Fetch metadata for the given IDs (skipping any updated in the
     last 30 days based on
     `scripts/publication_update_state.yml`).
   - Write JSON files under `data/semantic_scholar/`.
   - Apply the fetched fields into the corresponding
     `publications/<Key>/index.qmd` files as `ss_*` fields.
   - Regenerate publication pages from `publications.bib`.
   - Ensure `short_abstract` fields exist based on full abstracts.

3. To perform a local-only refresh (no new API calls), simply run:

   ```bash
   python scripts/update.py
   ```

   This will skip the fetch step and only apply existing JSON,
   regenerate publication pages, and update summaries.

4. After running the update script, build or preview the site:

   ```bash
   quarto preview   # live preview
   # or
   quarto render    # full build
   ```

## Duplicate title checking

To help maintain a clean bibliography where each title is unique, the script `scripts/check_duplicate_publication_titles.py` scans `publications.bib` and reports any titles that appear more than once.

Run:

```bash
python scripts/check_duplicate_publication_titles.py
```

This script does not modify any files; it is intended as a safety check before regenerating publication pages.

## Development

- Use `python` to run helper scripts under `scripts/`.
- Use `quarto preview` during development to serve the site locally.
- Edit content in the corresponding `.qmd` files (e.g., `index.qmd`, `about.qmd`, `publications/<Key>/index.qmd`, `talks/*.qmd`).

The original Hugo/Wowchemy README has been replaced with this Quarto-focused description.
