
const routes = [
  {
    path: '*',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout'),
    children: [
      { path: '', component: () => import('pages/Auth/Register') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
