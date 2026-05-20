"""Freshness Widget Integration Agent

This agent automates wiring the paper freshness widget into selected
publication pages. For each specified key, it:

- Copies a source `paper-freshness-widget.html` into
  `publications/<Key>/paper-freshness-widget.html` if it does not yet
  exist.
- Ensures that `publications/<Key>/index.qmd` contains a
  "## Paper Insights" section with an include block:

    ```{=html}
    {{< include paper-freshness-widget.html >}}
    ```

Existing content in `index.qmd` is preserved; the section is appended
near the end if missing.
"""

from __future__ import annotations

import argparse
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUB_DIR = ROOT / "publications"


def ensure_widget_for_key(key: str, widget_source: Path) -> None:
    pub_folder = PUB_DIR / key
    if not pub_folder.exists() or not pub_folder.is_dir():
        print(f"[WARN] Publication folder does not exist for key: {key}")
        return

    index_path = pub_folder / "index.qmd"
    if not index_path.exists():
        print(f"[WARN] index.qmd missing for key: {key}")
        return

    # Copy widget if missing
    widget_target = pub_folder / "paper-freshness-widget.html"
    if not widget_target.exists():
        if not widget_source.exists():
            print(f"[ERROR] Widget source not found: {widget_source}")
            return
        widget_target.write_text(widget_source.read_text(encoding="utf-8"), encoding="utf-8")
        print(f"[INFO] Copied widget to {widget_target}")

    # Ensure index.qmd contains Paper Insights section
    text = index_path.read_text(encoding="utf-8")
    include_snippet = "{{< include paper-freshness-widget.html >}}"
    if include_snippet in text:
        print(f"[INFO] Paper Insights section already present for key: {key}")
        return

    # Append a Paper Insights section before the final citation block if present
    paper_insights_block = (
        "\n\n## Paper Insights\n\n"
        "```{=html}\n"
        "{{< include paper-freshness-widget.html >}}\n"
        "```\n"
    )

    # Simple strategy: append the section just before the trailing citation
    # block if there is a citation block, otherwise append at the end.
    citation_snippet = "```{=markdown}\n[@"
    if citation_snippet in text:
        idx = text.rfind(citation_snippet)
        new_text = text[:idx] + paper_insights_block + "\n" + text[idx:]
    else:
        new_text = text + paper_insights_block + "\n"

    index_path.write_text(new_text, encoding="utf-8")
    print(f"[INFO] Injected Paper Insights section into {index_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Integrate freshness widget into publication pages.")
    parser.add_argument(
        "--keys",
        nargs="+",
        help="Publication keys to process (matching folder names under publications/)",
        required=True,
    )
    parser.add_argument(
        "--widget-source",
        type=str,
        default=str(ROOT / "paper-freshness-widget.html"),
        help="Path to the source paper-freshness-widget.html to copy from.",
    )

    args = parser.parse_args()

    widget_source = Path(args.widget_source)
    for key in args.keys:
        ensure_widget_for_key(key, widget_source)


if __name__ == "__main__":
    main()

