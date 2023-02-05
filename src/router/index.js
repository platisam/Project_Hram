import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "почетна",
      component: HomeView,
    },
    {
      path: "/контакт",
      name: "контакт",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/онама",
      name: "онама",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/религија",
      name: "религија",
      component: () => import("../views/ReligionView.vue"),
    },
    {
      path: "/галерија",
      name: "галерија",
      component: () => import("../views/GalleryView.vue"),
    },
  ],
});

export default router;
