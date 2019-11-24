// Get Profile
export const GET_PROFILE_REQUEST = (state) => {
  state.user = null
}
export const GET_PROFILE_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const GET_PROFILE_FAILURE = (state) => {
  state.user = null
}

// Update Profile
export const UPDATE_PROFILE_REQUEST = () => { }
export const UPDATE_PROFILE_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const UPDATE_PROFILE_FAILURE = () => { }

// Update Career
export const UPDATE_CAREER_REQUEST = () => { }
export const UPDATE_CAREER_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const UPDATE_CAREER_FAILURE = () => { }

// Update Education
export const UPDATE_EDUCATION_REQUEST = () => { }
export const UPDATE_EDUCATION_SUCCESS = (state, response) => {
  state.user = response.data.user
}
export const UPDATE_EDUCATION_FAILURE = () => { }
