<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="settings" tab="Settings" display-directive="show">
      <PWASettingsDisplay v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane
      name="dedicated-image"
      tab="Dedicated Image"
      display-directive="show"
    >
      <PWASettingsDedicatedImage v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane
      name="download"
      tab="Download Separately"
      display-directive="show"
    >
      <PWASettingsDownload :options="options" :image="image" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from "naive-ui";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import { useVModel } from "@vueuse/core";
import PWASettingsDisplay from "./PWASettingsDisplay.vue";
import PWASettingsDedicatedImage from "./PWASettingsDedicatedImage.vue";
import PWASettingsDownload from "./PWASettingsDownload.vue";

const props = defineProps<{
  image: Blob | undefined;
  options: PWAOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
