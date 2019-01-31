import Devices from '../devices'

export default {
  state: {
    devices: Devices
  },
  getters: {
    devices (state) {
      return state.devices
    }
  }
}
