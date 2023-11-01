<template>
  <ImageUpload @update:file="image = $event" />
  <iOSWebClip :image="image" v-model:options="iosOptions" />
</template>

<script setup lang="ts">
import ImageUpload from "./ImageUpload.vue";
import { ref, onMounted } from "vue";
import iOSWebClip from "./ios-web-clip/iOSWebClip.vue";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";

const image = ref<Blob | undefined>(undefined);
// FIXME: temp image

onMounted(async () => {
  const res = await fetch("/pwa-512x512.png");
  const blob = await res.blob();
  image.value = blob;
});

const iosOptions = ref<iOSWebClipOptions>({
  backgroundColor: "#FFFFFF",
  margin: 0,
});
</script>
