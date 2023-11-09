<template>
  <div style="margin-bottom: 0.25em">Background Color</div>
  <n-color-picker
    :show-alpha="false"
    v-model:value="options.backgroundColor"
    :modes="['hex']"
  />
  <div style="margin-bottom: 0.25em">Margin</div>
  <n-slider v-model:value="options.margin" :step="1" />
</template>

<script setup lang="ts">
import { NColorPicker, NSlider } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: DesktopBrowserOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
