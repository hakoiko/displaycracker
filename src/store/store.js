import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './Settings'
import Devices from './Devices'
import Search from './Search'
import Generator from './Generator'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Settings,
    Devices,
    Search,
    Generator
  }
})
