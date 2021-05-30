const Login = import('@/views/Login')

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => Login,
  },
]

export default routes
