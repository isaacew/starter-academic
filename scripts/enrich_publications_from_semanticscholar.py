import os
import sys
import time
from pathlib import Path
from typing import Optional, Dict, Any

import bibtexparser
import requests
import yaml


ROOT = Path(__file__).resolve().parents[1]
BIB_PATH = ROOT / "publications.bib"
PUB_DIR = ROOT / "publications"

API_BASE = "https://api.semanticscholar.org/graph/v1/paper"
API_FIELDS = ",".join([
    "title",
    "year",
    "venue",
    "abstract",
    "externalIds",
    "url",
    "authors",
])


def get_api_key() -> Optional[str]:
    return os.getenv("SEMANTIC_SCHOLAR_API_KEY")


def fetch_by_doi(doi: str, api_key: Optional[str]) -> Optional[Dict[str, Any]]:
    if not doi:
        return None
    url = f"{API_BASE}/DOI:{doi}"
    headers: Dict[str, str] = {}
    if api_key:
        headers["x-api-key"] = api_key
    resp = requests.get(url, params={"fields": API_FIELDS}, headers=headers, timeout=10)
    if resp.status_code != 200:
        return None
    return resp.json()


def fetch_by_title(title: str, api_key: Optional[str]) -> Optional[Dict[str, Any]]:
    if not title:
        return None
    search_url = "https://api.semanticscholar.org/graph/v1/paper/search"
    headers: Dict[str, str] = {}
    if api_key:
        headers["x-api-key"] = api_key
    resp = requests.get(
        search_url,
        params={"query": title, "fields": API_FIELDS, "limit": 1},
        headers=headers,
        timeout=10,
    )
    if resp.status_code != 200:
        return None
    data = resp.json()
    papers = data.get("data") or []
    return papers[0] if papers else None


def enrich_bib_entry(entry: Dict[str, Any], api_data: Dict[str, Any]) -> bool:
    """Fill in missing BibTeX fields from Semantic Scholar without overwriting.

    Only fields that are absent or empty in `entry` are populated.
    """

    changed = False

    def set_if_missing(value_key: str, api_value: Any) -> None:
        nonlocal changed
        if api_value is None:
            return
        current_raw = entry.get(value_key)
        # Only fill if field is absent or empty/whitespace
        if current_raw is not None and str(current_raw).strip():
            return
        new_val = str(api_value).strip()
        if not new_val:
            return
        entry[value_key] = new_val
        changed = True

    # Basic fields
    set_if_missing("title", api_data.get("title"))
    set_if_missing("year", api_data.get("year"))
    set_if_missing("abstract", api_data.get("abstract"))
    set_if_missing("url", api_data.get("url"))

    # DOI from external IDs
    external_ids = api_data.get("externalIds") or {}
    doi = external_ids.get("DOI")
    set_if_missing("doi", doi)

    # Authors: only fill if missing
    authors = api_data.get("authors") or []
    names = [" ".join(a.get("name", "").split()) for a in authors if a.get("name")]
    if names:
        current_authors_raw = entry.get("author")
        if not (current_authors_raw and str(current_authors_raw).strip()):
            entry["author"] = " and ".join(names)
            changed = True

    return changed


def update_qmd_from_bib(key: str, entry: Dict[str, Any]) -> None:
    """Fill in missing front-matter fields in the corresponding .qmd file.

    Existing non-empty front-matter values are left untouched.
    """

    qmd_path = PUB_DIR / f"{key}.qmd"
    if not qmd_path.exists():
        return

    text = qmd_path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return
    parts = text.split("---", 2)
    if len(parts) < 3:
        return
    fm = yaml.safe_load(parts[1]) or {}

    mapping = {
        "title": "title",
        "year": "year",
        "doi": "doi",
        "url": "url",
        "abstract": "abstract",
    }

    changed = False

    for bib_key, fm_key in mapping.items():
        val = entry.get(bib_key)
        if val is None:
            continue
        current = fm.get(fm_key)
        # Only fill missing/empty front-matter fields
        if current is not None and str(current).strip():
            continue
        fm[fm_key] = val
        changed = True

    # Authors
    author_str = entry.get("author", "")
    if author_str:
        authors_list = [a.strip() for a in author_str.split(" and ") if a.strip()]
        current_authors = fm.get("authors")
        has_authors = bool(
            current_authors
            and isinstance(current_authors, list)
            and any(str(a).strip() for a in current_authors)
        )
        if not has_authors and authors_list:
            fm["authors"] = authors_list
            changed = True

    if not changed:
        return

    new_fm = yaml.safe_dump(fm, sort_keys=False).strip()
    new_text = "---\n" + new_fm + "\n---" + parts[2]
    qmd_path.write_text(new_text, encoding="utf-8")


def main() -> None:
    if not BIB_PATH.exists():
        print(f"Bibliography not found: {BIB_PATH}", file=sys.stderr)
        raise SystemExit(1)

    api_key = get_api_key()

    with BIB_PATH.open(encoding="utf-8") as f:
        db = bibtexparser.load(f)

    changed_any = False

    for entry in db.entries:
        key = entry.get("ID") or entry.get("id")
        if not key:
            continue

        print(f"Processing {key}...")
        doi = (entry.get("doi") or "").strip()
        title = (entry.get("title") or "").strip()

        data = None
        if doi:
            data = fetch_by_doi(doi, api_key)
        if data is None and title:
            data = fetch_by_title(title, api_key)

        if not data:
            print("  No Semantic Scholar data found.")
            continue

        if enrich_bib_entry(entry, data):
            print("  Filled missing BibTeX metadata from Semantic Scholar.")
            changed_any = True
            update_qmd_from_bib(key, entry)
        else:
            print("  No missing fields to fill.")

        time.sleep(0.5)

    if changed_any:
        with BIB_PATH.open("w", encoding="utf-8") as f:
            bibtexparser.dump(db, f)
        print(f"Saved updated bibliography to {BIB_PATH}")
    else:
        print("No entries were changed; bibliography left as-is.")


if __name__ == "__main__":
    main()

