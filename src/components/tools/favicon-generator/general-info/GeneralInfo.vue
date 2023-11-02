<template>
  <n-h2 prefix="bar" align-text>General Info</n-h2>
  <n-grid x-gap="12" :cols="4">
    <n-grid-item :span="2">
      <n-form-item label="App Name">
        <n-input v-model:value="options.name" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="App Short Name">
        <n-input v-model:value="options.short_name" />
      </n-form-item>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NInput, NFormItem, NGrid, NGridItem } from "naive-ui";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: GeneralInfoOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
