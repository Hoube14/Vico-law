import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Hem - VICO Juridik'
      }
    },
    {
      path: '/tjanster',
      name: 'services',
      component: ServicesView,
      meta: {
        title: 'Våra Tjänster - VICO Juridik'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title based on route
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'VICO Juridik'
  next()
})

export default router