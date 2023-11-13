import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FaviconGeneratorView from "../views/FaviconGeneratorView.vue";

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
