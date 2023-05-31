import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

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
      path: '/promo',
      name: 'promo',
      component: () => import('../views/PromoView.vue')
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('../views/PricesView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
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
    switch (true) {
      case Boolean(to.hash):
        gsap.to(window, {
          duration: 1,
          delay: 0.5,
          scrollTo: to.hash,
          ease: 'power1'
        })
        break
      default:
        window.scrollTo({ top: 0, behavior: 'auto' })
        break
    }
  }
})

export default router
