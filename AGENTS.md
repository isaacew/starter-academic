# Agents

This repository defines an agent and supporting script to help
populate short 100-word summaries for publications.

## Publication Summary Agent

- **Purpose**: Generate concise (~100 word) summaries for each
  publication based on its full abstract, and write them into the
  `short_abstract` field in the front matter of
  `publications/<Key>/index.qmd`.
- **Inputs**: The full `abstract` field in `publications.bib` or in
  the publication's existing front matter.
- **Outputs**: Updated `publications/<Key>/index.qmd` files with a
  `short_abstract` field suitable for use on the publications listing
  page.

## Usage

1. Ensure `publications.bib` contains accurate abstracts for each
   publication.
2. Run `python scripts/generate_publications_from_bib.py` to refresh
   the `publications/<Key>/index.qmd` files.
3. Run the summary agent script:

   ```bash
   python scripts/agent_generate_summaries.py
   ```

4. The agent will read each publication's full `abstract`, generate a
   concise summary (100 words or fewer), and update the
   `short_abstract` field in the front matter.

5. Rebuild or preview the site with `quarto preview` to see updated
   tiles on the publications page.

## Freshness Widget Integration Agent

- **Purpose**: Copy the `paper-freshness-widget.html` tool into
  selected `publications/<Key>/` folders and inject a `## Paper
  Insights` section with the appropriate include block into
  `index.qmd` when it is missing.
- **Inputs**: A source widget HTML file and existing
  `publications/<Key>/index.qmd` pages.
- **Outputs**: For each targeted publication folder:
  - `publications/<Key>/paper-freshness-widget.html`
  - An embedded `Paper Insights` section in `index.qmd`.

Run the integration agent script:

```bash
python scripts/agent_integrate_freshness_widget.py --keys Pachter2021TheSO Bajaj2022CompetitivePD
```

Edit the widget configuration in each
`publications/<Key>/paper-freshness-widget.html` to match the specific
paper (Semantic Scholar ID, year, authors, DOI, metrics, etc.).
