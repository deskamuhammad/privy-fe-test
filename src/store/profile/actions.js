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

export function updateProfile ({ commit }, data) {
  commit('UPDATE_PROFILE_REQUEST')
  return ProfileService.updateProfileService(data)
    .then(response => {
      commit('UPDATE_PROFILE_SUCCESS', response)
    })
    .catch(err => {
      commit('UPDATE_PROFILE_FAILURE')
      throw err
    })
}
