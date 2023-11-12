<template>
  <n-h2 prefix="bar" align-text>Generate Favicon Assets</n-h2>
  <n-button @click="download">Download</n-button>
</template>

<script setup lang="ts">
import { NH2, NButton } from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { generateAssets } from "@/utils/favicon-generator/generate-assets";

const props = defineProps<{
  image: Blob | undefined;
  pwaOptions: PWAOptions;
  desktopBrowserOptions: DesktopBrowserOptions;
  iosWebClipOptions: iOSWebClipOptions;
  generalInfoOptions: GeneralInfoOptions;
}>();

const download = async () => {
  const blob = await generateAssets(props.image, {
    generalInfo: props.generalInfoOptions,
    desktopBrowser: props.desktopBrowserOptions,
    pwa: props.pwaOptions,
    iosWebClip: props.iosWebClipOptions,
  });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "favicon-assets.zip";
  a.click();
};
</script>
