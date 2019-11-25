/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { LoadingBar } from 'quasar'

export default async ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    LoadingBar.start()
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // check if isAutheticated
      if (store.getters.isLoggedIn) {
        next()
      } else {
        next('login')
        LoadingBar.stop()
      }
      // return
    } else {
      next()
    }
    next()
  })

  router.afterEach(() => {
    LoadingBar.stop()
  })
}
