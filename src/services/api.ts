import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://shop1.d2.local/api'
})
