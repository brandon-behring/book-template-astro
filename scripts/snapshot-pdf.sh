#!/usr/bin/env bash
# scripts/snapshot-pdf.sh — copies the built book.pdf into a versioned
# public/ location so subsequent builds serve the frozen artifact at
# /v{version}/book.pdf alongside the latest at /book.pdf.
#
# Usage:
#   scripts/snapshot-pdf.sh <version>
#   e.g., scripts/snapshot-pdf.sh 1.0
#
# Prerequisites: `npm run pdf` must have produced dist-pdf/book.pdf.

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: snapshot-pdf.sh <version>" >&2
  echo "  e.g.: snapshot-pdf.sh 1.0" >&2
  exit 1
fi

VERSION="$1"
SRC="dist-pdf/book.pdf"
DEST_DIR="public/v${VERSION}"
DEST="${DEST_DIR}/book.pdf"

if ! [[ -f "$SRC" ]]; then
  echo "error: $SRC not found. Run \`npm run pdf\` first." >&2
  exit 1
fi

mkdir -p "$DEST_DIR"
cp "$SRC" "$DEST"

echo "✓ Snapshot written: $DEST"
echo ""
echo "Size: $(du -h "$DEST" | cut -f1)"
echo ""
echo "Next: git add $DEST_DIR && git commit -m \"chore: snapshot PDF for v${VERSION}\""
