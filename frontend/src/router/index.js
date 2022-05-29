import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DeveloperView from "../views/DeveloperView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/developer",
      name: "developer",
      component: DeveloperView,
    },
    {
      path: "/notfound",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/notfound",
    },
  ],
});

export default router;
