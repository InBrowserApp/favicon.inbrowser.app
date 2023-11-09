<template>
  <n-button size="small" text @click="download">
    <n-icon :component="ArrowDownload16Filled" />
    Download apple-touch-icon.png
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { ArrowDownload16Filled } from "@vicons/fluent";
import { generateOutput } from "@/utils/favicon-generator/ios-web-clip";
import { computed } from "vue";

const props = defineProps<{
  image: Blob | undefined;
  options: iOSWebClipOptions;
}>();

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image;
  } else {
    return props.image;
  }
});

const download = async () => {
  if (image.value === undefined) {
    throw new Error("No image");
  }

  const blob = await generateOutput(image.value, props.options);
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "apple-touch-icon.png";
  a.click();
};
</script>
