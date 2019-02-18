import Vue from 'vue'
import Router from 'vue-router'
import MainView from './view/MainView'
import DeviceList from './components/DeviceList/DeviceList'
import Preview from './components/Preview/Preview'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: MainView,
      children: [{
        path: '',
        component: DeviceList,
        label: 'Devices',
        showOnNav: true
      }]
    }, {
      path: '/preview',
      name: 'preview',
      showOnNav: false,
      component: Preview
    }
  ]
})
