"""Master update script for the Quarto site.

This script orchestrates the main maintenance tasks for the site so
you can run a single command to keep publications and metadata up to
date, while minimizing unnecessary work and API calls.

High-level steps (all optional, but run in this order):

1. (Optional) Fetch updated Semantic Scholar metadata for a configured
   list of paper IDs, with rate limiting and per-ID 30-day caching.
2. Apply fetched Semantic Scholar data into publication front matter
   (`publications/<Key>/index.qmd`) as `ss_*` fields.
3. Generate/refresh publication pages from `publications.bib` to
   ensure structure consistency.
4. Fill in missing `short_abstract` fields based on full abstracts.

Configuration:

- `scripts/id_to_key.yml`: maps Semantic Scholar IDs to publication
  folder keys under `publications/`.
- `scripts/publication_update_state.yml`: tracks last update dates
  for each Semantic Scholar ID.

Usage:

    python scripts/update.py --ids CorpusID:238582866 CorpusID:257834217

If you omit `--ids`, the script will skip the Semantic Scholar fetch
step and only apply existing JSON data, regenerate publication pages,
and update summaries.
"""

from __future__ import annotations

import argparse
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def run(cmd: list[str]) -> None:
    print(f"[RUN] {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=ROOT, text=True)
    if result.returncode != 0:
        raise SystemExit(f"Command failed with exit code {result.returncode}: {' '.join(cmd)}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Master update script for publications and metadata.")
    parser.add_argument(
        "--ids",
        nargs="*",
        help="Semantic Scholar paper IDs to refresh (optional). If omitted, fetch step is skipped.",
    )
    parser.add_argument(
        "--fetch-fields",
        type=str,
        default="title,authors,year,citationCount,referenceCount,venue,doi",
        help="Fields to request from Semantic Scholar when fetching (used only if --ids is provided).",
    )

    args = parser.parse_args()

    # 1) Optionally fetch updated Semantic Scholar data
    if args.ids:
        run([
            "python",
            "scripts/fetch_semanticscholar_data.py",
            "--out",
            "data/semantic_scholar",
            "--fields",
            args.fetch_fields,
            "--ids",
            *args.ids,
        ])
    else:
        print("[INFO] No --ids provided; skipping Semantic Scholar fetch step.")

    # 2) Apply Semantic Scholar data into publication index.qmd files
    data_dir = ROOT / "data" / "semantic_scholar"
    if data_dir.exists() and any(data_dir.glob("*.json")):
        run(["python", "scripts/agent_apply_semanticscholar_to_index.py"])
    else:
        print("[INFO] No Semantic Scholar JSON found; skipping apply step.")

    # 3) Regenerate publication pages from publications.bib
    pub_bib = ROOT / "publications.bib"
    if pub_bib.exists():
        run(["python", "scripts/generate_publications_from_bib.py"])
    else:
        print("[INFO] publications.bib not found; skipping publication generation.")

    # 4) Fill in any missing short_abstract fields
    run(["python", "scripts/agent_generate_summaries.py"])

    print("[INFO] Update complete.")


if __name__ == "__main__":
    main()

