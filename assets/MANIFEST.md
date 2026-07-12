# MAISON LUMIÈRE — Asset Manifest (generated 2026-07-06)

The Higgsfield CDN is unreachable from the build environment, so each file
must be downloaded from its link and committed at the listed path.
Base URL: `https://d8j0ntlcm91z4.cloudfront.net/user_3FzneIW6DeCzXNNc7KNNfmQuLKf/`

## Master reference

| Path | Job ID | File |
|---|---|---|
| `references/restaurant.png` (frontal, ACTIVE) | `9d82b7a4-f68b-4b69-a177-e301f0820cdb` | `hf_20260706_183409_9d82b7a4-f68b-4b69-a177-e301f0820cdb.png` |
| (superseded 3/4-angle v1) | `cb60fcf1-7671-439e-a74f-53d2c58d171e` | `hf_20260706_183031_cb60fcf1-7671-439e-a74f-53d2c58d171e.png` |

## Hero video (Seedance 2.0, 16:9, 12 s, silent, 720p fast)

| Path | Job ID | File |
|---|---|---|
| `assets/videos/hero-restaurant-approach.mp4` | `03781270-8977-48c4-ac59-46049de2063b` | `hf_20260706_183612_03781270-8977-48c4-ac59-46049de2063b.mp4` |

Then: `bash scripts/encode-scroll-video.sh` → `website/public/bg.mp4`.

## Ambiance stills (Nano Banana Pro, 2K)

| Path | Job ID | File |
|---|---|---|
| `assets/images/interior-hall.png` | `0942d4fe-bf21-4666-b631-0317bfcb4399` | `hf_20260706_184225_0942d4fe-bf21-4666-b631-0317bfcb4399.png` |
| `assets/images/detail-table.png` | `90632608-4829-4997-9d85-0a5ab37465d9` | `hf_20260706_184240_90632608-4829-4997-9d85-0a5ab37465d9.png` |
| `assets/images/detail-bar.png` | `8a86cda8-2639-4537-bb91-718d1402b06c` | `hf_20260706_184243_8a86cda8-2639-4537-bb91-718d1402b06c.png` |
| `assets/images/terrace-night.png` | `e442026c-cf28-4209-abfd-126787ac3a7c` | `hf_20260706_184245_e442026c-cf28-4209-abfd-126787ac3a7c.png` |

## Signature dishes (Nano Banana Pro, 2K, 1:1 — dish-1 anchors the style)

| Path | Job ID | File |
|---|---|---|
| `assets/dishes/dish-1.png` — Foie gras poêlé | `63eed4f5-ad13-419c-802c-d41474515b66` | `hf_20260706_184515_63eed4f5-ad13-419c-802c-d41474515b66.png` |
| `assets/dishes/dish-2.png` — Risotto truffe noire | `0acc93e1-7161-4072-a3ba-f86f3793c860` | `hf_20260706_184949_0acc93e1-7161-4072-a3ba-f86f3793c860.png` |
| `assets/dishes/dish-3.png` — Bœuf maturé | `94e1a81d-a133-4d00-a2b8-59098d227f8d` | `hf_20260706_184954_94e1a81d-a133-4d00-a2b8-59098d227f8d.png` |
| `assets/dishes/dish-4.png` — Poisson de ligne | `bdd1937e-abcc-45ca-b900-df005cc9fdde` | `hf_20260706_184957_bdd1937e-abcc-45ca-b900-df005cc9fdde.png` |
| `assets/dishes/dish-5.png` — Homard bleu | `f6fcc4b8-02fb-486e-b61a-1a81f4490ce1` | `hf_20260706_185000_f6fcc4b8-02fb-486e-b61a-1a81f4490ce1.png` |
| `assets/dishes/dish-6.png` — Dessert Lumière | `b0ed5a92-23dd-4d85-9214-9a6fbde84b35` | `hf_20260706_185213_b0ed5a92-23dd-4d85-9214-9a6fbde84b35.png` |

## Transparent cutouts (background remover)

