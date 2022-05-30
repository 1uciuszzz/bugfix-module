import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DeveloperView from "../views/DeveloperView.vue";
import SignInView from "../views/SignIn.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/developer",
      name: "developer",
      component: DeveloperView,
    },
    
    {
      path: "/manager",
      name: "manager",
      component: () => import("../views/ManagerView.vue"),
      children: [
        {
          path: "",
          name: "",
          component: () => import("../components/PersonManage.vue"),
        },
        {
          path: "person",
          name: "person",
          component: () => import("../components/PersonManage.vue"),
        },
        {
          path:"feature",
          name:"feature",
          component:()=>import("../components/FeatureList.vue")
        },
      ],
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
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
