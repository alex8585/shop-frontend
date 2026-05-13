import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import CategoriesView from '../views/CategoriesView.vue'

import CartView from '../views/CartView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'


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
    {
      name: 'register',
      path: '/register',
      component: RegisterView,
      meta: { guestOnly: true }
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView,
      meta: { guestOnly: true }
    },
  ]
})

router.beforeEach((to) => {

  const token = localStorage.getItem('token')

  const isAuth = !!token

  if (to.meta.guestOnly && isAuth) {
    return '/'
  }

  if (to.meta.requiresAuth && !isAuth) {
    return '/register'
  }

})


export default router
