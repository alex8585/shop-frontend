import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://shop1.d2.local/api'
})

const token = localStorage.getItem('token')

if (token) {
  api.defaults.headers.common.Authorization =
    `Bearer ${token}`
}
