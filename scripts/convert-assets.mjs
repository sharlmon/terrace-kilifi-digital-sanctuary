/**
 * convert-assets.mjs
 * Converts selected Terrace Kilifi images to optimised WebP and writes
 * them into src/assets/.  Run with:  node scripts/convert-assets.mjs
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "terracekilifiimages");
const DEST = path.join(ROOT, "src", "assets");

fs.mkdirSync(DEST, { recursive: true });

/**
 * CURATED SELECTION
 * Each entry: { src: "ORIGINAL.JPG", dest: "semantic-name.webp", quality: 82 }
 *
 * Assignments
 * ─────────────────────────────────────────────────────────────────────────────
 * hero-main          → Homepage hero (most cinematic wide-landscape)
 * hero-pool          → Homepage CTA section background (alternate mood)
 * art-space          → Art Space hero & pillar card
 * residency-pro      → Professional Residency section image
 * residency-emerging → Emerging Residency section image
 * exchange           → Artists' Exchange hero
 * about-hero         → About page hero
 * mangrove           → Homepage editorial split + About story image
 * texture-weave      → Accent floating thumbnail (homepage)
 * community-gather   → Homepage Pillars — community image
 * collaboration      → Art Space "propose a project" split image
 * artists-collab     → Exchange / Artists' Exchange split image
 */
const ASSETS = [
  // ─── HERO ─────────────────────────────────────────────────────────────────
  // 262A9511.JPG — round pool amid lush green forest, cinematic depth & calm
  { src: "262A9511.JPG", dest: "hero-main.webp",          quality: 85 },
  // 262A9415.JPG — building entrance through tropical foliage, wide + editorial
  { src: "262A9415.JPG", dest: "hero-building.webp",      quality: 82 },

  // ─── ART SPACE ────────────────────────────────────────────────────────────
  // 262A9568.JPG — intimate interior creative conversation, macramé wall art
  { src: "262A9568.JPG", dest: "art-space.webp",          quality: 82 },
  // 262A9386.JPG — open communal interior, natural light, coworking/studio feel
  { src: "262A9386.JPG", dest: "art-space-interior.webp", quality: 80 },

  // ─── RESIDENCY ────────────────────────────────────────────────────────────
  // 262A9511.JPG (pool)  — already exported as hero-main.webp
  // We reuse hero-main for professional residency background
  // 262A9525.JPG — community on the terrace, gathering & drinks, warm
  { src: "262A9525.JPG", dest: "community-terrace.webp",  quality: 80 },
  // 262A9534.JPG — rope swings under ancient tree, contemplative, earthy
  { src: "262A9534.JPG", dest: "residency-emerging.webp", quality: 80 },

  // ─── EXCHANGE ─────────────────────────────────────────────────────────────
  // 262A9568.JPG already as art-space.webp.
  // Use interior shot for exchange hero — most cross-cultural
  { src: "262A9386.JPG", dest: "exchange.webp",           quality: 82 },

  // ─── ABOUT ────────────────────────────────────────────────────────────────
  // 262A9415.JPG — architectural approach path, lush + heritage
  { src: "262A9415.JPG", dest: "about-hero.webp",         quality: 82 },
  // 262A9525.JPG — communal gathering
  { src: "262A9525.JPG", dest: "mangrove.webp",           quality: 80 },

  // ─── ACCENT / WEAVE TEXTURE ───────────────────────────────────────────────
  // 262A9534.JPG — tree + swings — earthy, textural
  { src: "262A9534.JPG", dest: "texture-weave.webp",      quality: 78 },

  // ─── EXTRA PILLAR IMAGES ──────────────────────────────────────────────────
  // 262A9568.JPG — creative collaboration (pillar 1 — art space)
  { src: "262A9568.JPG", dest: "pillar-art-space.webp",   quality: 80 },
  // 262A9511.JPG — pool / sanctuary (pillar 2 — residency)
  { src: "262A9511.JPG", dest: "pillar-residency.webp",   quality: 80 },
  // 262A9386.JPG — open studio / communal (pillar 3 — exchange)
  { src: "262A9386.JPG", dest: "pillar-exchange.webp",    quality: 80 },

  // ─── TEAM & TESTIMONIALS ──────────────────────────────────────────────────
  // 262A9514.JPG — Deno with dogs (authentic portrait)
  { src: "262A9514.JPG", dest: "team-deno.webp",          quality: 80 },
  // 262A9552.JPG — Amara (creative at work portrait)
  { src: "262A9552.JPG", dest: "team-amara.webp",         quality: 80 },
  // 262A9387.JPG — Testimonial 1 (communal interaction)
  { src: "262A9387.JPG", dest: "testimonial-1.webp",      quality: 80 },
  // 262A9603.JPG — Testimonial 2 (group creative social)
  { src: "262A9603.JPG", dest: "testimonial-2.webp",      quality: 80 },
];

console.log(`\n🖼  Terrace Kilifi — WebP asset conversion`);
console.log(`   Source: ${SRC}`);
console.log(`   Output: ${DEST}\n`);

let ok = 0, fail = 0;

for (const { src, dest, quality } of ASSETS) {
  const input  = path.join(SRC, src);
  const output = path.join(DEST, dest);

  try {
    if (!fs.existsSync(input)) {
      console.warn(`  ⚠  Not found — skipping: ${src}`);
      fail++;
      continue;
    }

    await sharp(input)
      .webp({ quality })
      .toFile(output);

    const bytes = fs.statSync(output).size;
    console.log(`  ✓  ${dest.padEnd(32)} ${(bytes / 1024).toFixed(0).padStart(5)} KB`);
    ok++;
  } catch (err) {
    console.error(`  ✗  ${dest} — ${err.message}`);
    fail++;
  }
}

console.log(`\n  Done: ${ok} converted, ${fail} skipped/failed.\n`);
