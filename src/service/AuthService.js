import apiInstance from 'boot/axios'
import { Notify } from 'quasar'

export async function registerService (data) {
  try {
    const response = await apiInstance.post('/api/v1/register', data)
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

// export default { registerService }
