import { createRouter, createWebHistory } from 'vue-router'
import page1View from '../views/page1View.vue'
import page2View from '../views/page2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: page1View,
    },
    {
      path: '/Random',
      name: 'Random',
      component: page2View,
    },
  ],
})

export default router
