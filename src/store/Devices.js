import * as Devices from '../devices'
import * as Utils from '../components/Utils/Utils'

export default {
  state: {
    devices: [],
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
    initializeDeviceList (context) {
      context.commit('initialize', Object.values(Devices).map(device => {
        device.screen = Object.assign(device.screen, Utils.getSpec(device.screen))
        return device
      }))
    },
    resetColor (context) {
      context.commit('setDeviceColor', '#555')
    }
  },
  mutations: {
    initialize (state, deviceList) {
      state.devices = deviceList
    },
    setDeviceColor (state, color) {
      state.deviceColor = color
    }
  }
}
