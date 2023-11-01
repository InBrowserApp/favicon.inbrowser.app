<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="background" tab="Background" display-directive="show">
      {{ options.backgroundColor }}
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  options: iOSWebClipOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);
</script>
