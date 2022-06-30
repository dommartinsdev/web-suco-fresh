import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import StoreView from '@/views/StoreView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
