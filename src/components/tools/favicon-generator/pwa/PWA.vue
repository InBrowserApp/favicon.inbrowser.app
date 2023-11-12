<template>
  <n-h2 prefix="bar" align-text>PWA</n-h2>
  <n-h3 prefix="bar" align-text>PWA</n-h3>
  <n-grid x-gap="12" :cols="5">
    <n-grid-item :span="2">
      <PWAPreview
        :image="image"
        :options="options"
        :general-info-options="generalInfoOptions"
      />
    </n-grid-item>
    <n-grid-item :span="3">
      <PWASettings :image="image" v-model:options="options" />
    </n-grid-item>
  </n-grid>
  <n-h3 prefix="bar" align-text>PWA Maskable</n-h3>
  <n-grid x-gap="12" :cols="5">
    <n-grid-item :span="2">
      <PWAMaskablePreview
        :image="image"
        :options="options"
        :general-info-options="generalInfoOptions"
      />
    </n-grid-item>
    <n-grid-item :span="3">
      <PWASettings :image="image" v-model:options="options" />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NH3, NGrid, NGridItem } from "naive-ui";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import { useVModel } from "@vueuse/core";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import PWAPreview from "./PWAPreview.vue";
import PWAMaskablePreview from "./PWAMaskablePreview.vue";
import PWASettings from "./PWASettings.vue";

const props = defineProps<{
  image: Blob | undefined;
  options: PWAOptions;
  generalInfoOptions: GeneralInfoOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
