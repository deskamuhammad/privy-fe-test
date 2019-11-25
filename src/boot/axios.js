/* eslint-disable no-unused-expressions */
/* eslint-disable standard/computed-property-even-spacing */
import axios from 'axios'
import { Cookies } from 'quasar'

const axiosInstance = axios.create({
  baseURL: '/'
})

export default function ({ Vue, store, ssrContext, router }) {
  // request interceptor
  axiosInstance.interceptors.request.use(
    config => {
      const cookies = process.env.SERVER
        ? Cookies.parseSSR(ssrContext)
        : Cookies // otherwise we're on client

      config.headers[{
        Accept: '*',
        'Content-Type': 'application/json'
      }]

      if (cookies.has('tokenAccess')) {
        config.headers.Authorization = `Bearer ${cookies.get('tokenAccess')}`
      }
      return config
    }, error => {
      return Promise.reject(error)
    })

  // response interceptor
  axiosInstance.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response.status === 401) {
        router.push('/')
      }
      console.log('err' + error) // for debug
      return Promise.reject(error.response)
    }
  )

  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
