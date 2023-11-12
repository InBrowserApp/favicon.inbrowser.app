import { generateManifest } from "./generate-manifest";
import type { GeneralInfoOptions } from "./types";

interface Asset {
  name: string;
  blob: Blob;
}

export async function generateAssets(
  options: GeneralInfoOptions
): Promise<Asset[]> {
  const assets: Asset[] = [];
  const output = await generateManifest(options);
  assets.push({
    name: "site.webmanifest",
    blob: output,
  });

  return assets;
}
