import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    metaTags: {
      title: 'Home',
      metaTags: {
        name: 'description',
        content: 'YOUR MOM'
      }
    }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('./views/Quotes.vue')
  },
  {
    path: '/discography',
    name: 'Discography',
    component: () => import('./views/Discography.vue')
  },
  {
    path: '/use-of-content',
    name: 'Use of Content',
    component: () => import('./views/UseOfContent.vue')
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let siteTitle = `${to.name} | ${process.env.VUE_APP_TITLE}`
  document.title = siteTitle
  next()
})

export default router
