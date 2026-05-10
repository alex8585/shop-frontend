import { createRouter, createWebHistory } from 'vue-router'

import ShopView from '../views/ShopView.vue'
import CategoriesView from '../views/CategoriesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'shop', component: ShopView },
    { path: '/categories', name: 'categories', component: CategoriesView },
  ]
})

export default router
