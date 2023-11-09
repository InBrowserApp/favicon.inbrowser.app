import type { DesktopBrowserOptions } from "./types";
import { generateFaviconPNG } from "./generate-favicon-png";
import { PngIcoConverter } from "@/utils/packages/png2icojs";

export async function generateFaviconICO(
  blob: Blob,
  options: DesktopBrowserOptions
): Promise<Blob> {
  const png16 = await generateFaviconPNG(blob, options, 16);
  const png32 = await generateFaviconPNG(blob, options, 32);
  const png48 = await generateFaviconPNG(blob, options, 48);

  const inputs = [
    {
      png: png48,
    },
    {
      png: png32,
    },
    {
      png: png16,
    },
  ];

  const converter = new PngIcoConverter();

  const resultBlob = await converter.convertToBlobAsync(inputs);
  return resultBlob;
}