| Path | Job ID | File |
|---|---|---|
| `assets/cutouts/dish-1-cutout.png` | `ccf66555-b5c2-4723-a24a-c94653b5211b` | `hf_20260706_185216_ccf66555-b5c2-4723-a24a-c94653b5211b.png` |
| `assets/cutouts/dish-2-cutout.png` | `34836748-c1d9-486a-b90e-8d8a0828f4fc` | `hf_20260706_185220_34836748-c1d9-486a-b90e-8d8a0828f4fc.png` |
| `assets/cutouts/dish-3-cutout.png` | `a3ba9a3a-ffa6-400a-8e35-5d6af4a2292a` | `hf_20260706_185231_a3ba9a3a-ffa6-400a-8e35-5d6af4a2292a.png` |
| `assets/cutouts/dish-4-cutout.png` | `61f9354b-df44-4d86-9984-53e0708096da` | `hf_20260706_185459_61f9354b-df44-4d86-9984-53e0708096da.png` |
| `assets/cutouts/dish-5-cutout.png` | `ccdeff99-e326-446b-9f5e-18cd71e373a2` | `hf_20260706_185501_ccdeff99-e326-446b-9f5e-18cd71e373a2.png` |
| `assets/cutouts/dish-6-cutout.png` | `883883f9-7e92-4d0d-a801-a73194942ee4` | `hf_20260706_185506_883883f9-7e92-4d0d-a801-a73194942ee4.png` |

## Website copies

After committing the originals, copy for the site:

```bash
cp assets/images/*.png website/public/images/
for i in 1 2 3 4 5 6; do cp "assets/cutouts/dish-$i-cutout.png" "website/public/cutouts/"; done
bash scripts/encode-scroll-video.sh   # writes website/public/bg.mp4
```

## 360° rotations (Seedance 2.0, 1:1, 8 s, silent) → `website/public/dishes-360/`

| Path | Job ID | File |
|---|---|---|
| `dishes-360/dish-1-360.mp4` — Foie gras | `5feea8a5-4c7d-4a15-97bb-32b6a2fa2092` | `hf_20260707_135611_5feea8a5-4c7d-4a15-97bb-32b6a2fa2092.mp4` |
| `dishes-360/dish-2-360.mp4` … `dish-6-360.mp4` | **pending — Higgsfield workspace out of credits** (5 credits left on starter plan). Re-run after top-up with the same prompt/settings, start_image = dish job IDs above. |

## Page · La Maison (chef & team) — Nano Banana Pro 2K → `website/public/images/`

| Path | Job ID | File |
|---|---|---|
| `images/kitchen-scene.webp` (16:9) | `70533786-5a29-446f-8ea7-fb3dc05072cc` | `hf_20260711_133114_70533786-5a29-446f-8ea7-fb3dc05072cc.png` |
| `images/plating-hands.webp` (4:5) | `662267fb-9548-4cf6-93fa-3e46f3c4009f` | `hf_20260711_133126_662267fb-9548-4cf6-93fa-3e46f3c4009f.png` |
| `images/kitchen-pass.webp` (16:9) | `e0ef7b64-a360-4a39-9efa-53a3061b9438` | `hf_20260711_133145_e0ef7b64-a360-4a39-9efa-53a3061b9438.png` |

Download the PNGs, then from `website/`: drop them in `public/images/` as
`kitchen-scene.png` etc. and run `node scripts/optimize-images.mjs` to get the
`.webp` versions the page expects. Until then the page falls back to existing
ambiance photography.

## Page · Les Tables (floor plan ambiances) — Nano Banana Pro 2K → `website/public/images/`

| Path | Job ID | File |
|---|---|---|
| `images/table-alcove.webp` (4:5) — L'Alcôve | `0805adf2-57f4-436a-b01b-c079ba9e4ce3` | `hf_20260711_183659_0805adf2-57f4-436a-b01b-c079ba9e4ce3.png` |
| `images/table-vue.webp` (4:5) — La Table Vue | `10e9f550-192f-49e9-9fd3-d934a3cb42f1` | `hf_20260711_183717_10e9f550-192f-49e9-9fd3-d934a3cb42f1.png` |
| `images/table-salle.webp` (16:9) — Salle / Rotonde / Salon / Passe | `11d12602-1c42-422c-bc54-dcf0041b4719` | `hf_20260711_183733_11d12602-1c42-422c-bc54-dcf0041b4719.png` |

