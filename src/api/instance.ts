import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://oswa-shopping-backend.vercel.app/',
  withCredentials: true,
})
