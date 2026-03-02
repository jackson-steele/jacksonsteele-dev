/**
 * Image optimization script for jacksonsteele.dev
 *
 * Converts all large PNG/JPEG images in public/images/ to WebP,
 * resized to appropriate display widths. Run once to replace source files.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMAGES_DIR = join(ROOT, "public", "images");

// Per-file config: max width and output quality
// Files not listed here get default settings (1200px, quality 82)
const FILE_CONFIG = {
  "profile-picture.png": { maxWidth: 400, quality: 85 },
  "main/cover-photo.jpg": { maxWidth: 1600, quality: 82 },
  "main/highlight-cards/product-manager-intern.png": { maxWidth: 900, quality: 82 },
  "main/highlight-cards/prd-pitch-deck.png": { maxWidth: 900, quality: 82 },
  "main/highlight-cards/personal-projects.png": { maxWidth: 900, quality: 82 },
  "main/highlight-cards/friends.png": { maxWidth: 900, quality: 82 },
  "main/highlight-cards/astrophysicist.png": { maxWidth: 900, quality: 82 },
  "main/highlight-cards/software-engineer.png": { maxWidth: 900, quality: 82 },
  "main/highlight-cards/go-to-market-plan.png": { maxWidth: 900, quality: 82 },
  "main/logos/kellogg.png": { maxWidth: 200, quality: 85 },
  "main/logos/byu.png": { maxWidth: 200, quality: 85 },
  "main/logos/ideas.png": { maxWidth: 200, quality: 85 },
  "main/logos/amazon.png": { maxWidth: 200, quality: 85 },
  "amazon/cover-photo.jpeg": { maxWidth: 1200, quality: 82 },
  "mba/cover-photo.jpeg": { maxWidth: 1200, quality: 82 },
  "mba/hidenn-ai-group-photo.jpg": { maxWidth: 1200, quality: 82 },
  "ideas/cover-photo.jpeg": { maxWidth: 1200, quality: 82 },
  "astrophysics/cover-photo.jpg": { maxWidth: 1200, quality: 82 },
  "astrophysics/aas-photo.jpg": { maxWidth: 1200, quality: 82 },
  "personal-projects/black_widow_spider.jpg": { maxWidth: 1200, quality: 82 },
  "personal-projects/brown_recluse_spider.jpeg": { maxWidth: 1200, quality: 82 },
  "personal-projects/web.jpg": { maxWidth: 1200, quality: 82 },
  "personal-projects/heirarchy-card.png": { maxWidth: 900, quality: 82 },
  "personal-projects/location-based-notes-card.png": { maxWidth: 900, quality: 82 },
  "personal-projects/statistically-nearest-spider-card.jpg": { maxWidth: 900, quality: 82 },
  "heirarchy/ranking.png": { maxWidth: 1200, quality: 82 },
};

const DEFAULT_CONFIG = { maxWidth: 1200, quality: 82 };

// Extensions we'll process
const PROCESSABLE = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function getAllImages(dir, base = IMAGES_DIR) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(full, base)));
    } else if (entry.isFile() && PROCESSABLE.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function getRelativePath(full) {
  return full.slice(IMAGES_DIR.length + 1).replace(/\\/g, "/");
}

function getWebpPath(full) {
  const dir = dirname(full);
  const name = basename(full, extname(full));
  return join(dir, name + ".webp");
}

async function formatSize(bytes) {
  const kb = bytes / 1024;
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
}

async function processImage(full) {
  const rel = getRelativePath(full);
  const config = FILE_CONFIG[rel] ?? DEFAULT_CONFIG;
  const outPath = getWebpPath(full);
  const isSameFile = full === outPath;

  const beforeStat = await stat(full);
  const beforeSize = beforeStat.size;

  await sharp(full)
    .rotate()
    .resize({ width: config.maxWidth, withoutEnlargement: true })
    .webp({ quality: config.quality })
    .toFile(isSameFile ? outPath + ".tmp" : outPath);

  if (isSameFile) {
    await rename(outPath + ".tmp", outPath);
  }

  // Remove original non-webp file
  if (!isSameFile) {
    await unlink(full);
  }

  const afterStat = await stat(outPath);
  const afterSize = afterStat.size;
  const savings = Math.round((1 - afterSize / beforeSize) * 100);

  const before = await formatSize(beforeSize);
  const after = await formatSize(afterSize);
  console.log(`  ${rel} → ${before} → ${after} (-${savings}%)`);
}

async function main() {
  console.log("Optimizing images in public/images/...\n");

  const images = await getAllImages(IMAGES_DIR);
  console.log(`Found ${images.length} image(s) to process.\n`);

  for (const img of images) {
    await processImage(img);
  }

  console.log("\nDone! Update image src props in your code to use .webp extensions.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