Same flow: download PNGs → `public/images/table-alcove.png` etc. →
`node scripts/optimize-images.mjs`. Fallbacks to existing photography until then.

## Page · Nos Maisons (two addresses) — Nano Banana Pro 2K → `website/public/images/`

| Path | Job ID | File |
|---|---|---|
| `images/house-monaco.webp` (4:5) — Monte-Carlo | `ca012922-8a44-4c0a-b0dc-437856b47094` | `hf_20260712_000427_ca012922-8a44-4c0a-b0dc-437856b47094.png` |
| `images/house-newyork.webp` (4:5) — New York | `829bdd36-68e7-42ed-806c-0a5b371b8177` | `hf_20260712_000436_829bdd36-68e7-42ed-806c-0a5b371b8177.png` |

Download PNGs → `public/images/house-monaco.png` etc. → `node scripts/optimize-images.mjs`.
Fallbacks: terrace-night (MC) / interior-hall (NY) until committed.

## Page · La Boutique — product stills + 360° videos → `website/public/products/`

Stills (Nano Banana Pro 2K, 1:1) → `product-N.png` then `node scripts/optimize-images.mjs` → `.webp`:

| Product | Still job ID | File |
|---|---|---|
| 1 · Parfum « Lumière » | `e69a7ce5-8196-4a88-8b70-4e801dee2cdf` | `hf_20260712_000950_e69a7ce5-8196-4a88-8b70-4e801dee2cdf.png` |
| 2 · Sauce à la truffe noire | `a9d33030-e95a-4262-983a-768155febcc1` | `hf_20260712_001000_a9d33030-e95a-4262-983a-768155febcc1.png` |
| 3 · Huile d'olive d'exception | `0cca5f92-7ec1-40cf-9eb5-b1a437b50080` | `hf_20260712_001012_0cca5f92-7ec1-40cf-9eb5-b1a437b50080.png` |
| 4 · Bougie « Braise » | `fde98c32-6b50-4eb8-addc-fbadf5691505` | `hf_20260712_001022_fde98c32-6b50-4eb8-addc-fbadf5691505.png` |

360° rotation videos (Seedance 2.0, 1:1, 8 s, silent) → `product-N-360.mp4`:

| Product | Video job ID |
|---|---|
| 1 · Parfum | `8be7ed48-ffc3-49cd-8caa-64533284fdd1` |
| 2 · Sauce truffe | `e9159604-b5f0-4eff-8447-418b726d28db` |
| 3 · Huile d'olive | `2b905575-7f8b-4cb8-a315-dc1705096126` |
| 4 · Bougie | `e2e2b44d-831c-46a6-927d-0ec911b19856` |

Base URL for all: `https://d8j0ntlcm91z4.cloudfront.net/user_3FzneIW6DeCzXNNc7KNNfmQuLKf/`
Card fallback chain: `product-N-360.mp4` → `product-N.webp` → gold monogram.
The optimize-images script also converts `public/products/*.png` → `.webp`.

## Page · Événements (Monaco calendar) — Nano Banana Pro 2K 16:9 → `website/public/images/`

| Path | Job ID | File |
|---|---|---|
| `images/event-race.webp` — Grand Prix (light trails) | `b3f2ecf4-32da-44ae-8cf1-06979a5a03c1` | `hf_20260712_002311_b3f2ecf4-32da-44ae-8cf1-06979a5a03c1.png` |
| `images/event-harbour.webp` — Yacht Show (harbour) | `c194cf49-c20c-4e64-b1dd-201e7fc12903` | `hf_20260712_002321_c194cf49-c20c-4e64-b1dd-201e7fc12903.png` |
| `images/event-festive.webp` — Fête / Réveillon (festive) | `957ff5f6-1e1a-4f02-901b-f791041b5bd7` | `hf_20260712_002331_957ff5f6-1e1a-4f02-901b-f791041b5bd7.png` |

Download → `public/images/event-race.png` etc. → `node scripts/optimize-images.mjs`.
Fallbacks: terrace-night / detail-bar until committed.
