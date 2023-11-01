<template>
  <n-h2 prefix="bar" align-text>iOS Web Clip</n-h2>
  <iOSWebClipPreview :image="image" />
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useObjectUrl } from "@vueuse/core";
import { toRef } from "vue";
import iOSWebClipPreview from "./iOSWebClipPreview.vue";

const props = defineProps<{
  image: Blob | undefined;
}>();

const image = toRef(props, "image");

const imageURL = useObjectUrl(image);
</script>
