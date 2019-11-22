import axios from 'axios'
import { Cookies } from 'quasar'

const axiosInstance = axios.create({
  baseURL: '/'
})

export default function ({ Vue, ssrContext }) {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies

  // request interceptor
  axiosInstance.interceptors.request.use(config => {
    let token = cookies.get('token')
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  // response interceptor
  axiosInstance.interceptors.response.use(
    response => response.data,
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error.response)
    }
  )

  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
