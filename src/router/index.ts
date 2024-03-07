import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/development',
      name: 'development',
      component: () => import('@/views/DevelopmentView.vue')
    },
    {
      path: '/investments',
      name: 'investments',
      component: () => import('@/views/InvestmentsView.vue')
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => import('@/views/RoadmapView.vue')
    }
  ]
})

export default router
