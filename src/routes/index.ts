import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/roadmap", component: () => import('@/views/RoadmapPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'portfolio-page-active',
  linkExactActiveClass: '',
});

export default router