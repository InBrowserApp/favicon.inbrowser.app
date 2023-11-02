<template>
  <div class="desktop-browser-container">
    <img :src="imageURL" class="desktop-browser-image" />
  </div>
</template>

<script setup lang="ts">
import { useObjectUrl } from "@vueuse/core";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { computed } from "vue";

const props = defineProps<{
  image: Blob | undefined;
  options: DesktopBrowserOptions;
}>();

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image;
  } else {
    return props.image;
  }
});

const imageURL = useObjectUrl(image);
</script>

<style scoped>
.desktop-browser-container {
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  overflow: hidden;
}

.desktop-browser-image {
  max-width: 100%;
  max-height: 100%;
}
</style>