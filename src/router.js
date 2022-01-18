import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'

const jungkookOppa = './views/'

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
    component: () => import(jungkookOppa + 'Quotes.vue')
  },
  {
    path: '/discography',
    name: 'Discography',
    component: () => import(jungkookOppa + 'Discography.vue')
  },
  {
    path: '/use-of-content',
    name: 'Use of Content',
    component: () => import(jungkookOppa + 'UseOfContent.vue')
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(jungkookOppa + 'About.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Page not found',
    component: () => import(jungkookOppa + 'PageNotFound.vue')
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
