/* eslint-disable import/named */
/* eslint-disable import/no-named-default */
import { axiosInstance } from '../boot/axios'
import { Notify } from 'quasar'

export async function registerService (data) {
  try {
    const response = await axiosInstance.post('/api/v1/register', data)
    return response
  } catch (err) {
    Notify.create({
      message: err.data.error.errors[0],
      icon: 'warning',
      color: 'red'
    })
    throw err
  }
}

export async function loginService (data) {
  try {
    const response = await axiosInstance.post('/api/v1/oauth/sign_in', data)
    return response
  } catch (err) {
    Notify.create({
      message: err.data.error.errors[0],
      icon: 'warning',
      color: 'red'
    })
    throw err
  }
}

export async function otpService (data) {
  try {
    const response = await axiosInstance.post('/api/v1/register/otp/match', data)
    return response
  } catch (err) {
    Notify.create({
      message: err.data.error.errors[0],
      icon: 'warning',
      color: 'red'
    })
    throw err
  }
}

export async function resendOtpService (data) {
  try {
    const response = await axiosInstance.post('/api/v1/register/otp/request', data)
    return response
  } catch (err) {
    Notify.create({
      message: err.data.error.errors[0],
      icon: 'warning',
      color: 'red'
    })
    throw err
  }
}
