import { generateFaviconICO } from "./generate-favicon-ico";
import { generateFaviconPNG } from "./generate-favicon-png";
import { generateFaviconSVG } from "./generate-favicon-svg";

import type { DesktopBrowserOptions } from "./types";

interface Asset {
  name: string;
  blob: Blob;
}

export async function generateAssets(
  image_: Blob | undefined,
  options: DesktopBrowserOptions
): Promise<Asset[]> {
  const image = options?.image ?? image_;
  if (image === undefined) {
    throw new Error("image is undefined");
  }

  if (image.type === "image/svg+xml" && options.original) {
    const assets: Asset[] = [];
    const files = await Promise.all([
      generateFaviconICO(image, options),
      generateFaviconSVG(image, options),
    ]);

    assets.push({
      name: "favicon.ico",
      blob: files[0],
    });

    assets.push({
      name: "favicon.svg",
      blob: files[1],
    });

    return assets;
  } else {
    const assets: Asset[] = [];
    const files = await Promise.all([
      generateFaviconICO(image, options),
      generateFaviconPNG(image, options, 32),
      generateFaviconPNG(image, options, 16),
    ]);

    assets.push({
      name: "favicon.ico",
      blob: files[0],
    });

    assets.push({
      name: "favicon-32x32.png",
      blob: files[1],
    });

    assets.push({
      name: "favicon-16x16.png",
      blob: files[2],
    });

    return assets;
  }
}
