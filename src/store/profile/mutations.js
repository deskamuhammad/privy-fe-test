export const GET_PROFILE_REQUEST = (state) => {
  state.user = null
}
export const GET_PROFILE_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const GET_PROFILE_FAILURE = (state) => {
  state.user = null
}
