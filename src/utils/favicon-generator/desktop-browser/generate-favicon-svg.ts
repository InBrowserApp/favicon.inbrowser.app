import type { DesktopBrowserOptions } from "./types";
import { optimize } from "svgo";
export async function generateFaviconSVG(
  blob: Blob,
  options: DesktopBrowserOptions
): Promise<Blob> {
  const image = options?.image ?? blob;
  if (image === undefined) {
    throw new Error("image is undefined");
  }

  if (image.type !== "image/svg+xml") {
    throw new Error("image is not svg");
  }

  const svgString = await image.text();

  const result = optimize(svgString, {});

  const newBlob = new Blob([result.data], {
    type: "image/svg+xml",
  });

  return newBlob;
}
