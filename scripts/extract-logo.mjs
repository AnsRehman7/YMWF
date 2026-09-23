/**
 * Recovers the YMWF crest from the highest-resolution artwork we have — the
 * International Youth Day poster — and writes a clean, square logo asset.
 *
 * The poster sets the crest on a flat beige ground with faint building
 * silhouettes behind it. Every one of those background pixels is light AND
 * close to grey, while the crest itself is built from saturated red, blue,
 * green and orange. So we flatten anything light-and-desaturated to pure white
 * and keep the rest, which lifts the crest onto a white tile without touching
 * its colours.
 *
 * This is a stopgap. Replace public/brand/ymwf-logo.png with the original
 * vector or transparent PNG as soon as it is available — nothing else needs to
 * change.
 */
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const SOURCE = 'photos-source/IMG-20260829-WA0110.jpg'
const CROP = { left: 855, top: 1685, width: 655, height: 655 }
const OUT_DIR = 'public/brand'

// A pixel is background if it is bright and close to neutral grey.
const LIGHTNESS_FLOOR = 118
const SATURATION_CEILING = 42

const run = async () => {
  await mkdir(OUT_DIR, { recursive: true })

  const { data, info } = await sharp(SOURCE)
    .extract(CROP)
    .resize({ width: 1024, kernel: 'lanczos3' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const px = info.width * info.height
  let cleared = 0

  for (let i = 0; i < px; i++) {
    const o = i * info.channels
    const r = data[o]
    const g = data[o + 1]
    const b = data[o + 2]

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)

    if (max >= LIGHTNESS_FLOOR && max - min <= SATURATION_CEILING) {
      data[o] = 255
      data[o + 1] = 255
      data[o + 2] = 255
      cleared++
    }
  }

  const cleaned = sharp(data, { raw: info })

  await cleaned
    .clone()
    .png({ compressionLevel: 9 })
    .toFile(`${OUT_DIR}/ymwf-logo.png`)

  await cleaned
    .clone()
    .resize({ width: 256 })
    .png({ compressionLevel: 9 })
    .toFile(`${OUT_DIR}/ymwf-logo-256.png`)

  // Browser tab icon.
  await cleaned
    .clone()
    .resize({ width: 64 })
    .png({ compressionLevel: 9 })
    .toFile('public/favicon.png')

  console.log(
    `crest extracted from ${SOURCE}\n` +
      `${info.width}×${info.height} · ${((cleared / px) * 100).toFixed(1)}% flattened to white\n` +
      `→ ${OUT_DIR}/ymwf-logo.png and ymwf-logo-256.png`,
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
