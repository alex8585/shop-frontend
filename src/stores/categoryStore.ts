import { defineStore } from 'pinia'
import { api } from '../services/api'
import type { Category } from '../types/Product'

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[]
  }),

  actions: {
    async fetchCategories() {
      const res = await api.get('/categories')
      this.categories = res.data.data
    }
  }
})
