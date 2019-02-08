import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './Settings'
import Devices from './Devices'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Settings,
    Devices
  }
})