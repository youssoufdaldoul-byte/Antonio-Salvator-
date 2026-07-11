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
