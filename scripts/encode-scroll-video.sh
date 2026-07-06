#!/usr/bin/env bash
# MAISON LUMIÈRE — re-encode the hero video for frame-accurate scroll scrubbing.
# All-keyframe H.264: every frame is an I-frame (-g 1), so video.currentTime
# seeks land instantly in both scroll directions.
set -euo pipefail

SRC="${1:-assets/videos/hero-restaurant-approach.mp4}"
OUT="${2:-website/public/bg.mp4}"

if [ ! -f "$SRC" ]; then
  echo "Source video not found: $SRC" >&2
  exit 1
fi

mkdir -p "$(dirname "$OUT")"

if command -v ffmpeg >/dev/null 2>&1; then
  ffmpeg -y -i "$SRC" \
    -c:v libx264 -profile:v high -pix_fmt yuv420p \
    -g 1 -keyint_min 1 -sc_threshold 0 \
    -crf 18 -preset slow \
    -movflags +faststart \
    -an \
    "$OUT"
  echo "OK — all-keyframe encode written to $OUT"
else
  cp "$SRC" "$OUT"
  echo "WARNING: ffmpeg not available — copied source as-is to $OUT." >&2
  echo "All-keyframe encoding was SKIPPED; scroll scrubbing may be less smooth." >&2
fi
