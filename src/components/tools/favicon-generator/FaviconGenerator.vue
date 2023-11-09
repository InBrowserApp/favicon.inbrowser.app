<template>
  <ImageUpload @update:file="image = $event" />
  <GeneralInfo v-model:options="generalInfoOptions" />
  <DesktopBrowser
    :image="image"
    v-model:options="desktopOptions"
    :general-info-options="generalInfoOptions"
  />
  <iOSWebClip
    :image="image"
    v-model:options="iosOptions"
    :general-info-options="generalInfoOptions"
  />
</template>

<script setup lang="ts">
import ImageUpload from "./ImageUpload.vue";
import { ref, onMounted } from "vue";
import iOSWebClip from "./ios-web-clip/iOSWebClip.vue";
import GeneralInfo from "./general-info/GeneralInfo.vue";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import DesktopBrowser from "./desktop-browser/DesktopBrowser.vue";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";

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

const desktopOptions = ref<DesktopBrowserOptions>({
  original: true,
  backgroundColor: "#FFFFFF",
  backgroundRadius: 0,
  margin: 0,
});

const generalInfoOptions = ref<GeneralInfoOptions>({
  name: "App",
  short_name: "App",
});
</script>
