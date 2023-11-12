<template>
  <n-config-provider :theme="theme" :hljs="hljs">
    <n-global-style />
    <n-message-provider placement="bottom">
      <n-loading-bar-provider>
        <div class="app">
          <TheHeader />
          <RouterView />
        </div>
      </n-loading-bar-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import {
  useOsTheme,
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NLoadingBarProvider,
  NMessageProvider,
} from "naive-ui";
import { RouterView } from "vue-router";
import { computed } from "vue";
import TheHeader from "@/components/header/TheHeader.vue";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
hljs.registerLanguage("html", html);
hljs.registerLanguage("json", json);
</script>

<style>
body {
  min-height: 100vh;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: 80px;
  }

  .app {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding: 0 2rem;
  }
}
</style>
