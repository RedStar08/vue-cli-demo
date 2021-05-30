let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://api.liuhongxin.com.cn/hfut'
} else {
  baseURL = 'http://localhost:3000'
}

const token = window.sessionStorage.getItem('token') || ''

module.exports = {
  baseURL,
  token,
}
