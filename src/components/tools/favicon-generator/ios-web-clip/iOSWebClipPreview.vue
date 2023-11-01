<template>
  <div class="container">
    <img :src="PreviewBackground" class="background" />
    <img :src="imageURL" class="icon" />
  </div>
</template>

<script setup lang="ts">
import PreviewBackground from "./ios-web-clip-preview-background.webp";
import { useObjectUrl } from "@vueuse/core";
import { toRef } from "vue";

const props = defineProps<{
  image: Blob | undefined;
}>();

const image = toRef(props, "image");

const imageURL = useObjectUrl(image);
</script>

<style scoped>
.container {
  --container-width: 300px;
  position: relative;
  width: 300px;
  /* 1126 * 892 */
  aspect-ratio: 1126 / 892;
  overflow: hidden;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon {
  --size: 16.2%;
  position: absolute;
  width: var(--size);
  aspect-ratio: 1;
  left: 76.7%;
  top: 69.5%;

  object-fit: contain;
  border-radius: 20%;
}
</style>
