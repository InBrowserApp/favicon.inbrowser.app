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
    <n-tab-pane
      name="dedicated-image"
      tab="Dedicated Image"
      display-directive="show"
    >
      <div v-if="options.image === undefined">
        <div>You are not using a dedicated image.</div>
        <ImageUpload @update:file="options.image = $event" />
      </div>
      <div v-else>
        <div>You are using a dedicated image.</div>
        <n-image :src="imageURL" class="dedicated-image" />
        <div>
          <n-button size="small" text @click="options.image = undefined">
            <n-icon :component="Delete16Regular" />
            Remove
          </n-button>
        </div>
      </div>
    </n-tab-pane>
    <n-tab-pane name="download" tab="Download" display-directive="show">
      <n-button size="small" text @click="download">
        <n-icon :component="ArrowDownload16Filled" />
        Download apple-touch-icon.png
      </n-button>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import {
  NTabs,
  NTabPane,
  NColorPicker,
  NSlider,
  NButton,
  NIcon,
  NImage,
} from "naive-ui";
import type { iOSWebClipOptions } from "@/utils/favicon-generator/ios-web-clip";
import { useVModel, useObjectUrl } from "@vueuse/core";
import ImageUpload from "../ImageUpload.vue";
import { Delete16Regular, ArrowDownload16Filled } from "@vicons/fluent";
import { toRef, computed } from "vue";
import { generateOutput } from "@/utils/favicon-generator/ios-web-clip";

const props = defineProps<{
  image: Blob | undefined;
  options: iOSWebClipOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);

const optionsRef = toRef(props, "options");
const image = computed<Blob | undefined>(() => optionsRef.value.image);

const imageURL = useObjectUrl(image);

const download = async () => {
  if (props.image === undefined) {
    throw new Error("No image");
  }

  const blob = await generateOutput(props.image, optionsRef.value);
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "apple-touch-icon.png";
  a.click();
};
</script>

<style scoped>
.dedicated-image {
  aspect-ratio: 1;
  object-fit: contain;
  max-height: 7em;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
