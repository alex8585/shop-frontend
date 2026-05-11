import { defineStore } from 'pinia'
import { api } from '../services/api'
import type { Product } from '../types/Product'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,

    currentPage: 1,
    lastPage: 0,
    total: 0,
    perPage: 12,
    sort: 'newest',

    filters: {
      category_id: null as number | null,
      price_min: 0,
      price_max: 5000,
      tags: [] as number[],
    }
  }),

  actions: {

    async fetchProducts(page = 1, sort = this.sort, perPage = this.perPage) {
      this.loading = true

      const res = await api.get('/products', {
        params: {
          page,
          sort,
          per_page: perPage,
          ...this.filters
        }
      })

      this.products = res.data.data

      this.currentPage = res.data.meta?.current_page ?? page
      this.lastPage = res.data.meta?.last_page ?? 1
      this.total = res.data.meta?.total ?? 0
      console.log(this.total)
      console.log(this.currentPage)
      console.log(this.lastPage)
      this.sort = sort
      this.perPage = perPage

      this.loading = false
    },

    setFilters(partial: Partial<typeof this.filters>) {
      this.filters = {
        ...this.filters,
        ...partial
      }

      this.currentPage = 1
    },

    resetFilters() {
      this.filters = {
        category_id: null,
        price_min: 0,
        price_max: 5000,
        tags: []
      }

      this.currentPage = 1
    }
  }
})
