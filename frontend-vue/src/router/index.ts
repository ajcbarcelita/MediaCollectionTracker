import { createRouter, createWebHistory } from 'vue-router'

import landingView from '@/views/landingView.vue'
import loginView from '@/views/loginView.vue'
import registerView from '@/views/registerView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landingView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/registerView.vue'),
    },
  ],
})

export default router
