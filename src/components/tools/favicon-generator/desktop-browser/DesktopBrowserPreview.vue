<template>
  <div class="container">
    <GoogleSearchResult
      :image="image"
      :options="options"
      :generalInfoOptions="generalInfoOptions"
    />
    <n-divider />
    <ChromeTabPreview
      :image="image"
      :options="options"
      :generalInfoOptions="generalInfoOptions"
      :dark="false"
    />
    <ChromeTabPreview
      :image="image"
      :options="options"
      :generalInfoOptions="generalInfoOptions"
      :dark="true"
    />
  </div>
</template>

<script setup lang="ts">
import { NDivider } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import GoogleSearchResult from "./GoogleSearchResult.vue";
import ChromeTabPreview from "./ChromeTabPreview.vue";

defineProps<{
  image: Blob | undefined;
  options: DesktopBrowserOptions;
  generalInfoOptions: GeneralInfoOptions;
}>();
</script>
