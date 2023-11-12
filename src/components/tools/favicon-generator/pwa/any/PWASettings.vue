<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="settings" tab="Settings" display-directive="show">
      <PWASettingsDisplay v-model:options="options" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from "naive-ui";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import { useVModel } from "@vueuse/core";
import PWASettingsDisplay from "./PWASettingsDisplay.vue";

const props = defineProps<{
  image: Blob | undefined;
  options: PWAOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
