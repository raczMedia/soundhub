import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Discover, DiscoverSidebar } from "@/views/discover/index";
import { Profile, ProfileSidebar } from "@/views/profile/index";
import { Projects, ProjectsSidebar } from "@/views/projects/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Discover",
    components: {
      content: Discover,
      sidebar: DiscoverSidebar,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    components: {
      content: Projects,
      sidebar: ProjectsSidebar,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    components: {
      content: Profile,
      sidebar: ProfileSidebar,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
