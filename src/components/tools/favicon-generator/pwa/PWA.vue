<template>
  <n-h2 prefix="bar" align-text>Progressive Web App (PWA)</n-h2>
  <n-h3 prefix="bar" align-text>
    PWA <n-text code>"purpose": "any"</n-text>
  </n-h3>
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
  <n-h3 prefix="bar" align-text>
    PWA <n-text code>"purpose": "maskable"</n-text>
  </n-h3>
  <n-grid x-gap="12" :cols="5">
    <n-grid-item :span="2">
      <PWAMaskablePreview
        :image="image"
        :options="options"
        :general-info-options="generalInfoOptions"
      />
    </n-grid-item>
    <n-grid-item :span="3">
      <PWAMaskableSettings :image="image" v-model:options="options" />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NH3, NText, NGrid, NGridItem } from "naive-ui";
import type { PWAOptions } from "@/utils/favicon-generator/pwa";
import { useVModel } from "@vueuse/core";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import PWAPreview from "./any/PWAPreview.vue";
import PWAMaskablePreview from "./maskable/PWAMaskablePreview.vue";
import PWASettings from "./any/PWASettings.vue";
import PWAMaskableSettings from "./maskable/PWAMaskableSettings.vue";

const props = defineProps<{
  image: Blob | undefined;
  options: PWAOptions;
  generalInfoOptions: GeneralInfoOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
