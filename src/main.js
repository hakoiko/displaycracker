import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import filters from './filters/Filters'
import _ from 'lodash'

Vue.config.productionTip = false
Vue.set(Vue.prototype, '_', _)

new Vue({
  router,
  store,
  filters,
  render: h => h(App)
}).$mount('#app')
