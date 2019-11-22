/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { LoadingBar } from 'quasar'

export default async ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    LoadingBar.start()
    next()
  })

  router.afterEach(() => {
    LoadingBar.stop()
  })
}
