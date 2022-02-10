import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const balls = './views/'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(balls + 'About.vue' /* webpackChunkName: "aboutMe" */)
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(balls + 'Projects.vue' /* webpackChunkName: "projects" */)
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const siteTitle = to.name?.toString() + " - skepfusky"
  document.title = siteTitle
  next()
})

export default router
