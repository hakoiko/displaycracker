import * as Devices from '../devices'
import * as Utils from '../components/Utils/Utils'

export default {
  state: {
    devices: [],
    deviceColor: '#fafafa'
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
    /**
     * Utils.getSpec을 이용해 Devices의 각 Device의 스펙을 계산합니다. 계산한 값을 initialize로 commit 합니다.
     * @param {Object} context Vuex Context
     */
    initializeDeviceList (context) {
      context.commit('initialize', Object.values(Devices).map(device => {
        device.screen = Object.assign(device.screen, Utils.getSpec(device.screen))
        return device
      }))
    },
    /**
     * 디바이스 컬러를 #fafafa로 복원시킵니다.
     * @param {Object} context Vuex Context
     */
    resetColor (context) {
      context.commit('setDeviceColor', '#fafafa')
    }
  },
  mutations: {
    /**
     * devices store에 디바이스 목록을 저장합니다.
     * @param {Object} state Vuex State
     * @param {Array} deviceList 관리할 Device 목록을
     */
    initialize (state, deviceList) {
      state.devices = deviceList
    },
    /**
     * Device Color를 지정합니다. 화면의 Device에 이 색상이 표시됩니다.
     * @param {Object} state Vuex State
     * @param {String} color CSS Color
     */
    setDeviceColor (state, color) {
      state.deviceColor = color
    }
  }
}
