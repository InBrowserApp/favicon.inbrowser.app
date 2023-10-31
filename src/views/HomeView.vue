<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools</n-h2>
    <n-space vertical>
      <router-link to="/tools/favicon-generator" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Icons20Regular" />
          </template>
          Favicon Generator
        </n-button>
      </router-link>
    </n-space>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon, NSpace } from "naive-ui";
import { Icons20Regular } from "@vicons/fluent";
import { useHead } from "@vueuse/head";

useHead({
  title: "Favicon InBrowser.APP",
  meta: [
    {
      name: "description",
      content:
        "Favicon InBrowser.APP is a tool to generate favicon. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://favicon.inbrowser.app/",
    },
  ],
});
</script>
