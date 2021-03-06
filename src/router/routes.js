
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
      {
        path: '/register',
        name: 'register',
        component: () => import('pages/Auth/Register')
      },
      {
        path: '/otp',
        name: 'otp',
        component: () => import('pages/Auth/Otp')
      },
      {
        path: '/',
        name: 'login',
        component: () => import('pages/Auth/Login')
      }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/HomeLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Main/Home'),
        meta: {
          requiresAuth: true
        }
      }
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
