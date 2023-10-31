import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";

const app = createApp(App);

app.use(router);
app.use(createHead());

app.mount("#app");
