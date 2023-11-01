<template>
  <ImageUpload @update:file="image = $event" />
  <img :src="imageURL" />
  <img :src="preprocessedImageURL" />
</template>

<script setup lang="ts">
import ImageUpload from "./ImageUpload.vue";
import { ref } from "vue";
import { useObjectUrl, computedAsync } from "@vueuse/core";
import { preprocessImage } from "@/utils/image/preprocess-image";

const image = ref<Blob | undefined>(undefined);
const imageURL = useObjectUrl(image);
const preprocessedImage  = computedAsync(async () => {
  if (image.value === undefined) return undefined;
  return await preprocessImage(image.value);
});
const preprocessedImageURL = useObjectUrl(preprocessedImage);
</script>
