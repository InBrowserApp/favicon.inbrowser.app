<template>
  <n-h2 prefix="bar" align-text>
    <n-icon :component="Apple" style="vertical-align: -0.15em" />
    iOS Web Clip
  </n-h2>
  <n-grid x-gap="30" y-gap="20" :cols="5" item-responsive responsive="screen">
    <n-grid-item span="5 s:2">
      <iOSWebClipPreview
        :image="image"
        :options="options"
        :name="generalInfoOptions.short_name"
      />
    </n-grid-item>
    <n-grid-item span="5 s:3">
      <iOSWebClipSettings :image="image" v-model:options="options" />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NGrid, NGridItem, NIcon } from "naive-ui";
import { toRef } from "vue";
import iOSWebClipPreview from "./iOSWebClipPreview.vue";
import iOSWebClipSettings from "./iOSWebClipSettings.vue";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { useVModel } from "@vueuse/core";
import type { GeneralInfoOptions } from "@/utils/favicon-generator/general-info";
import { Apple } from "@vicons/fa";

const props = defineProps<{
  image: Blob | undefined;
  options: iOSWebClipOptions;
  generalInfoOptions: GeneralInfoOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);

const image = toRef(props, "image");
</script>
