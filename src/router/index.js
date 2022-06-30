import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import StoreView from '@/views/StoreView'
import ContactView from '@/views/ContactView'

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
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
