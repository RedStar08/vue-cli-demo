import Service from '../service'

export default {
  login(params) {
    return Service({
      url: '/user/login',
      method: 'get',
      data: params,
    })
  },
}
