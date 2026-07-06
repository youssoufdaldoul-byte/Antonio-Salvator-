# MAISON LUMIÈRE — Creative Direction

> Ultra-luxury fine-dining, Monaco. Fictional demo brand.
> One sentence: **the guest walks slowly into an exceptional restaurant at night.**

---

## 1. Concept

MAISON LUMIÈRE is a cinematic arrival. The entire website is a single continuous
approach — from the wet night street of Monaco toward a warm, glowing entrance.
Scroll is the walk. The background video never autoplays; the guest drives every
frame with their own scroll, as if choosing to step closer.

- **Tagline (FR, primary):** « L'art de recevoir. »
- **Sub-line:** « Une adresse d'exception à Monaco. »
- **Address (fictional):** 3 Place des Moulins, Monaco.

## 2. Visual world

Dark, warm, cinematic hospitality. Not tech, not neon, not fast-food.

- Deep charcoal / near-black backgrounds — the night itself.
- Warm amber and gold candlelight accents — the only light source that matters.
- Wet reflective night-street atmosphere, soft drifting fog.
- Tiny warm bokeh particles, subtle film grain.
- Premium serif typography at editorial scale.
- Tasteful glassmorphism panels — thin, dark, warm-tinted glass, never frosty blue.
- Refined Riviera / Belle Époque luxury energy: stone, brass, linen, crystal, candle flame.

**Forbidden:** neon cyberpunk, bright red/yellow fast-food codes, loud badges,
sticker UI, pure white text, real brand names or logos, stock-photo brightness.

## 3. Brand tokens (CSS variables)

```css
:root {
  --bg:       #0E0E0F; /* deep charcoal — the night */
  --bg-2:     #181614; /* warm graphite */
  --surface:  #20201D; /* card black */
  --amber:    #C9772E; /* braise */
  --amber-2:  #E0A458; /* caramel */
  --gold:     #B8974A; /* patina gold */
  --text:     #F2EAD9; /* sesame cream — never pure white */
  --text-dim: #A89C88; /* grey beige */
}
```

## 4. Typography

- **Headings:** elegant serif — Playfair Display (fallback: Cormorant Garamond, Georgia).
  Large editorial sizes, tight leading, generous letter-spacing on labels.
- **Body / UI:** clean sans — Inter (fallback: Satoshi, system-ui).
- Uppercase micro-labels with wide tracking (0.2em+) for chips, tags, section numbers.
- Never pure white (`#FFFFFF`) — always `--text` sesame cream.

## 5. Voice & copy

Minimal but powerful. Short elegant lines. Gastronomic vocabulary:
*maturé, confit, braisé, affiné, glacé, fumé*. Confident wording, no fake hype,
no long paragraphs. Premium commercial hospitality register.

- **Languages:** FR primary; EN and IT prepared behind a discreet switcher.

## 6. Motion principles

- Scroll-driven, not time-driven: the hero video scrubs with scroll (forward and backward).
- Reveals: fade in, rise slightly, brighten softly, staggered. Cinematic, subtle, controlled.
- At least one pinned section where content cycles while the video keeps moving.
- Hover: perspective tilt on dish cards, gold border sweeps, warm glow increases.
- Nothing bounces. Nothing flashes. Everything breathes.

## 7. Favicon

Minimal SVG monogram: **"ML" letters fused with a candle-flame form**, warm
gold/amber (`--gold` → `--amber-2` gradient) on dark/transparent background,
clean premium geometry. Saved at `assets/favicon.svg`, used in `website/public/`.

## 8. Image usage rule

Dish/product stills appear **only** in: Le Menu / Les Plats, the fullscreen
hamburger menu preview, and Réservation (one large interior/terrace visual).
All other sections rely on the fixed scroll-scrubbed background video, large
serif typography, glass panels, animated lines, and warm particles.

## 9. Master reference

`references/restaurant.png` — the exterior facade at night. This image defines
the exact restaurant identity (facade, materials, windows, terrace, lighting)
for every image and video generation. All generated media must remain faithful
to it.
