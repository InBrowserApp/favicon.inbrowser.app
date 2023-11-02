<template>
  <n-h2 prefix="bar" align-text>iOS Web Clip</n-h2>
  <n-grid x-gap="12" :cols="5">
    <n-grid-item :span="2">
      <iOSWebClipPreview
        :image="image"
        :options="options"
        :name="generalInfoOptions.short_name"
      />
    </n-grid-item>
    <n-grid-item :span="3">
      <iOSWebClipSettings v-model:options="options" />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NGrid, NGridItem } from "naive-ui";
import { toRef } from "vue";
import iOSWebClipPreview from "./iOSWebClipPreview.vue";
import iOSWebClipSettings from "./iOSWebClipSettings.vue";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { useVModel } from "@vueuse/core";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";

const props = defineProps<{
  image: Blob | undefined;
  options: iOSWebClipOptions;
  generalInfoOptions: GeneralInfoOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);

const image = toRef(props, "image");
</script>
