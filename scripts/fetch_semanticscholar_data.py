"""Offline Semantic Scholar fetcher with rate limiting.

This script fetches metadata from the Semantic Scholar Graph API for a
specified list of paper IDs and writes the raw JSON to disk. It is
designed to be run *offline* and occasionally (e.g., monthly) to
refresh data for the paper freshness widget while keeping the website
itself static.

Rate limits respected:
- At most 1 request per second.
- Keep total daily requests under 200 (script does not enforce a
  hard 200/day cap, but you should keep the input list small).

Usage example:

    python scripts/fetch_semanticscholar_data.py \
        --ids 779ca7ae97b0288943bbdf175002a1fb243867ce 234294898 \
        --out data/semantic_scholar

This will create JSON files like:

    data/semantic_scholar/779ca7ae97b0288943bbdf175002a1fb243867ce.json

After fetching, you can either manually copy the relevant fields into
`paper-freshness-widget.html` for each publication or use a separate
agent to propagate them into `publications/<Key>/index.qmd`. A
companion YAML file (`scripts/publication_update_state.yml`) is used
to track which publications were updated and when, so repeated runs
can skip recently refreshed entries.
"""

from __future__ import annotations

import argparse
import json
import time
from datetime import date, datetime, timedelta
from pathlib import Path

import requests
import yaml


API_BASE = "https://api.semanticscholar.org/graph/v1/paper"


def fetch_paper(paper_id: str, fields: str) -> dict | None:
    url = f"{API_BASE}/{paper_id}"
    params = {"fields": fields}
    resp = requests.get(url, params=params, timeout=15)
    if resp.status_code != 200:
        print(f"[WARN] Failed to fetch {paper_id}: HTTP {resp.status_code}")
        return None
    return resp.json()


def main() -> None:
    parser = argparse.ArgumentParser(description="Fetch Semantic Scholar metadata offline with rate limiting.")
    parser.add_argument(
        "--ids",
        nargs="+",
        required=True,
        help="Semantic Scholar paper IDs to fetch (40-char hex IDs or CorpusID:...)",
    )
    parser.add_argument(
        "--out",
        type=str,
        default="data/semantic_scholar",
        help="Output directory for JSON files (default: data/semantic_scholar)",
    )
    parser.add_argument(
        "--fields",
        type=str,
        default="title,authors,year,citationCount,referenceCount,venue,doi",
        help="Comma-separated list of fields to request from the API.",
    )

    args = parser.parse_args()

    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    fields = args.fields

    # Load/update per-paper state to avoid refetching too often.
    state_path = Path(__file__).resolve().parents[0] / "publication_update_state.yml"
    if state_path.exists():
        state = yaml.safe_load(state_path.read_text(encoding="utf-8")) or {}
    else:
        state = {}

    today = date.today()
    updated_state = False

    for i, pid in enumerate(args.ids, start=1):
        entry = state.get(pid, {}) or {}
        last_str = entry.get("last_semantic_update")
        last_date = None
        if last_str:
            try:
                last_date = datetime.strptime(last_str, "%Y-%m-%d").date()
            except ValueError:
                last_date = None

        if last_date and (today - last_date) < timedelta(days=30):
            print(f"[INFO] Skipping {pid}: last updated {last_str}")
            continue

        print(f"[INFO] Fetching {pid} ({i}/{len(args.ids)})")
        data = fetch_paper(pid, fields)
        if data is not None:
            out_path = out_dir / f"{pid}.json"
            out_path.write_text(json.dumps(data, indent=2), encoding="utf-8")
            print(f"[INFO] Wrote {out_path}")
            state[pid] = {"last_semantic_update": today.strftime("%Y-%m-%d")}
            updated_state = True
        # Respect the 1 request/second limit
        if i < len(args.ids):
            time.sleep(1.1)

    if updated_state:
        state_path.write_text(yaml.safe_dump(state, sort_keys=True), encoding="utf-8")
        print(f"[INFO] Updated state file: {state_path}")

    print("[INFO] Done. Remember to keep total daily requests under ~200.")


if __name__ == "__main__":
    main()
