import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('../views/PricesView.vue')
    },
    {
      path: '/dummy',
      name: 'dummy',
      component: () => import('../views/DummyView.vue')
    },
    { 
      path: '/:notFound(.*)',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    },
    { 
      path: '/bad-call',
      name: 'badCall',
      component: () => import('../views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from) {
    switch(true) {
      case (to === from ):
        window.scrollTo({ top: 0, behavior: "smooth" })
        break;
    }
  }

})

export default router
