import * as AuthService from '../../service/AuthService'

export function register ({ commit }, data) {
  commit('REGISTER_REQUEST', data)
  return AuthService.registerService(data)
    .then(response => {
      commit('REGISTER_SUCCESS', response)
    })
    .catch(err => {
      commit('REGISTER_FAILURE')
      throw err
    })
}
