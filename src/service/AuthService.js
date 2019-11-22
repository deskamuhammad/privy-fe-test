import apiInstance from '../boot/axios'

export default {
  register (data) {
    return apiInstance.post('/api/v1/register', data)
  }
}
