import * as Devices from '../devices'

export default {
  state: {
    devices: Object.values(Devices),
    deviceColor: '#555'
  },
  getters: {
    devices (state) {
      return state.devices
    },
    deviceColor (state) {
      return state.deviceColor
    }
  },
  actions: {
    resetColor (context) {
      context.commit('setDeviceColor', '#555')
    }
  },
  mutations: {
    setDeviceColor (state, color) {
      state.deviceColor = color
    }
  }
}
