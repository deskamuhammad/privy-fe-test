/* eslint-disable no-console */
import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  baseURL: '/'
})

Vue.prototype.$axios = axios
// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error.response)
  }
)

export default service
