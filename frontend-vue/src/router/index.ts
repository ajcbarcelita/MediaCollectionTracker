import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/landingView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
  ],
})

export default router
