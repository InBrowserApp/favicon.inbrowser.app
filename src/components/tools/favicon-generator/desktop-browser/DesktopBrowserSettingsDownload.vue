<template>
  <n-button size="small" text @click="download">
    <n-icon :component="ArrowDownload16Filled" />
    Download favicon.ico
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { ArrowDownload16Filled } from "@vicons/fluent";
import { generateFaviconICO } from "@/utils/favicon-generator/desktop-browser";

const props = defineProps<{
  image: Blob | undefined;
  options: DesktopBrowserOptions;
}>();

const download = async () => {
  if (props.image === undefined) {
    throw new Error("No image");
  }

  const blob = await generateFaviconICO(props.image, props.options);
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "favicon.ico";
  a.click();
};
</script>
