/* eslint-disable import/namespace */
import * as ProfileService from '../../service/ProfileService'

export function getProfile ({ commit }) {
  commit('GET_PROFILE_REQUEST')
  return ProfileService.getProfileService()
    .then(response => {
      commit('GET_PROFILE_SUCCESS', response)
    })
    .catch(err => {
      commit('GET_PROFILE_FAILURE')
      throw err
    })
}
