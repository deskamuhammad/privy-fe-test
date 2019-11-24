import { axiosInstance } from '../boot/axios'
// import { Notify } from 'quasar'

export async function uploadCoverService (formData) {
  return axiosInstance.post('/api/v1/uploads/cover',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}
