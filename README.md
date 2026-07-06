# MAISON LUMIÈRE

Cinematic, scroll-driven website for a fictional ultra-luxury fine-dining
restaurant in Monaco. Built with AI-generated media (Higgsfield MCP — Seedance
2.0, GPT Image 2 / Nano Banana Pro) and Vite + React + GSAP + ScrollTrigger +
Lenis + Three.js.

## Structure

```
references/          restaurant.png — master facade reference (identity lock)
assets/
  references/        working reference copies
  images/            interior-hall, detail-table, detail-bar, terrace-night
  videos/            hero-restaurant-approach.mp4 (Seedance 2.0)
  dishes/            dish-1 … dish-6 (signature plates)
  cutouts/           dish-N-cutout.png (transparent pop-out PNGs)
  menu/              menu-specific assets
copy/                creative-direction, image-prompts, video-prompt, website-brief
scripts/             encode-scroll-video.sh (all-keyframe H.264 for scrubbing)
website/             Vite + React single-page site
```

## Media workflow

The Higgsfield CDN is blocked from this environment, so generated media cannot
be saved locally by the agent. Each generation is reported as **job_id +
preview link**; files are downloaded manually and committed to the paths above.

Hero video approval checkpoint: the Seedance 2.0 hero video must be explicitly
approved before any further asset generation or website build.

## Run locally

```bash
cd website
npm install
npm run dev        # dev server
npm run build      # production build
npm run preview    # preview production build
```

The scroll-scrubbed background expects `website/public/bg.mp4`
(re-encode via `scripts/encode-scroll-video.sh` when ffmpeg is available).
