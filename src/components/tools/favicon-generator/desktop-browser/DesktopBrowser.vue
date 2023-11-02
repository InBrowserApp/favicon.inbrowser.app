<template>
  <n-h2 prefix="bar" align-text>Desktop Browser</n-h2>
  <n-grid x-gap="12" :cols="5">
    <n-grid-item :span="2"> </n-grid-item>
    <n-grid-item :span="3">
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NGrid, NGridItem } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  image: Blob | undefined;
  options: DesktopBrowserOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
