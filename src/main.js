import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apis from '@/api'

Vue.prototype.$api = apis // 将api挂载到vue的原型上

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
