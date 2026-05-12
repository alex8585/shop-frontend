import { defineStore } from 'pinia'
import { api } from '../services/api'

export type Tag = {
  id: number
  name: string
}

export const useTagStore = defineStore('tags', {
  state: () => ({
    tags: [] as Tag[],
    loading: false
  }),

  actions: {
    async fetchTags() {
      if (this.tags.length) return

      this.loading = true

      const res = await api.get('/tags')

      this.tags = res.data.data
      this.loading = false
    }
  }
})
