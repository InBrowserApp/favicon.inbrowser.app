import { generatePWAPNG } from "./generate-pwa-png";
import { generatePWAMaskablePNG } from "./generate-pwa-maskable-png";
import type { PWAOptions } from "./types";

interface Asset {
  name: string;
  blob: Blob;
}

export async function generateAssets(
  image: Blob | undefined,
  options: PWAOptions
): Promise<Asset[]> {
  const assets: Asset[] = [];
  const files = await Promise.all([
    generatePWAPNG(image, options, 192),
    generatePWAPNG(image, options, 512),
    generatePWAMaskablePNG(image, options, 192),
    generatePWAMaskablePNG(image, options, 512),
  ]);

  assets.push({
    name: "pwa-192x192.png",
    blob: files[0],
  });
  assets.push({
    name: "pwa-512x512.png",
    blob: files[1],
  });
  assets.push({
    name: "pwa-maskable-192x192.png",
    blob: files[2],
  });

  assets.push({
    name: "pwa-maskable-512x512.png",
    blob: files[3],
  });

  return assets;
}
