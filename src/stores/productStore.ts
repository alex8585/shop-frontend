import { defineStore } from 'pinia'
import { api } from '../services/api'
import type { Product } from '../types/Product'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false
  }),

  actions: {
    async fetchProducts() {
      this.loading = true

      const res = await api.get('/products')

      this.products = res.data.data

      this.loading = false
    }
  }
})
