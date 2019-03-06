import Vue from 'vue'
import Router from 'vue-router'
import MainView from './view/MainView'
import DeviceList from './components/DeviceList/DeviceList'
import DeviceGenerator from './components/DeviceGenerator/DeviceGenerator'
import Preview from './components/Preview/Preview'
import DeviceDetail from './components/DeviceDetail/DeviceDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainView,
      redirect: '/devices',
      children: [{
        path: '/devices',
        component: DeviceList,
        name: 'device-list',
        label: 'Devices',
        showOnNav: true,
        children: [{
          path: 'detail/:deviceKey',
          name: 'device-detail',
          component: DeviceDetail,
          showOnNav: false
        }]
      }, {
        path: 'generator',
        name: 'generator',
        component: DeviceGenerator,
        label: 'Generator',
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
