import Vue from 'vue'
import Router from 'vue-router'
import DeviceList from './components/DeviceList/DeviceList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'devices',
      label: 'DEVICES',
      showOnNav: true,
      component: DeviceList
    }
  ]
})
