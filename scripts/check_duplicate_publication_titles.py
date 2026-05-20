from pathlib import Path

import bibtexparser


ROOT = Path(__file__).resolve().parents[1]
BIB_PATH = ROOT / "publications.bib"


def main() -> None:
    if not BIB_PATH.exists():
        raise SystemExit(f"Bibliography file not found: {BIB_PATH}")

    with BIB_PATH.open(encoding="utf-8") as f:
        db = bibtexparser.load(f)

    seen = {}
    duplicates = []

    for entry in db.entries:
        title = (entry.get("title") or "").strip()
        year = (str(entry.get("year")) or "").strip()
        if not title:
            continue
        key = title.lower()
        if key in seen:
            duplicates.append((seen[key], entry))
        else:
            seen[key] = entry

    if not duplicates:
        print("No duplicate titles detected in publications.bib.")
        return

    print("Potential duplicate titles (titles should be unique):\n")
    for first, dup in duplicates:
        print(f"TITLE: {first.get('title')}\n")
        print(f"  Keep?  ID={first.get('ID')}  Year={first.get('year')}\n")
        print(f"  Dup?   ID={dup.get('ID')}  Year={dup.get('year')}\n")
        print("-" * 60)


if __name__ == "__main__":
    main()

