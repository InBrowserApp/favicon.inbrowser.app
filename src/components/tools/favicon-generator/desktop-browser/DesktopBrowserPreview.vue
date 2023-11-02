<template>
  <div class="container">
    <GoogleSearchResult
      :image="image"
      :options="options"
      :generalInfoOptions="generalInfoOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { useObjectUrl } from "@vueuse/core";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { computed } from "vue";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import GoogleSearchResult from "./GoogleSearchResult.vue";

const props = defineProps<{
  image: Blob | undefined;
  options: DesktopBrowserOptions;
  generalInfoOptions: GeneralInfoOptions;
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
