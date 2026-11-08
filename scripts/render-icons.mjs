import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const brand = path.join(root, "public", "brand");
const flutter = path.join(root, "brand", "flutter");

const drop = `M512 188C498 246 348 470 348 628C348 812 418 888 512 888C606 888 676 812 676 628C676 470 526 246 512 188Z`;

function masterSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="bg" x1="180" y1="40" x2="860" y2="1000" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A84356"/>
      <stop offset="0.42" stop-color="#8F2638"/>
      <stop offset="1" stop-color="#5A1724"/>
    </linearGradient>
    <linearGradient id="glass" x1="360" y1="220" x2="700" y2="900" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFF8F6"/>
      <stop offset="0.38" stop-color="#F3D5DA"/>
      <stop offset="1" stop-color="#C98B98"/>
    </linearGradient>
    <radialGradient id="light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(430 390) rotate(28) scale(220 340)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="shade" x1="620" y1="420" x2="820" y2="920" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6E2433" stop-opacity="0"/>
      <stop offset="1" stop-color="#4A1520" stop-opacity="0.28"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" fill="url(#bg)"/>
  <path fill="url(#glass)" d="${drop}"/>
  <path fill="url(#shade)" d="${drop}"/>
  <ellipse cx="430" cy="560" rx="78" ry="168" transform="rotate(-18 430 560)" fill="url(#light)"/>
  <ellipse cx="392" cy="470" rx="28" ry="64" transform="rotate(-24 392 470)" fill="#FFFFFF" opacity="0.55"/>
</svg>`;
}

function foregroundSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="glass" x1="390" y1="280" x2="680" y2="860" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFF8F6"/>
      <stop offset="0.4" stop-color="#F0CDD3"/>
      <stop offset="1" stop-color="#C48492"/>
    </linearGradient>
    <radialGradient id="light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(470 460) rotate(28) scale(160 250)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g transform="translate(512 532) scale(0.62) translate(-512 -532)">
    <path fill="url(#glass)" d="${drop}"/>
    <ellipse cx="430" cy="560" rx="78" ry="168" transform="rotate(-18 430 560)" fill="url(#light)"/>
    <ellipse cx="392" cy="470" rx="26" ry="58" transform="rotate(-24 392 470)" fill="#FFFFFF" opacity="0.5"/>
  </g>
</svg>`;
}

function backgroundSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" fill="#8F2638"/>
</svg>`;
}

function monoSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="#242323" d="M32 6.5c.4 0 8.8 12.2 13.2 21.2 3.7 7.6 6.3 14.2 6.3 19.6 0 11.4-8.7 18.7-19.5 18.7S12.5 58.7 12.5 47.3c0-5.4 2.6-12 6.3-19.6C23.2 18.7 31.6 6.5 32 6.5Z"/>
</svg>`;
}

function wordmarkSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 48">
  <path fill="#8F2638" d="M20 4.2c.2 0 5.2 7.2 7.8 12.5 2.2 4.5 3.7 8.4 3.7 11.6 0 6.7-5.1 11-11.5 11S8.5 35 8.5 28.3c0-3.2 1.5-7.1 3.7-11.6C14.8 11.4 19.8 4.2 20 4.2Z"/>
  <text x="44" y="33" fill="#242323" font-family="Geist, Inter, Helvetica, Arial, sans-serif" font-size="26" font-weight="500" letter-spacing="-0.8">Blood4Life</text>
</svg>`;
}

async function png(svg, file, size, { flatten = false } = {}) {
  let pipeline = sharp(Buffer.from(svg)).resize(size, size);
  if (flatten) pipeline = pipeline.flatten({ background: "#8F2638" });
  await pipeline.png().toFile(file);
}

await mkdir(brand, { recursive: true });
await mkdir(path.join(flutter, "android", "mipmap"), { recursive: true });
await mkdir(path.join(flutter, "android", "drawable"), { recursive: true });
await mkdir(path.join(flutter, "ios"), { recursive: true });
await mkdir(path.join(root, "src", "app"), { recursive: true });

const master = masterSvg();
const foreground = foregroundSvg();
const background = backgroundSvg();

await writeFile(path.join(brand, "icon.svg"), master);
await writeFile(path.join(brand, "icon-foreground.svg"), foreground);
await writeFile(path.join(brand, "icon-background.svg"), background);
await writeFile(path.join(brand, "logo-mono.svg"), monoSvg());
await writeFile(path.join(brand, "wordmark.svg"), wordmarkSvg());

await png(master, path.join(brand, "icon-1024.png"), 1024, { flatten: true });
await png(master, path.join(brand, "apple-touch-icon.png"), 180, { flatten: true });
await png(master, path.join(brand, "favicon-32.png"), 32, { flatten: true });
await png(master, path.join(brand, "icon-192.png"), 192, { flatten: true });
await png(master, path.join(brand, "icon-512.png"), 512, { flatten: true });
await png(foreground, path.join(brand, "adaptive-foreground.png"), 1024);
await png(background, path.join(brand, "adaptive-background.png"), 1024, { flatten: true });

await png(master, path.join(root, "src", "app", "icon.png"), 512, { flatten: true });
await png(master, path.join(root, "src", "app", "apple-icon.png"), 180, { flatten: true });
await png(master, path.join(root, "public", "app-icon.png"), 1024, { flatten: true });

await png(master, path.join(flutter, "app_icon.png"), 1024, { flatten: true });
await png(foreground, path.join(flutter, "adaptive_foreground.png"), 1024);
await png(background, path.join(flutter, "adaptive_background.png"), 1024, { flatten: true });
await png(master, path.join(flutter, "ios", "Icon-App-1024x1024@1x.png"), 1024, { flatten: true });

const densities = [
  ["mdpi", 48, 108],
  ["hdpi", 72, 162],
  ["xhdpi", 96, 216],
  ["xxhdpi", 144, 324],
  ["xxxhdpi", 192, 432],
];

for (const [name, launcher, foregroundSize] of densities) {
  await png(master, path.join(flutter, "android", "mipmap", `ic_launcher-${name}.png`), launcher, { flatten: true });
  await png(foreground, path.join(flutter, "android", "drawable", `ic_launcher_foreground-${name}.png`), foregroundSize);
}

console.log("Icons rendered.");
