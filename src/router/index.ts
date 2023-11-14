import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { defineAsyncComponent } from "vue";

const FaviconGeneratorView = defineAsyncComponent(() =>
  import("../views/FaviconGeneratorView.vue").then((m) => m.default)
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tools/favicon-generator",
      name: "favicon-generator",
      component: FaviconGeneratorView,
    },
  ],
});

export default router;
