import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sobre',
    name: 'Sobre',
    component: function () {
      return import('@/views/AboutView.vue')
    }
  },
  {
    path: '/',
    name: 'Compras',
    component: function () {
      return import('@/views/BuyView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
