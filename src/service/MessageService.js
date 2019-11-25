import { axiosInstance } from '../boot/axios'

export async function getMessageService (id) {
  return axiosInstance.get('/api/v1/message/' + id)
}

export async function sendMessageService (data) {
  return axiosInstance.post('/api/v1/message/send', data)
}
