import axios from 'axios'
import { baseURL, token } from '@/config'

// 请求进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.defaultSource = axios.CancelToken.source()

//使用create方法创建axios实例
const AxiosService = axios.create({
  timeout: 30000, // 请求超时时间
  baseURL: baseURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: token,
  },
})

// 添加请求拦截器
AxiosService.interceptors.request.use((config) => {
  NProgress.start()
  // 默认给请求加上 cancelToken (不包含 null)
  if (config.cancelToken === undefined) {
    config.cancelToken = axios.defaultSource.token
  }
  return config
})

// 添加响应拦截器
AxiosService.interceptors.response.use(
  (response) => {
    NProgress.done()
    const { data = {}, meta = {} } = response.data
    if (meta.status !== 200) {
      return Promise.reject(data)
    }
    return data
  },
  (error) => {
    NProgress.done()
    const msg = error.Message !== undefined ? error.Message : ''
    console.log(msg)
    return Promise.reject(error)
  },
)

export default AxiosService
