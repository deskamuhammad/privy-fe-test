/* eslint-disable import/named */
/* eslint-disable import/no-named-default */
import { axiosInstance } from '../boot/axios'
import { Notify } from 'quasar'

export async function getProfileService () {
  try {
    const response = await axiosInstance.get('/api/v1/profile/me')
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
