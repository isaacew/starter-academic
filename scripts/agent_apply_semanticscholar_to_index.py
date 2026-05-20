"""Agent: Apply Semantic Scholar JSON to publication index.qmd.

This agent reads JSON files produced by `fetch_semanticscholar_data.py`
and writes selected fields into the YAML front matter of corresponding
`publications/<Key>/index.qmd` files. It is intended to be run offline
after fetching data, updating front matter fields such as:

- `ss_title`
- `ss_year`
- `ss_citationCount`
- `ss_referenceCount`
- `ss_venue`
- `ss_doi`

Existing front-matter values for these keys are overwritten; other
fields are left untouched.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict

import json
import yaml


ROOT = Path(__file__).resolve().parents[1]
PUB_DIR = ROOT / "publications"
DATA_DIR = ROOT / "data" / "semantic_scholar"
ID_MAP_PATH = ROOT / "scripts" / "id_to_key.yml"


def update_index_from_json(index_path: Path, data: Dict[str, Any], paper_id: str) -> bool:
    """Update a single index.qmd front matter from Semantic Scholar JSON.

    Returns True if the file was modified.
    """

    text = index_path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return False
    parts = text.split("---", 2)
    if len(parts) < 3:
        return False

    fm = yaml.safe_load(parts[1]) or {}

    # Map selected fields into "ss_*" keys to avoid clobbering your
    # primary metadata fields.
    fm["ss_corpusId"] = paper_id
    fm["ss_title"] = data.get("title")
    fm["ss_year"] = data.get("year")
    fm["ss_citationCount"] = data.get("citationCount")
    fm["ss_referenceCount"] = data.get("referenceCount")
    fm["ss_venue"] = data.get("venue")
    fm["ss_doi"] = (data.get("doi") or fm.get("doi"))

    new_fm = yaml.safe_dump(fm, sort_keys=False).strip()
    new_text = "---\n" + new_fm + "\n---" + parts[2]
    if new_text == text:
        return False
    index_path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    if not DATA_DIR.exists():
        raise SystemExit(f"Semantic Scholar data directory not found: {DATA_DIR}")

    # Optional mapping from Semantic Scholar IDs to publication folder keys
    if ID_MAP_PATH.exists():
        id_map = yaml.safe_load(ID_MAP_PATH.read_text(encoding="utf-8")) or {}
    else:
        id_map = {}

    changed = 0

    for json_path in DATA_DIR.glob("*.json"):
        paper_id = json_path.stem
        try:
            data = json.loads(json_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            print(f"[WARN] Failed to parse JSON {json_path}: {e}")
            continue

        # Map paper_id to a publication folder using id_to_key.yml if
        # present; otherwise fall back to a folder named like paper_id.
        folder_name = id_map.get(paper_id, paper_id)
        folder = PUB_DIR / folder_name
        if not folder.exists():
            print(f"[INFO] No publication folder for Semantic Scholar ID: {paper_id} (skipping)")
            continue

        index_path = folder / "index.qmd"
        if not index_path.exists():
            print(f"[WARN] index.qmd not found in {folder} (skipping)")
            continue

        if update_index_from_json(index_path, data, paper_id):
            print(f"[INFO] Updated Semantic Scholar fields in {index_path}")
            changed += 1

    if changed:
        print(f"\nAgent updated {changed} publication index file(s).")
    else:
        print("\nAgent did not update any publication index files.")


if __name__ == "__main__":
    main()
