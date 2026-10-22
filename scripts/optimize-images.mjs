// One-time asset preparation, never a visitor-side dependency.
// Run: node scripts/optimize-images.mjs [absolute-path-to-sharp]
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { join, basename, extname } from 'node:path';
import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';

const require = createRequire(import.meta.url);
const sharp = require(process.argv[2] || 'sharp');
const root = fileURLToPath(new URL('../', import.meta.url));
const assets = join(root, 'assets');
const output = join(assets, 'responsive');
await mkdir(output, { recursive:true });
const names = (await readdir(assets)).filter(name => /\.jpg$/i.test(name) || name === 'mckay-osaa-2025.png');
const photos = new Map();
let originalBytes = 0;
let compactBytes = 0;
for (const name of names) {
  const source = join(assets, name);
  const meta = await sharp(source).metadata();
  const stem = basename(name, extname(name));
  for (const width of [480, 960]) {
    const target = join(output, `${stem}-${width}.webp`);
    await sharp(source).rotate().resize({ width, withoutEnlargement:true }).webp({quality:76, effort:5}).toFile(target);
  }
  originalBytes += (await stat(source)).size;
  compactBytes += (await stat(join(output, `${stem}-480.webp`))).size;
  photos.set(name, {stem, width:meta.width, height:meta.height});
}
await sharp(join(assets,'mckay-favicon.png')).resize(192,192,{fit:'contain'}).webp({quality:85}).toFile(join(output,'mckay-mark-192.webp'));
await sharp(join(assets,'mckay-favicon.png')).resize(192,192,{fit:'contain'}).png().toFile(join(output,'mckay-icon-192.png'));

// Mechanical markup update: retain the source photographs for large desktops.
for (const filename of (await readdir(root)).filter(name => name.endsWith('.html'))) {
  const file = join(root,filename);
  let html = await readFile(file,'utf8');
  html = html.replace(/<img\b[^>]*>/g, tag => {
    const match = tag.match(/\bsrc="assets\/(?:responsive\/)?([^"/]+)"/);
    if (!match) return tag;
    const name = match[1].replace(/-960\.webp$/, '.jpg');
    if (!photos.has(name)) return tag;
    const {stem,width,height} = photos.get(name);
    const hero = stem.startsWith('hero-');
    const sizes = hero ? '(max-width: 760px) 67vw, 50vw' : '(max-width: 760px) calc(100vw - 40px), (max-width: 1080px) 90vw, 760px';
    const candidates = `assets/responsive/${stem}-480.webp ${Math.min(width,480)}w, assets/responsive/${stem}-960.webp ${Math.min(width,960)}w${width > 960 ? `, assets/${name} ${width}w` : ''}`;
    tag = tag.replace(/\s+(?:srcset|sizes)="[^"]*"/g, '');
    tag = tag.replace(match[0], `src="assets/responsive/${stem}-960.webp" srcset="${candidates}" sizes="${sizes}"`);
    if (!/\bwidth=/.test(tag)) tag = tag.replace('<img','<img width="'+width+'" height="'+height+'"');
    if (!/\bdecoding=/.test(tag)) tag = tag.replace('<img','<img decoding="async"');
    if (!hero && !/\bloading=/.test(tag)) tag = tag.replace('<img','<img loading="lazy"');
    return tag;
  });
  html = html.replaceAll('href="assets/mckay-favicon.png"','href="assets/responsive/mckay-icon-192.png"');
  await writeFile(file,html);
}
console.log(`Prepared ${photos.size} responsive photographs. Original total: ${originalBytes} bytes; 480px variants: ${compactBytes} bytes (${Math.round((1-compactBytes/originalBytes)*100)}% smaller).`);
