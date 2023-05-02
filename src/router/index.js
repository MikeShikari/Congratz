import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import galleryPage from '@/views/galleryPage.vue'
import menuPage from '@/views/menuPage.vue'
import juniorPage from '@/views/juniorPage.vue'
import elderPage from '@/views/elderPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: galleryPage
  },
  {
    path: '/menu',
    name: 'menu',
    component: menuPage
  },
  {
    path: '/junior',
    name: 'junior',
    component: juniorPage
  },
  {
    path: '/elder',
    name: 'elder',
    component: elderPage
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
