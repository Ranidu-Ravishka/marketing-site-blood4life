import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "assets", "branding", "blood-drop.png");
const brand = path.join(root, "public", "brand");
const flutter = path.join(root, "brand", "flutter");
const app = path.join(root, "src", "app");

await mkdir(brand, { recursive: true });
await mkdir(path.join(flutter, "android", "mipmap"), { recursive: true });
await mkdir(path.join(flutter, "android", "drawable"), { recursive: true });
await mkdir(path.join(flutter, "ios"), { recursive: true });

const paddedBuffer = await sharp(source)
  .extend({
    top: 64,
    bottom: 64,
    left: 64,
    right: 64,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

async function render(file, size, background) {
  let image = sharp(paddedBuffer).resize(size, size);
  if (background) image = image.flatten({ background });
  await image.png().toFile(file);
}

async function writeFavicon() {
  const png = await sharp(paddedBuffer).resize(32, 32).png().toBuffer();
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  await writeFile(path.join(brand, "favicon.ico"), Buffer.concat([header, entry, png]));
}

const transparent = undefined;
const opaque = { r: 248, g: 247, b: 244, alpha: 1 };
const burgundy = { r: 143, g: 38, b: 56, alpha: 1 };

await render(path.join(brand, "blood-drop.png"), 1024, transparent);
await render(path.join(brand, "icon-1024.png"), 1024, transparent);
await render(path.join(brand, "icon-512.png"), 512, transparent);
await render(path.join(brand, "icon-192.png"), 192, transparent);
await render(path.join(brand, "favicon-32.png"), 32, transparent);
await render(path.join(brand, "apple-touch-icon.png"), 180, opaque);
await render(path.join(app, "icon.png"), 512, opaque);
await render(path.join(app, "apple-icon.png"), 180, opaque);
await render(path.join(root, "public", "app-icon.png"), 1024, opaque);

await render(path.join(flutter, "app_icon.png"), 1024, opaque);
await render(path.join(flutter, "adaptive_foreground.png"), 1024, transparent);
await render(path.join(flutter, "adaptive_background.png"), 1024, burgundy);
await render(path.join(flutter, "ios", "Icon-App-1024x1024@1x.png"), 1024, opaque);

const densities = [
  ["mdpi", 48, 108],
  ["hdpi", 72, 162],
  ["xhdpi", 96, 216],
  ["xxhdpi", 144, 324],
  ["xxxhdpi", 192, 432],
];

for (const [name, launcher, foregroundSize] of densities) {
  await render(path.join(flutter, "android", "mipmap", `ic_launcher-${name}.png`), launcher, opaque);
  await render(
    path.join(flutter, "android", "drawable", `ic_launcher_foreground-${name}.png`),
    foregroundSize,
    transparent,
  );
}

await writeFavicon();
console.log(`Rendered official icon derivatives from ${path.relative(root, source)}.`);
