<template>
  <n-checkbox v-model:checked="options.original">
    Use the original image as is
  </n-checkbox>
  <n-collapse-transition :show="!options.original">
    <n-checkbox v-model:checked="options.background">
      Set a background color
    </n-checkbox>
    <n-collapse-transition :show="options.background">
      <div style="margin-bottom: 0.25em; margin-top: 0.5em">
        Background Color
      </div>
      <n-color-picker
        :show-alpha="false"
        v-model:value="options.backgroundColor"
        :modes="['hex']"
      />
      <div style="margin-bottom: 0.25em">Background Radius</div>
      <n-slider v-model:value="options.backgroundRadius" :step="1" />
    </n-collapse-transition>

    <div style="margin-bottom: 0.25em">Margin</div>
    <n-slider v-model:value="options.margin" :step="1" />
  </n-collapse-transition>
</template>

<script setup lang="ts">
import {
  NColorPicker,
  NSlider,
  NCheckbox,
  NCollapseTransition,
} from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: DesktopBrowserOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
