<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools</n-h2>
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
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
