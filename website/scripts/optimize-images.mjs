// MAISON LUMIÈRE — compress website/public images for fast loading.
// PNG (6–8 MB each) → WebP (a few hundred KB), plus the 1200×630
// Open Graph card. Run from website/: `node scripts/optimize-images.mjs`
import sharp from 'sharp'
import { readdirSync, existsSync, unlinkSync, statSync } from 'node:fs'
import { join } from 'node:path'

const PUB = new URL('../public/', import.meta.url).pathname
const IMAGES = join(PUB, 'images')

const kb = (p) => Math.round(statSync(p).size / 1024)

// 1. images/*.png → images/*.webp (keep originals in assets/, not here)
for (const f of readdirSync(IMAGES)) {
  if (!f.endsWith('.png')) continue
  const src = join(IMAGES, f)
  const out = src.replace(/\.png$/, '.webp')
  await sharp(src).resize({ width: 2048, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out)
  console.log(`${f} ${kb(src)}KB → ${f.replace('.png', '.webp')} ${kb(out)}KB`)
  unlinkSync(src)
}

// 2. cutouts/*.png → compressed in place (alpha preserved, stays .png-free)
const CUTOUTS = join(PUB, 'cutouts')
if (existsSync(CUTOUTS)) {
  for (const f of readdirSync(CUTOUTS)) {
    if (!f.endsWith('.png')) continue
    const src = join(CUTOUTS, f)
    const out = src.replace(/\.png$/, '.webp')
    await sharp(src).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out)
    console.log(`cutouts/${f} ${kb(src)}KB → webp ${kb(out)}KB`)
  }
}

// 3. Open Graph card 1200×630 from the terrace visual
const ogSrc = join(IMAGES, 'terrace-night.webp')
if (existsSync(ogSrc)) {
  const ogOut = join(PUB, 'og-image.jpg')
  await sharp(ogSrc).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile(ogOut)
  console.log(`og-image.jpg ${kb(ogOut)}KB`)
}

console.log('done')
