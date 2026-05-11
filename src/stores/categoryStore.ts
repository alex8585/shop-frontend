import { defineStore } from 'pinia'
import { api } from '../services/api'
import type { Category } from '../types/Product'

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
    loading: false
  }),

  actions: {
    async fetchCategories() {
      if (this.categories.length) return

      this.loading = true

      const res = await api.get('/categories')

      this.categories = res.data.data

      this.loading = false
    }
  }
})
