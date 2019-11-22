export const REGISTER_REQUEST = (state, data) => {
  state.user = data
}
export const REGISTER_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const REGISTER_FAILURE = (state) => {
  state.user = null
}

export const OTP_REQUEST = (state, data) => {
  state.otp = data
}
export const OTP_SUCCESS = (state, response) => {
  state.otp = response.data.user
}
export const OTP_FAILURE = (state) => {
  state.otp = null
}

export const RESEND_OTP_REQUEST = (state, data) => {
  state.user.phone = data
}
export const RESEND_OTP_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const RESEND_OTP_FAILURE = (state) => {
  state.user.phone = null
}

export const LOGIN_REQUEST = (state, data) => {
  state.user = data
}
export const LOGIN_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const LOGIN_FAILURE = (state) => {
  state.user = null
}
