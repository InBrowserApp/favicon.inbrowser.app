<template>
  <n-button size="small" text @click="downloadico">
    <n-icon :component="ArrowDownload16Filled" />
    Download favicon.ico
  </n-button>
  <template v-if="useOriginalSVG">
    <br />
    <n-button size="small" text @click="downloadSVG">
      <n-icon :component="ArrowDownload16Filled" />
      Download favicon.svg
    </n-button>
  </template>
  <template v-else>
    <br />
    <n-button size="small" text @click="download32png">
      <n-icon :component="ArrowDownload16Filled" />
      Download favicon-32x32.png
    </n-button>
    <br />
    <n-button size="small" text @click="download16png">
      <n-icon :component="ArrowDownload16Filled" />
      Download favicon-16x16.png
    </n-button>
  </template>

  <n-p>
    <n-code language="html" :code="code" :word-wrap="true" />
  </n-p>
</template>

<script setup lang="ts">
import { NButton, NIcon, NCode, NP } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { ArrowDownload16Filled } from "@vicons/fluent";
import {
  generateFaviconICO,
  generateFaviconPNG,
} from "@/utils/favicon-generator/desktop-browser";
import { computed } from "vue";

const props = defineProps<{
  image: Blob | undefined;
  options: DesktopBrowserOptions;
}>();

const downloadico = async () => {
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

const download32png = async () => {
  if (props.image === undefined) {
    throw new Error("No image");
  }

  const blob = await generateFaviconPNG(props.image, props.options, 32);
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "favicon-32x32.png";
  a.click();
};

const download16png = async () => {
  if (props.image === undefined) {
    throw new Error("No image");
  }

  const blob = await generateFaviconPNG(props.image, props.options, 16);
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "favicon-16x16.png";
  a.click();
};

const downloadSVG = async () => {
  if (props.image === undefined) {
    throw new Error("No image");
  }

  const url = URL.createObjectURL(props.image);
  const a = document.createElement("a");
  a.href = url;
  a.download = "favicon.svg";
  a.click();
};

const iconMime = computed(() => {
  if (props.image === undefined) {
    return "image/png";
  } else {
    return props.image.type;
  }
});

const useOriginalSVG = computed(() => {
  return iconMime.value === "image/svg+xml" && props.options.original;
});

const code = computed(() => {
  const lines = [];

  if (useOriginalSVG.value) {
    lines.push(`<link rel="icon" href="/favicon.ico" sizes="48x48" >`);
    lines.push(
      `<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml">`
    );
  } else {
    lines.push(
      `<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">`
    );
    lines.push(
      `<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16">`
    );
  }

  return lines.join("\n");
});
</script>
