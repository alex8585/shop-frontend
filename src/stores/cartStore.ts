import { defineStore } from 'pinia'
import { api } from '../services/api'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]')
  }),

  getters: {
    totalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {

    addToCart(product: any) {

      const existing = this.items.find(i => i.id === product.id)

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }

      this.saveCart()

    },
    removeFromCart(productId: number) {
      this.items = this.items.filter(i => i.id !== productId)
      this.saveCart()
    },

    clearCart() {
      this.items = []
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    increaseQuantity(productId: number) {
      const item = this.items.find(i => i.id === productId)

      if (item) {
        item.quantity++
      }

      this.saveCart()
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find(i => i.id === productId)

      if (!item) return

      item.quantity--

      if (item.quantity <= 0) {
        this.items = this.items.filter(i => i.id !== productId)
      }

      this.saveCart()
    },

  }
})
