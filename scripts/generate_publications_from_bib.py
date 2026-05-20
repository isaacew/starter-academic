import textwrap
from pathlib import Path

import bibtexparser


ROOT = Path(__file__).resolve().parents[1]
BIB_PATH = ROOT / "publications.bib"
OUT_DIR = ROOT / "publications"


def main() -> None:
    if not BIB_PATH.exists():
        raise SystemExit(f"Bibliography file not found: {BIB_PATH}")

    with BIB_PATH.open(encoding="utf-8") as f:
        db = bibtexparser.load(f)

    OUT_DIR.mkdir(exist_ok=True)

    for entry in db.entries:
        key = entry.get("ID") or entry.get("id")
        if not key:
            continue

        title = entry.get("title", key)
        authors_raw = entry.get("author", "")
        authors = [a.strip() for a in authors_raw.split(" and ") if a.strip()]
        year = entry.get("year", "")
        doi = entry.get("doi", "")
        url = entry.get("url", "")
        abstract = entry.get("abstract", "")

        front_matter_lines = ["---"]
        front_matter_lines.append(f"title: {title!r}")
        if authors:
            front_matter_lines.append("authors:")
            for a in authors:
                front_matter_lines.append(f"  - {a!r}")
        if year:
            front_matter_lines.append(f"year: '{year}'")
        if doi:
            front_matter_lines.append(f"doi: {doi!r}")
        if url:
            front_matter_lines.append(f"url: {url!r}")
        # Expect a featured image in the same folder, managed manually.
        # If you add featured.jpg or featured.png later, update this field if needed.
        front_matter_lines.append("image: 'featured.jpg'")
        if abstract:
            # Keep abstract in front matter for easy access.
            wrapped = textwrap.fill(abstract, width=78)
            front_matter_lines.append("abstract: |")
            for line in wrapped.splitlines():
                front_matter_lines.append(f"  {line}")

        front_matter_lines.append("---")

        body_lines = [
            f"```{{=markdown}}\n[@{key}]\n```",
        ]

        # Write to publications/<Key>/index.qmd
        out_dir = OUT_DIR / key
        out_dir.mkdir(exist_ok=True)
        out_path = out_dir / "index.qmd"
        out_path.write_text("\n".join(front_matter_lines + [""] + body_lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
