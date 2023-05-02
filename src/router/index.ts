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
    }
  ]
})

export default router
