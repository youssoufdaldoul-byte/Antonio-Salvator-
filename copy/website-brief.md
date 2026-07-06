# MAISON LUMIÈRE — Website Brief

Single-page cinematic scroll-driven site in `website/`.
Stack: **Vite + React, GSAP, ScrollTrigger, Lenis, Three.js**.

## Core system — true scroll-driven video

- `website/public/bg.mp4` (all-keyframe H.264) fixed fullscreen, `object-fit: cover`.
- Paused by default. No autoplay, no loop. `muted playsInline preload="auto"`.
- `video.currentTime = scrollProgress * video.duration`, smoothed.
- Lenis smooth scroll → ScrollTrigger.update; GSAP ticker drives Lenis RAF;
  `gsap.ticker.lagSmoothing(0)`.
- Dev hooks: `window.__bgv`, `window.__lenis`, `window.__ST`.

### Layers
| z | layer |
|---|-------|
| 0 | `#bgv` fixed fullscreen video |
| 1 | warm cinematic tint / readability gradient |
| 2 | grain + warm particles (subtle, optional Three.js) |
| 10 | scrolling content sections |

## Sections (each ~100–140vh)

1. **Hero / Arrivée** — video anchor, no static image. « MAISON LUMIÈRE »,
   « L'art de recevoir. », « Une adresse d'exception à Monaco. » Header,
   hamburger, Réserver CTA, scroll indicator, glass chips.
2. **L'Expérience (Story)** — *pinned*: editorial serif lines appear one by one
   while the video keeps scrubbing. Glass panels, kinetic keywords, highlight
   lines. No images.
3. **La Maison (Philosophy)** — background typography « LE FEU, LA MATIÈRE ».
   Four minimal cards: 01 CUISINE / 02 CAVE / 03 SERVICE / 04 CADRE. Gold
   border sweep, bloom, connector lines. No images.
4. **Le Menu / Les Plats** — the 6 dish cards with transparent cutout pop-out,
   backplate, gold rim glow, name + gastronomic description + discreet price +
   « Découvrir ». Desktop tilt/lift hover; mobile keeps pop-out, no tilt.
5. **Ambiance / Éditorial** — huge kinetic serif typography, atmosphere tags,
   technical labels, thin animated lines, particles. No images.
6. **Réservation** — one large visual (interior or terrace). « Vivez
   l'expérience. » « MAISON LUMIÈRE — 3 Place des Moulins, Monaco. »
   « Réserver une table » CTA, hours + address, minimal footer + language switch.

## Fullscreen hamburger menu

GSAP open/close, fullscreen dark-warm overlay. Links left (Accueil,
L'Expérience, La Maison, Le Menu, Ambiance, Réserver), oversized visual right
(~45–60% height) in a glass preview panel with warm backplate + gold rim.
Hover: item animates, preview cross-fades, others dim. Clean X button states.

## Languages

FR primary, EN + IT via discreet switcher (all UI copy in a translations map).

## Motion polish

Scroll reveals: fade + rise + soften-brighten, staggered. Refined hovers,
cinematic state transitions, no over-animation.
