"""Publication Summary Agent

This script acts as an "agent" to generate concise (~100 word)
summaries for publications based on their full abstracts. It reads the
Quarto publication pages under `publications/<Key>/index.qmd`,
extracts the `abstract` field from front matter, and writes a
truncated `short_abstract` field if one is missing.

The goal is to keep the short description on the publications tiles
concise, while preserving the full abstract on the detail page.

This agent does not overwrite existing `short_abstract` fields. It
only fills them when they are absent.
"""

from __future__ import annotations

from pathlib import Path
from typing import Dict, Any

import textwrap
import yaml


ROOT = Path(__file__).resolve().parents[1]
PUB_DIR = ROOT / "publications"


def generate_short_abstract(full_abstract: str, max_words: int = 100) -> str:
    """Generate a concise summary from a full abstract.

    Currently this is a simple truncation to the first `max_words`
    words, with an ellipsis appended if the abstract is longer.

    This function can be extended to use more advanced summarization
    logic or an external LLM, but is intentionally simple and
    deterministic for now.
    """

    words = full_abstract.split()
    if len(words) <= max_words:
        return full_abstract.strip()
    short = " ".join(words[:max_words]).strip()
    return short + "..."


def process_publication(path: Path) -> bool:
    """Process a single publication index.qmd file.

    Returns True if the file was modified, False otherwise.
    """

    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return False
    parts = text.split("---", 2)
    if len(parts) < 3:
        return False

    fm = yaml.safe_load(parts[1]) or {}

    # If a short_abstract already exists and is non-empty, leave it.
    existing_short = fm.get("short_abstract")
    if existing_short and str(existing_short).strip():
        return False

    full_abstract = fm.get("abstract")
    if not full_abstract or not str(full_abstract).strip():
        return False

    short = generate_short_abstract(str(full_abstract))
    fm["short_abstract"] = short

    new_fm = yaml.safe_dump(fm, sort_keys=False).strip()
    new_text = "---\n" + new_fm + "\n---" + parts[2]
    path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    if not PUB_DIR.exists():
        raise SystemExit(f"Publications directory not found: {PUB_DIR}")

    changed = 0
    for pub_dir in PUB_DIR.iterdir():
        if not pub_dir.is_dir():
            continue
        index_path = pub_dir / "index.qmd"
        if not index_path.exists():
            continue
        if process_publication(index_path):
            print(f"Updated short_abstract in {index_path}")
            changed += 1

    if changed:
        print(f"\nSummary agent updated {changed} publication(s).")
    else:
        print("\nSummary agent did not need to update any publications.")


if __name__ == "__main__":
    main()

