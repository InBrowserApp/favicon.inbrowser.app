<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="settings" tab="Settings" display-directive="show">
      <div style="margin-bottom: 0.25em">Background Color</div>
      <n-color-picker
        :show-alpha="false"
        v-model:value="options.backgroundColor"
        :modes="['hex']"
      />
      <div style="margin-bottom: 0.25em">Margin</div>
      <n-slider v-model:value="options.margin" :step="1" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NColorPicker, NSlider, NText } from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: iOSWebClipOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
