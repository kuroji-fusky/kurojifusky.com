import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Discography from './views/Discography.vue'
import Quotes from './views/Quotes.vue'
import UOC from './views/UseOfContent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/discography',
    name: 'Discography',
    component: Discography
  },
  {
    path: '/use-of-content',
    name: 'Use of Content',
    component: UOC
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
