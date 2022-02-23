import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Profile from "@/views/Profile.vue";
import Projects from "@/views/Projects.vue";
import Discover from "@/views/Discover.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Discover",
    component: Discover,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
