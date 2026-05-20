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

## Scripts and agents

### `scripts/generate_publications_from_bib.py`

Generate or refresh publication pages from `publications.bib`.

- Reads all entries in `publications.bib`.
- For each entry, creates or overwrites `publications/<Key>/index.qmd`.
- Populates front matter fields, including:
  - `title`, `authors`, `year`, `doi`, `url`, `image`, `abstract`.
  - `short_abstract` (first ~100 words of `abstract`).
- Adds a citation block using the BibTeX key to the body.

Run manually:

```bash
python scripts/generate_publications_from_bib.py
```

### `scripts/agent_generate_summaries.py`

Publication summary agent: ensures each publication has a concise
`short_abstract` based on its full `abstract`.

- Scans `publications/<Key>/index.qmd` files.
- If `short_abstract` is missing or empty but `abstract` exists,
  generates a ~100-word summary and writes it into `short_abstract`.
- Does **not** overwrite existing non-empty `short_abstract`.

Run manually:

```bash
python scripts/agent_generate_summaries.py
```

### `scripts/fetch_semanticscholar_data.py`

Offline Semantic Scholar fetcher with rate limiting.

- Fetches metadata from Semantic Scholar's Graph API for a list of
  paper IDs (CorpusIDs or long hex IDs).
- Respects rate limits:
  - ~1 request per second (`time.sleep(1.1)` between requests).
  - Uses `scripts/publication_update_state.yml` to skip IDs refreshed
    in the last 30 days.
- Writes JSON responses to `data/semantic_scholar/<paper_id>.json`.

Example:

```bash
python scripts/fetch_semanticscholar_data.py \
  --ids CorpusID:238582866 CorpusID:257834217 \
  --out data/semantic_scholar
```

### `scripts/agent_apply_semanticscholar_to_index.py`

Apply Semantic Scholar JSON to publication pages.

- Reads JSON files in `data/semantic_scholar/`.
- Uses `scripts/id_to_key.yml` to map each Semantic Scholar ID
  (JSON filename stem, e.g. `CorpusID:238582866`) to a publication
  folder under `publications/`.
- For each mapped publication, updates `publications/<Key>/index.qmd`
  front matter with:
  - `ss_corpusId` (Semantic Scholar ID / CorpusID).
  - `ss_title`, `ss_year`.
  - `ss_citationCount`, `ss_referenceCount`.
  - `ss_venue`, `ss_doi`.

Run manually:

```bash
python scripts/agent_apply_semanticscholar_to_index.py
```

### `scripts/id_to_key.yml`

Mapping from Semantic Scholar IDs to publication folder names.

- Keys: Semantic Scholar IDs (e.g. `CorpusID:238582866`).
- Values: Publication folder names under `publications/` (BibTeX
  keys).

Example:

```yaml
CorpusID:238582866: Bajaj2022CompetitivePD
CorpusID:257834217: Pachter2021TheSO
```

This file is used by `agent_apply_semanticscholar_to_index.py` and
`update.py` to associate Semantic Scholar data with the correct
publication.

### `scripts/publication_update_state.yml`

Tracks the last Semantic Scholar update date for each paper ID.

- Keys: Semantic Scholar IDs.
- Values: `last_semantic_update: YYYY-MM-DD`.
- Used by `fetch_semanticscholar_data.py` to skip re-fetching IDs
  updated in the past 30 days.

### `scripts/check_duplicate_publication_titles.py`

Duplicate title checker for `publications.bib`.

- Scans `publications.bib` for titles that appear more than once.
- Prints potential duplicates so you can fix them before regenerating
  publication pages.
- Does **not** modify any files.

Run manually:

```bash
python scripts/check_duplicate_publication_titles.py
```

### `scripts/agent_generate_summaries.py`

See above; this is also listed under "Publication summary agent".

### `scripts/agent_integrate_freshness_widget.py`

Freshness widget integration agent.

- For each specified publication key, e.g. `Pachter2021TheSO`:
  - Copies a source `paper-freshness-widget.html` into
    `publications/<Key>/paper-freshness-widget.html` if it does not
    exist.
  - Ensures `publications/<Key>/index.qmd` contains a
    "## Paper Insights" section with:

    ```{=html}
    {{< include paper-freshness-widget.html >}}
    ```

- Existing content is preserved; the section is appended before the
  final citation block if present.

Example:

```bash
python scripts/agent_integrate_freshness_widget.py \
  --widget-source paper-freshness-widget.html \
  --keys Pachter2021TheSO Bajaj2022CompetitivePD
```

### `scripts/agent_generate_summaries.py`

Ensures `short_abstract` exists for each publication using the full
`abstract`.

### `scripts/agent_generate_summaries.py`

Ensures `short_abstract` exists for each publication using the full
`abstract`.

### `scripts/fetch_semanticscholar_data.py` and `scripts/agent_apply_semanticscholar_to_index.py`

See above; these handle offline fetching and applying of Semantic
Scholar metadata.

### `scripts/update.py`

Master update script that orchestrates the above tools.

- Optional fetch step (if `--ids` is provided):
  - Calls `fetch_semanticscholar_data.py` with the given IDs.
  - Respects rate limits and 30-day per-ID caching.
- Apply step:
  - If any JSON exists in `data/semantic_scholar/`, calls
    `agent_apply_semanticscholar_to_index.py` to update `ss_*` fields
    in publication front matter.
- Publication generation:
  - Runs `generate_publications_from_bib.py` if `publications.bib`
    exists.
- Summary generation:
  - Runs `agent_generate_summaries.py` to ensure `short_abstract`
    fields are populated.

Usage examples:

- Full update with Semantic Scholar fetch for a subset of IDs:

  ```bash
  python scripts/update.py --ids CorpusID:238582866 CorpusID:257834217
  ```

- Local-only refresh (no new API calls):

  ```bash
  python scripts/update.py
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
