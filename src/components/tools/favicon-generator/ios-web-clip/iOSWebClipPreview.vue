<template>
  <div class="container">
    <img :src="PreviewBackground" class="background" />
    <div class="icon-container">
      <div class="icon-background" :style="iconBackgroundStyle" />
      <img :src="imageURL" class="icon" :style="iconStyle" />
    </div>

    <div class="name">{{ name ?? "App" }}</div>
  </div>
</template>

<script setup lang="ts">
import PreviewBackground from "./ios-web-clip-preview-background.webp";
import { useObjectUrl } from "@vueuse/core";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { computed } from "vue";

import { toRef } from "vue";

const props = defineProps<{
  image: Blob | undefined;
  name?: string;
  options: iOSWebClipOptions;
}>();

const image = toRef(props, "image");

const imageURL = useObjectUrl(image);

const iconBackgroundStyle = computed(() => ({
  "--icon-background-color": props.options.backgroundColor,
}));

const iconStyle = computed(() => ({
  "--icon-margin": (props.options.margin / 2).toString() + "%",
}));
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  /* 1126 * 892 */
  aspect-ratio: 1126 / 892;
  overflow: hidden;
}

.background {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-container {
  --size: 16.2%;
  position: absolute;
  width: var(--size);
  aspect-ratio: 1;
  left: 76.7%;
  top: 69.5%;

  object-fit: contain;
  border-radius: 20%;
  overflow: hidden;
}

.icon {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  will-change: padding;
  padding: var(--icon-margin);
  transition: padding 0.2s ease-in-out;
}

.icon-background {
  will-change: background-color;
  background-color: var(--icon-background-color);
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease-in-out;
}

.name {
  color: white;
  position: absolute;
  top: 90.5%;
  left: 76.7%;
  font-size: 70%;
  text-shadow: 0.5px 0.5px 0.5px grey;
  user-select: none;

  /* background-color: #ffffffc0; */
  width: 16.2%;
  text-align: center;

  /* font: SF Pro, then others */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
