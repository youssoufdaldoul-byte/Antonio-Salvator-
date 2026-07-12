// LA TABLE D'ANTONIO SALVATORE — boutique product media
// The cinematic stills (Nano Banana Pro, 2K) and 360° rotation videos
// (Seedance 2.0) generated for each product live on the Higgsfield public
// CDN. They are served straight from there so real visitors see the photos
// even though the files are not committed to the repo. ProductObject keeps
// its graceful fallback chain: video → still → gold monogram, so if a URL
// ever becomes unavailable the boutique degrades elegantly.
//
// To self-host later: download each URL into website/public/products/ as
// product-<id>.webp / product-<id>-360.mp4 and delete this map — the
// component falls back to those local paths automatically.

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FzneIW6DeCzXNNc7KNNfmQuLKf'

export const PRODUCT_MEDIA = {
  1: {
    image: `${CDN}/hf_20260712_000950_e69a7ce5-8196-4a88-8b70-4e801dee2cdf_min.webp`,
    video: `${CDN}/hf_20260712_001317_8be7ed48-ffc3-49cd-8caa-64533284fdd1.mp4`,
  },
  2: {
    image: `${CDN}/hf_20260712_001000_a9d33030-e95a-4262-983a-768155febcc1_min.webp`,
    video: `${CDN}/hf_20260712_001327_e9159604-b5f0-4eff-8447-418b726d28db.mp4`,
  },
  3: {
    image: `${CDN}/hf_20260712_001012_0cca5f92-7ec1-40cf-9eb5-b1a437b50080_min.webp`,
    video: `${CDN}/hf_20260712_001845_2b905575-7f8b-4cb8-a315-dc1705096126.mp4`,
  },
  4: {
    image: `${CDN}/hf_20260712_001022_fde98c32-6b50-4eb8-addc-fbadf5691505_min.webp`,
    video: `${CDN}/hf_20260712_002032_e2e2b44d-831c-46a6-927d-0ec911b19856.mp4`,
  },
}
