import * as AuthService from '../../service/AuthService'
import { Cookies } from 'quasar'

export function register ({ commit }, data) {
  commit('REGISTER_REQUEST', data)
  return AuthService.registerService(data)
    .then(response => {
      commit('REGISTER_SUCCESS', response)
    })
    .catch(err => {
      commit('REGISTER_FAILURE')
      throw err
    })
}

export function otp ({ commit }, data) {
  commit('OTP_REQUEST', data)
  return AuthService.otpService(data)
    .then(response => {
      commit('OTP_SUCCESS', response)
      Cookies.set('auth_token', response.data.user)
    })
    .catch(err => {
      commit('OTP_FAILURE')
      throw err
    })
}

export function resendOtp ({ commit }, data) {
  commit('RESEND_OTP_REQUEST', data)
  return AuthService.resendOtpService(data)
    .then(response => {
      commit('RESEND_OTP_SUCCESS', response)
      Cookies.set('auth_token', response.data.user)
    })
    .catch(err => {
      commit('RESEND_OTP_FAILURE')
      throw err
    })
}

export function login ({ commit }, data) {
  commit('LOGIN_REQUEST', data)
  return AuthService.loginService(data)
    .then(response => {
      commit('LOGIN_SUCCESS', response)
    })
    .catch(err => {
      commit('LOGIN_FAILURE')
      throw err
    })
}
