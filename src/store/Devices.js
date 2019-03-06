import * as Devices from '../devices'
import * as Utils from '../components/Utils/Utils'
import Search from './Search'
import Filter from '../components/Utils/DeviceListFilter'

export default {
  state: {
    devices: [],
    deviceIndex: {},
    deviceColor: '#fafafa'
  },
  getters: {
    devices (state) {
      return state.devices
    },
    deviceColor (state) {
      return state.deviceColor
    },
    /**
     * Device List중, Search.condition과 일치하는 친구들을 찾아서 리턴합니다.
     *
     * @param {Object} state vuex state
     * @param {Object} getters vuex getters
     * @returns
     */
    filteredDeviceList (state, getters) {
      let condition = Search.state.condition
      let devices = getters.devices

      if (!condition.string.pure) devices = devices.filter(Filter.filterDeviceName)
      if (!condition.displaySize.pure) devices = devices.filter(Filter.filterDisplaySize)
      if (!condition.ppi.pure) devices = devices.filter(Filter.filterDevicePpi)
      if (!condition.density.pure) devices = devices.filter(Filter.filterDeviceDensity)
      if (!condition.platform.pure) devices = devices.filter(Filter.filterDevicePlatform)
      if (!condition.manufacturer.pure) devices = devices.filter(Filter.filterDeviceManufacturer)
      return devices
    },
    /**
     * Device Key를 통해 Device Data를 가져옵니다.
     * key: ['iPhoneX' | 'GalaxyS9'] 등 각 device JSON 문서의 Key.
     *
     * @param {Object} state vuex state
     */
    getDeviceByKey: (state) => (key) => {
      return state.devices[state.deviceIndex[key]]
    }
  },
  actions: {
    /**
     * Utils.getSpec을 이용해 Devices의 각 Device의 스펙을 계산합니다. 계산한 값을 initialize로 commit 합니다.
     * @param {Object} context Vuex Context
     */
    initializeDeviceList (context) {
      let deviceIndex = {}
      let deviceKeys = Object.keys(Devices)
      deviceKeys.forEach((key, i) => {
        deviceIndex[key] = i
      })
      context.commit('initializeDeviceIndex', deviceIndex)

      context.commit('initialize', Object.values(Devices).map((device, i) => {
        device.key = deviceKeys[i]
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
     * devices는 배열. 이중에서 device를 빨리 찾기 위해서 별도로 deviceIndex를 설정
     * @param {Object} state Vuex State
     * @param {*} index Device Index {iPhoneeX: 1, GalaxyS9: 2}
     */
    initializeDeviceIndex (state, index) {
      state.deviceIndex = index
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
