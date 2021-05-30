import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import { token } from '@/config'

Vue.use(VueRouter)

// 获取各个路由模块
const routerContext = require.context('./modules', true, /\.js$/)
const routeList = routerContext.keys().reduce((prev, next) => {
  prev = [...prev, ...(routerContext(next).default || routerContext(next))]
  return prev
}, [])
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
  },
  ...routeList,
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
  },
]

// 配置路由
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (axios.defaultSource) {
    axios.defaultSource.cancel('路由切换，取消请求')
  }
  // 刷新 defaultSource
  axios.defaultSource = axios.CancelToken.source()
  // 业务逻辑
  if (to.path !== '/login' && !token) return next('/login')
  next()
})

export default router
