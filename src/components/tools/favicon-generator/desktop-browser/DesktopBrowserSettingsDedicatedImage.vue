<template>
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
</template>

<script setup lang="ts">
import { NButton, NIcon, NImage } from "naive-ui";
import type { DesktopBrowserOptions } from "@/utils/favicon-generator/desktop-browser";
import { useVModel, useObjectUrl } from "@vueuse/core";
import ImageUpload from "../ImageUpload.vue";
import { Delete16Regular } from "@vicons/fluent";
import { toRef, computed } from "vue";

const props = defineProps<{
  options: DesktopBrowserOptions;
}>();

const emit = defineEmits(["update:options"]);

const options = useVModel(props, "options", emit);

const optionsRef = toRef(props, "options");
const image = computed<Blob | undefined>(() => optionsRef.value.image);

const imageURL = useObjectUrl(image);
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
