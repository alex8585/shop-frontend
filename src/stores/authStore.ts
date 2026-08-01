import { defineStore } from 'pinia'
import { api } from '../services/api'

interface User {
  id: number
  name: string
  email: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || '',
    loading: false
  }),

  getters: {
    isAuth: (state) => !!state.token
  },

  actions: {

    // =====================
    // REGISTER
    // =====================
    async register(data: RegisterData) {

      this.loading = true

      try {

        const res = await api.post('/auth/register', data)

        this.token = res.data.token
        this.user = res.data.user

        localStorage.setItem('token', this.token)

        api.defaults.headers.common.Authorization =
          `Bearer ${this.token}`

      } finally {
        this.loading = false
      }
    },

    // =====================
    // LOGIN (НОВОЕ)
    // =====================
    async login(data: LoginData) {

      this.loading = true

      try {

        const res = await api.post('/auth/login', data)

        this.token = res.data.token
        this.user = res.data.user

        localStorage.setItem('token', this.token)

        api.defaults.headers.common.Authorization =
          `Bearer ${this.token}`

        return res.data

      } catch (error: any) {

        const message =
          error?.response?.data?.message ||
          'Login failed'

        const errors =
          error?.response?.data?.errors || null

        throw {
          message,
          errors
        }

      } finally {
        this.loading = false
      }
    },
    // =====================
    // LOGOUT
    // =====================
    logout() {

      this.user = null
      this.token = ''

      localStorage.removeItem('token')

      delete api.defaults.headers.common.Authorization
    },


    async exchangeGithubToken(temp: string) {
      this.loading = true
      try {
        const res = await api.post('/auth/github/exchange', { temp })
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        api.defaults.headers.common.Authorization = `Bearer ${this.token}`
      } finally {
        this.loading = false
      }
    }
  }
})
