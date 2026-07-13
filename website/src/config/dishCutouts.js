// LA TABLE D'ANTONIO SALVATORE — signature-dish transparent cutouts
// The background-removed PNG cutouts that drive the dish "pop-out" effect
// were generated on Higgsfield and live on its public CDN. They are served
// straight from there so the pop-out works even though the transparent PNGs
// are not committed to the repo. DishCard keeps its fallback chain:
// cutout → round dish photo (self-hosted webp) → text placeholder.
//
// To self-host later: download each URL into website/public/cutouts/ as
// dish-<n>-cutout.png and delete this map — DishCard falls back to that
// local path automatically.

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FzneIW6DeCzXNNc7KNNfmQuLKf'

export const DISH_CUTOUTS = {
  1: `${CDN}/hf_20260706_185216_ccf66555-b5c2-4723-a24a-c94653b5211b.png`,
  2: `${CDN}/hf_20260706_185220_34836748-c1d9-486a-b90e-8d8a0828f4fc.png`,
  3: `${CDN}/hf_20260706_185231_a3ba9a3a-ffa6-400a-8e35-5d6af4a2292a.png`,
  4: `${CDN}/hf_20260706_185459_61f9354b-df44-4d86-9984-53e0708096da.png`,
  5: `${CDN}/hf_20260706_185501_ccdeff99-e326-446b-9f5e-18cd71e373a2.png`,
  6: `${CDN}/hf_20260706_185506_883883f9-7e92-4d0d-a801-a73194942ee4.png`,
}
