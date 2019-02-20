import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import filters from './filters/Filters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters,
  render: h => h(App)
}).$mount('#app')
