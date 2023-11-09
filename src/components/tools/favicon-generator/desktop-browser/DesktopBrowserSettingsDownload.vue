<template>
  <n-button size="small" text @click="download">
    <n-icon :component="ArrowDownload16Filled" />
    Download favicon.ico
  </n-button>

  <n-p>
    <n-code language="html" :code="code" />
  </n-p>
</template>

<script setup lang="ts">
import { NButton, NIcon, NCode, NP } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { ArrowDownload16Filled } from "@vicons/fluent";
import { generateFaviconICO } from "@/utils/favicon-generator/desktop-browser";
import { computed } from "vue";

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

const code = computed(() => {
  return `<link rel="icon" href="/favicon.ico" sizes="48x48" >`;
});
</script>
