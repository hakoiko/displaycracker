import * as Devices from '../devices'

export default {
  state: {
    devices: Devices,
    deviceColor: '#333'
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
      context.commit('setDeviceColor', '#333')
    }
  },
  mutations: {
    setDeviceColor (state, color) {
      state.deviceColor = color
    }
  }
}
