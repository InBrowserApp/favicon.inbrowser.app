<template>
  <main>
    <BackToHome />
    <n-h1 prefix="bar" align-text>Favicon Generator</n-h1>
    <FaviconGenerator />
  </main>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import FaviconGenerator from "@/components/tools/favicon-generator/FaviconGenerator.vue";

useHead({
  title: "Favicon Generator | Favicon InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Generate Favicon. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://favicon.inbrowser.app/tools/favicon-generator",
    },
  ],
});
</script>
