import { createHash } from 'node:crypto'
import { readdir, readFile, stat, writeFile, mkdir, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

import { IMAGE_TARGETS } from '../src/constants/imageTargets.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = path.join(root, 'src', 'assets')
const outDir = path.join(srcDir, 'optimized')
const cacheFile = path.join(outDir, '.cache.json')

/**
 * Bumped whenever the encoding pipeline changes (resize, quality, format), so
 * caches written by older runs are invalidated instead of silently reused.
 */
const PIPELINE_VERSION = 3

const FLAGS = ['--check', '--dry-run', '--force']
const flags = process.argv.slice(2)
const unknownFlag = flags.find((flag) => !FLAGS.includes(flag))
if (unknownFlag) {
  console.error(`Unknown option ${unknownFlag}. Available: ${FLAGS.join(', ')}`)
  process.exit(2)
}

/** --check never writes: it only reports whether a run would change anything. */
const check = flags.includes('--check')
const dryRun = check || flags.includes('--dry-run')
const force = flags.includes('--force')

const kb = (n) => `${(n / 1024).toFixed(0)} KB`
const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`

let CACHE = {}
try {
  CACHE = JSON.parse(await readFile(cacheFile, 'utf8')) || {}
} catch {
  CACHE = {}
}

async function collectFiles(target) {
  if (target.file) {
    const abs = path.join(srcDir, target.file)
    if (!existsSync(abs)) {
      console.error(`  ! missing file target: ${target.file}`)
      return []
    }
    return [abs]
  }

  const abs = path.join(srcDir, target.dir)
  if (!existsSync(abs)) return []
  const entries = await readdir(abs, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && /\.(jpe?g|png|webp)$/i.test(e.name))
    .map((e) => path.join(abs, e.name))
}

function signature(file, info, target) {
  return createHash('sha1')
    .update(`${path.relative(srcDir, file)}|${target.maxWidth}|${target.quality}|${PIPELINE_VERSION}|${info.mtimeMs}|${info.size}`)
    .digest('hex')
}

async function listOutputs(dir) {
  const found = []
  if (!existsSync(dir)) return found
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) found.push(...(await listOutputs(abs)))
    else if (entry.isFile() && entry.name.endsWith('.webp')) found.push(abs)
  }
  return found
}

let sourceFiles = 0
let sourceBytes = 0
let outputFiles = 0
let outputBytes = 0
let written = 0
let cached = 0
let failed = 0
/** Every output this run is responsible for; anything else in outDir is stale. */
const emitted = new Set()

await mkdir(outDir, { recursive: true })

for (const target of IMAGE_TARGETS) {
  for (const file of await collectFiles(target)) {
    sourceFiles++
    try {
      const info = await stat(file)
      const rel = path.relative(srcDir, file)
      const outRel = rel.replace(/\.(jpe?g|png)$/i, '.webp')
      const outFile = path.join(outDir, outRel)
      const sig = signature(file, info, target)

      sourceBytes += info.size

      emitted.add(outFile)

      if (!force && CACHE[outRel] === sig && existsSync(outFile)) {
        outputBytes += (await stat(outFile)).size
        outputFiles++
        cached++
        continue
      }

      if (dryRun) {
        written++
        outputFiles++
        console.log(`  ${outRel.padEnd(42)} ${kb(info.size).padStart(9)} -> stale`)
        continue
      }

      await mkdir(path.dirname(outFile), { recursive: true })

      // Always re-encode: applies EXIF rotation, drops stray metadata and
      // honours `quality` even when the source is already small enough.
      const meta = await sharp(file)
        .rotate()
        .resize({ width: target.maxWidth, withoutEnlargement: true })
        .webp({ quality: target.quality, effort: 5 })
        .toFile(outFile)

      const outSize = (await stat(outFile)).size
      outputBytes += outSize
      outputFiles++
      written++
      CACHE[outRel] = sig

      const note = `${meta.width}x${meta.height}, -${((1 - outSize / info.size) * 100).toFixed(1)}%`
      console.log(`  ${outRel.padEnd(42)} ${kb(info.size).padStart(9)} -> ${kb(outSize).padStart(8)}  (${note})`)
    } catch (error) {
      failed++
      console.error(`  ! ${path.relative(root, file)}: ${error.message}`)
    }
  }
}

const orphans = (await listOutputs(outDir)).filter((file) => !emitted.has(file))
for (const orphan of orphans) {
  console.log(`  - orphan ${path.relative(root, orphan)}`)
  if (!dryRun) await unlink(orphan)
}

const keptCache = Object.fromEntries(
  Object.entries(CACHE).filter(([rel]) => emitted.has(path.join(outDir, rel)))
)

if (!dryRun) await writeFile(cacheFile, JSON.stringify(keptCache, null, 2))

console.log(`\n  ${written} written, ${cached} up to date`)
console.log(`  sources ${mb(sourceBytes)} (${sourceFiles}) -> outputs ${mb(outputBytes)} (${outputFiles})`)
if (orphans.length) console.log(`  ${orphans.length} orphaned output(s) ${dryRun ? 'would be removed' : 'removed'}`)
if (failed) console.error(`  ${failed} source file(s) failed to process`)
console.log(`  originals untouched in ${path.relative(root, srcDir)}`)

if (failed) process.exit(1)

if (check && (written > 0 || orphans.length > 0)) {
  console.error('\n  Optimized images are out of date: run `npm run optimize:images`')
  process.exit(1)
}
