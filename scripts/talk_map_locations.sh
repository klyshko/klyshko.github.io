#!/usr/bin/env bash
# List unique "location" values from _talks/*.md so you can sync _data/location_coords.yml
set -euo pipefail
cd "$(dirname "$0")/.."
grep -h '^location:' _talks/*.md 2>/dev/null | sort -u
