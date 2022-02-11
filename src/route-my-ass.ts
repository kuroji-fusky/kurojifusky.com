import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/HomePage.vue'

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
    component: () => import(balls + 'AboutPage.vue' /* webpackChunkName: "aboutMe" */)
  },
  {
    path: '/projects',
    name: 'Shitty Projects',
    component: () => import(balls + 'ProjectsPage.vue' /* webpackChunkName: "projects" */)
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const siteTitle = to.name?.toString() + " - " + process.env.VUE_APP_TITLE
  document.title = siteTitle
  next()
})

export default router
