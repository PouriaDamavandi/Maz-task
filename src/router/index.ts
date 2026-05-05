import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: () => import('@/pages/ProductList.vue') },
  { path: '/products/:id', component: () => import('@/pages/ProductDetail.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
