/**
 * Turns the raw photo archive in photos-source/ into two web-ready WebP sizes
 * in public/img/:
 *
 *   <name>.webp     max 1600px on the long edge — hero images and the lightbox
 *   <name>-sm.webp  max  720px on the long edge — grid thumbnails and cards
 *
 * Run with `npm run images`. Existing output is skipped unless the source is
 * newer, so re-running is cheap.
 */
import { readdir, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'photos-source'
const OUT = 'public/img'

const SIZES = [
  { suffix: '', width: 1600, quality: 80 },
  { suffix: '-sm', width: 720, quality: 74 },
]

const newer = async (src, dest) => {
  if (!existsSync(dest)) return true
  const [a, b] = await Promise.all([stat(src), stat(dest)])
  return a.mtimeMs > b.mtimeMs
}

const run = async () => {
  await mkdir(OUT, { recursive: true })

  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f))
  let written = 0
  let skipped = 0
  let bytesIn = 0
  let bytesOut = 0

  for (const file of files) {
    const src = path.join(SRC, file)
    const base = file.replace(/\.[^.]+$/, '')
    bytesIn += (await stat(src)).size

    for (const size of SIZES) {
      const dest = path.join(OUT, `${base}${size.suffix}.webp`)

      if (await newer(src, dest)) {
        await sharp(src)
          .rotate() // honour EXIF orientation from phone cameras
          .resize({ width: size.width, withoutEnlargement: true })
          .webp({ quality: size.quality })
          .toFile(dest)
        written++
      } else {
        skipped++
      }

      bytesOut += (await stat(dest)).size
    }
  }

  const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`
  console.log(
    `${files.length} source images · ${written} written, ${skipped} up to date\n` +
      `${mb(bytesIn)} in  →  ${mb(bytesOut)} out across ${SIZES.length} sizes`,
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
