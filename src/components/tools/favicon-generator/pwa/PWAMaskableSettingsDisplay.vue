<template>
  <div style="margin-bottom: 0.25em">Background Color</div>
  <n-color-picker
    :show-alpha="false"
    v-model:value="options.maskableBackgroundColor"
    :modes="['hex']"
  />
  <div style="margin-bottom: 0.25em">Margin</div>
  <n-slider v-model:value="options.maskableMargin" :step="1" />
</template>

<script setup lang="ts">
import { NColorPicker, NSlider } from "naive-ui";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: PWAOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
