/**
 * recompress.mjs – aggressively re-compress hero WebP files using a
 * temp-file swap to work around OneDrive file-lock issues.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEST = path.join(__dirname, "..", "src", "assets");

const jobs = [
  { file: "hero-main.webp",          maxW: 2400, q: 76 },
  { file: "hero-building.webp",      maxW: 2400, q: 76 },
  { file: "about-hero.webp",         maxW: 2000, q: 76 },
  { file: "residency-emerging.webp", maxW: 1800, q: 73 },
  { file: "texture-weave.webp",      maxW: 1600, q: 70 },
  { file: "community-terrace.webp",  maxW: 1800, q: 73 },
  { file: "mangrove.webp",           maxW: 1800, q: 73 },
  { file: "pillar-residency.webp",   maxW: 1600, q: 72 },
];

for (const { file, maxW, q } of jobs) {
  const fp  = path.join(DEST, file);
  const tmp = fp + ".tmp.webp";
  try {
    await sharp(fp)
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: q })
      .toFile(tmp);

    // atomic-ish swap: rename overwrites destination
    fs.renameSync(tmp, fp);
    const kb = (fs.statSync(fp).size / 1024).toFixed(0);
    console.log(`  ✓  ${file.padEnd(35)} ${String(kb).padStart(5)} KB`);
  } catch (e) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    console.error(`  ✗  ${file}: ${e.message}`);
  }
}
console.log("\nDone.");
