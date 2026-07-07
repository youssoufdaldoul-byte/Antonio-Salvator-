# MAISON LUMIÈRE

Cinematic, scroll-driven website for a fictional ultra-luxury fine-dining
restaurant in Monaco. AI-generated media (Higgsfield — Seedance 2.0, Nano
Banana Pro) + Vite + React + GSAP + ScrollTrigger + Lenis + Three.js.

**Live site:** https://youssoufdaldoul-byte.github.io/Antonio-Salvator-/
(auto-redeployed by GitHub Actions on every push to this branch)

## Run locally

```bash
cd website
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## ⚙️ Client configuration — ONE file

Everything editable lives in **`website/src/config/restaurant.js`**:
name, address, phone (click-to-call), email, hours, social links, the
Formspree ID and an optional pro booking URL (TheFork / Zenchef). Change a
value there and the whole site updates.

## ✉️ Activate the reservation form (Formspree — free)

1. Create a free account at https://formspree.io
2. "New form" → set the destination to the restaurant's reservation email.
3. Copy the form ID (the code after `/f/` in the endpoint, e.g. `mqkvabcd`).
4. Paste it in `website/src/config/restaurant.js` → `formspreeId: 'mqkvabcd'`.
5. Push — done. Every request (date, time, guests, name, phone, email,
   message) arrives in that inbox; the guest sees an elegant confirmation.

While `formspreeId` is empty the form says clearly that sending is not yet
connected and points to the phone button — nothing is faked.
To switch to a pro booking tool later, paste its URL into `bookingUrl`.

## 🍽️ 360° dish videos

The dish cards play a 360° rotation video on hover (desktop) / soft loop
(mobile), with automatic fallback to the cutout PNG, then to a placeholder.
Expected files: `website/public/dishes-360/dish-1-360.mp4 … dish-6-360.mp4`
(Seedance 2.0, 1:1, 8 s, silent). Job IDs + download links:
`assets/MANIFEST.md` → "360° rotations".

## 🖼️ Media pipeline

- Source media lives in `assets/` (originals) and `references/`.
- `website/scripts/optimize-images.mjs` compresses `website/public` images
  to WebP and generates `og-image.jpg` (run from `website/`).
- `scripts/encode-scroll-video.sh` re-encodes the hero video to all-keyframe
  H.264 for frame-accurate scroll scrubbing (needs ffmpeg).
- The Higgsfield CDN is blocked from the build environment: generated media
  is reported as job_id + preview link and committed manually
  (see `assets/MANIFEST.md`).

## Languages

FR (primary), EN, IT, RU, DE, ES — discreet switcher in the header
(desktop) and footer. All copy lives in `website/src/i18n.js`.

## Structure

```
references/            restaurant.png — master facade reference
assets/                images / dishes / cutouts / videos + MANIFEST.md
copy/                  creative direction, prompts, website brief
scripts/               encode-scroll-video.sh
website/               Vite + React app (src/, public/, scripts/)
.github/workflows/     deploy-pages.yml → GitHub Pages
```
