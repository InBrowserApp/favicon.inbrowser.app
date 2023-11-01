<template>
  <ImageUpload @update:file="image = $event" />
  <iOSWebClip :image="preprocessedImage" v-model:options="iosOptions" />
</template>

<script setup lang="ts">
import ImageUpload from "./ImageUpload.vue";
import { ref } from "vue";
import { useObjectUrl, computedAsync } from "@vueuse/core";
import { preprocessImage } from "@/utils/image/preprocess-image";
import iOSWebClip from "./ios-web-clip/iOSWebClip.vue";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";

const image = ref<Blob | undefined>(undefined);
const imageURL = useObjectUrl(image);
const preprocessedImage = computedAsync(async () => {
  if (image.value === undefined) return undefined;
  return await preprocessImage(image.value);
});
const preprocessedImageURL = useObjectUrl(preprocessedImage);

const iosOptions = ref<iOSWebClipOptions>({
  backgroundColor: "#000000",
});
</script>
