import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createCutout() {
  const inputPath = path.join(__dirname, '../public/images/profile/subhapriyam.jpg');
  const outputPath = path.join(__dirname, '../public/images/profile/subhapriyam-cutout.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image info: ${width}x${height}, ${channels} channels`);

  // Create alpha mask
  // Subhapriyam's silhouette is located in the lower-central region
  // Dark suit: low R, G, B values (R < 90, G < 90, B < 110)
  // Skin/Face: R > 100, G > 70, B > 50, R > G, G > B
  // Background wall: light cream/yellowish (R > 140, G > 130, B > 110, low saturation)
  // Window bars: horizontal/vertical lines with high light background behind them

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Distance from center of portrait
      const relX = (x / width) - 0.55; // Subhapriyam is slightly right of center
      const relY = (y / height) - 0.55;

      // Color analysis
      const isLightBackground = r > 130 && g > 120 && b > 90 && Math.abs(r - g) < 40 && (r + g + b) > 360;
      const isVeryLight = (r + g + b) > 480;
      const isSuit = r < 90 && g < 90 && b < 110;
      const isFaceOrSkin = r > 110 && g > 75 && b > 60 && r > g && g >= b;
      const isHair = r < 50 && g < 40 && b < 40 && y < height * 0.45;

      let alpha = 255;

      if (isLightBackground || isVeryLight) {
        if (!isFaceOrSkin && !isSuit && !isHair) {
          alpha = 0;
        }
      }

      // Edge fading / feathering around periphery
      const edgeDistX = Math.max(0, Math.abs(relX) - 0.35);
      const edgeDistY = Math.max(0, Math.abs(relY) - 0.40);
      const edgeDist = Math.sqrt(edgeDistX * edgeDistX + edgeDistY * edgeDistY);
      
      if (edgeDist > 0) {
        const fade = Math.max(0, 1 - edgeDist * 4);
        alpha = Math.floor(alpha * fade);
      }

      data[idx + 3] = alpha;
    }
  }

  await sharp(data, {
    raw: { width, height, channels }
  })
  .png()
  .toFile(outputPath);

  console.log(`Saved transparent cutout PNG to ${outputPath}`);
}

createCutout().catch(console.error);
