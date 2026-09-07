import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function processCutoutFloodfill() {
  const inputPath = path.join(__dirname, '../public/images/profile/subhapriyam.jpg');
  const outputPath = path.join(__dirname, '../public/images/profile/subhapriyam-cutout.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing image ${width}x${height}`);

  const visited = new Uint8Array(width * height);
  const alphaMap = new Uint8Array(width * height);
  alphaMap.fill(255); // Default fully opaque

  // Seed flood fill from background corners & top/side edges
  const queue = [];
  
  function isBackgroundPixel(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // Background is light cream/beige/wall or metal bars surrounded by light wall
    // High brightness or light grey/yellow tint
    const lightness = (r + g + b) / 3;
    const isLight = lightness > 115;
    const isCreamWall = r > 120 && g > 110 && b > 85 && Math.abs(r - g) < 40;
    const isMetalBar = lightness > 80 && lightness < 150 && Math.abs(r - g) < 15 && Math.abs(g - b) < 15;
    
    // Subhapriyam's skin tone: R > G > B, skin warmth
    const isSkin = r > 130 && g > 90 && b > 70 && (r - g) > 15 && (g - b) > 10;
    // Subhapriyam's blue shirt: B > R or blue tint
    const isBlueShirt = b > 110 && (b - r) > -15;

    if (isSkin || (isBlueShirt && lightness > 90)) {
      return false; // Definitely person
    }

    return isLight || isCreamWall || isMetalBar;
  }

  // Add top row, left column, right column to queue
  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    queue.push(x, 1);
  }
  for (let y = 0; y < height; y++) {
    queue.push(0, y);
    queue.push(width - 1, y);
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];
    const pos = y * width + x;

    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    if (visited[pos]) continue;

    visited[pos] = 1;

    if (isBackgroundPixel(x, y)) {
      alphaMap[pos] = 0; // Transparent

      // Expand to neighbors
      if (x > 0) queue.push(x - 1, y);
      if (x < width - 1) queue.push(x + 1, y);
      if (y > 0) queue.push(x, y - 1);
      if (y < height - 1) queue.push(x, y + 1);
    }
  }

  // Apply alphaMap to image buffer with 2px gaussian blur smoothing on edge
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pos = y * width + x;
      const idx = pos * channels;
      let alpha = alphaMap[pos];

      // Soft feathering at boundary
      if (alpha === 0) {
        // check if near solid pixel
        let hasOpaqueNeighbor = false;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (alphaMap[ny * width + nx] === 255) {
                hasOpaqueNeighbor = true;
                break;
              }
            }
          }
          if (hasOpaqueNeighbor) break;
        }
        if (hasOpaqueNeighbor) {
          alpha = 100; // Feather edge
        }
      }

      data[idx + 3] = alpha;
    }
  }

  await sharp(data, {
    raw: { width, height, channels }
  })
  .png()
  .toFile(outputPath);

  console.log(`Successfully generated floodfilled transparent cutout at ${outputPath}`);
}

processCutoutFloodfill().catch(console.error);
