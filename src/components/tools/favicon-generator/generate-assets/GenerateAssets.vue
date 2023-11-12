<template>
  <n-h2 prefix="bar" align-text>Generate Favicon Assets</n-h2>
  <n-p>
    <n-text depth="3">
      <n-icon :component="Sparkle16Filled" style="vertical-align: -0.1em" />
      All files are losslessly minified using oxipng and svgo.
    </n-text>
  </n-p>
  <n-button size="small" text @click="download">
    <n-icon :component="ArrowDownload16Filled" />
    Download favicon-assets.zip
  </n-button>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon, NP, NText } from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { generateAssets } from "@/utils/favicon-generator/generate-assets";
import { ArrowDownload16Filled, Sparkle16Filled } from "@vicons/fluent";

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
