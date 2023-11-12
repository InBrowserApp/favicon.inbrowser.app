<template>
  <n-h2 prefix="bar" align-text>
    <n-icon :component="Info16Regular" style="vertical-align: -0.15em" />
    General Info
  </n-h2>
  <n-grid x-gap="12" :cols="4">
    <n-grid-item :span="2">
      <n-form-item label="App Name">
        <n-input v-model:value="options.name" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Short Name">
        <n-input v-model:value="options.short_name" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="4">
      <n-form-item label="Description">
        <n-input v-model:value="options.description" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Theme Color">
        <n-color-picker
          :show-alpha="false"
          v-model:value="options.theme_color"
          :modes="['hex']"
        />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Background Color">
        <n-color-picker
          :show-alpha="false"
          v-model:value="options.background_color"
          :modes="['hex']"
        />
      </n-form-item>
    </n-grid-item>

    <n-grid-item :span="2">
      <n-form-item label="Start URL">
        <n-input v-model:value="options.start_url" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Path of icons">
        <n-input v-model:value="options.path" />
      </n-form-item>
    </n-grid-item>

    <n-grid-item :span="2">
      <n-form-item label="Display">
        <n-select v-model:value="options.display" :options="displayOptions" />
      </n-form-item>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import {
  NH2,
  NInput,
  NFormItem,
  NGrid,
  NGridItem,
  NColorPicker,
  NSelect,
  NIcon,
} from "naive-ui";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import { useVModel } from "@vueuse/core";
import { Info16Regular } from "@vicons/fluent";

const props = defineProps<{
  options: GeneralInfoOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);

const displayOptions = [
  { label: "Fullscreen", value: "fullscreen" },
  { label: "Standalone", value: "standalone" },
  { label: "Minimal UI", value: "minimal-ui" },
  { label: "Browser", value: "browser" },
];
</script>
