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

export async function uploadProfileService (formData) {
  return axiosInstance.post('/api/v1/uploads/profile',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

export async function setProfileService (data) {
  return axiosInstance.post('/api/v1/uploads/profile/default', data)
}

export async function deleteProfileService (params) {
  return axiosInstance.delete('/api/v1/uploads/profile/default/', { params })
}
