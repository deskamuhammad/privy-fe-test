export const REGISTER_REQUEST = (state, data) => {
  state.user = data
}

export const REGISTER_SUCCESS = (state, response) => {
  state.user = response.data.user
}

export const REGISTER_FAILURE = (state) => {
  state.user = null
}
