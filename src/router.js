import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import UOC from "@/views/UseOfContent.vue"
import Quotes from "@/views/Quotes.vue"
import Discography from "@/views/Discography.vue"

const routes = [
  { path: "/",name: "Home",component: Home },
  { path: "/about",name: "About",component: About },
  { path: "/use-of-content",name: "Use of Content",component: UOC },
  { path: "/quotes", name: "Quotes", component: Quotes },
  { path: "/discography", name: "Discography", component: Discography },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
