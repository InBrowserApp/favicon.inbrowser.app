import { generateOutput } from "./generate-output";
import type { iOSWebClipOptions } from "./types";

interface Asset {
  name: string;
  blob: Blob;
}

export async function generateAssets(
  image: Blob | undefined,
  options: iOSWebClipOptions
): Promise<Asset[]> {
  const assets: Asset[] = [];
  const output = await generateOutput(image, options);
  assets.push({
    name: "apple-touch-icon.png",
    blob: output,
  });

  return assets;
}
