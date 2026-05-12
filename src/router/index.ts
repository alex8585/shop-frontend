import { createRouter, createWebHistory } from 'vue-router'

import ShopView from '../views/ShopView.vue'
import CategoriesView from '../views/CategoriesView.vue'

import CartView from '../views/CartView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'shop', component: ShopView },
    { path: '/categories', name: 'categories', component: CategoriesView },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
  ]
})

export default router
