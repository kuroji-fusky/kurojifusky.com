import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/HomePage.vue'

const route_my_balls = './views/'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( route_my_balls + 'AboutPage.vue' /* webpackChunkName: "aboutMe" */)
  },
  {
    path: '/projects',
    name: 'Shitty Projects',
    component: () => import( route_my_balls + 'ProjectsPage.vue' /* webpackChunkName: "projects" */)
  },
  {
    path: '/portfolio',
    name: 'Terrible ew disgusting',
    component: () => import( route_my_balls + 'PortfolioPage.vue' /* webpackChunkName: "portfolio" */)
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const siteTitle = to.name?.toString() + " • " + process.env.VUE_APP_TITLE
  document.title = siteTitle
  next()
})

export default router
