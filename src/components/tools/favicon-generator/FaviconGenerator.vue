<template>
  <ImageUpload @update:file="image = $event" />
  <img :src="imageURL" />
</template>

<script setup lang="ts">
import ImageUpload from "./ImageUpload.vue";
import { ref } from "vue";
import { useObjectUrl } from "@vueuse/core";

const image = ref<Blob | undefined>(undefined);
const imageURL = useObjectUrl(image);
</script>
