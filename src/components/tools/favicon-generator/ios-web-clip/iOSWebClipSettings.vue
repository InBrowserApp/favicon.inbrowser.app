<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="background" tab="Background" display-directive="show">
      <n-color-picker
        :show-alpha="false"
        v-model:value="options.backgroundColor"
      />
      <n-slider v-model:value="options.margin" :step="1" />
      {{ options.margin }}
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NColorPicker, NSlider } from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: iOSWebClipOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
