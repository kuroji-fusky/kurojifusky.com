import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Discography from "@/pages/Discography.vue"
import Portfolio from "@/pages/Portfolio.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/portfolio", name: "Portfolio", component: Portfolio },
    { path: "/discography", name: "Discography", component: Discography },
  ],
})

createApp(App).use(router).mount("#app")
