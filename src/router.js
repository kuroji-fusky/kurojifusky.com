import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import UOC from "@/views/UseOfContent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/use-of-content",
    name: "Use of Content",
    component: UOC,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
