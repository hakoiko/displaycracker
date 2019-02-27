import DeviceCard from '../DeviceCard/DeviceCard'
import DeviceSearch from '../DeviceSearch/DeviceSearch'

export default {
  name: 'DeviceList',
  components: {
    'device-card': DeviceCard,
    'device-search': DeviceSearch
  },
  computed: {
    condition () {
      return this.$store.state.Search.condition
    },
    deviceList () {
      let condition = this.$store.state.Search.condition
      let devices = this.$store.getters.devices

      // apply search filters.
      if (condition.string.length) devices = devices.filter(this.filterDeviceName)
      if (!condition.displaySize.pure) devices = devices.filter(this.filterDisplaySize)
      if (!condition.ppi.pure) devices = devices.filter(this.filterDevicePpi)
      if (!condition.density.pure) devices = devices.filter(this.filterDeviceDensity)
      return devices
    }
  },
  created () {
    this.$store.dispatch('initializeDeviceList')
  },
  methods: {
    /**
     * Device 명이 현재 검색 컨디션의 string에 포함된느지 여부를 리턴
     * @param {Object} device Device
     */
    filterDeviceName (device) {
      // backlog: support case sensitive search
      return device.name.toLowerCase().includes(this.condition.string.toLowerCase())
    },
    /**
     * PPI 필터
     * @param {Object} device Device
     */
    filterDevicePpi (device) {
      return (Number(device.screen.pixelsPer1Inch.toFixed(1)) >= this.condition.ppi.value.from && Number(device.screen.pixelsPer1Inch.toFixed(1)) <= this.condition.ppi.value.to)
    },
    /**
     * Density 필터
     * @param {Object} device Device
     */
    filterDeviceDensity (device) {
      return (device.screen.density >= this.condition.density.value.from && device.screen.density <= this.condition.density.value.to)
    },
    /**
     * Device의 ScreenSize 옵션이 검색조건의 ScreenSize에 포함되는지 여부를 리턴
     * @param {Object} device Device
     */
    filterDisplaySize (device) {
      let sizes = [
        device.screen.coordinates.width,
        device.screen.coordinates.height,
        device.screen.resolution.width,
        device.screen.resolution.height,
        Number(device.screen.physicalWidth.toFixed(2)),
        Number(device.screen.physicalHeight.toFixed(2))
      ]
      let conditions = [
        this.condition.displaySize.pointWidth,
        this.condition.displaySize.pointHeight,
        this.condition.displaySize.pixelWidth,
        this.condition.displaySize.pixelHeight,
        this.condition.displaySize.physicalWidth,
        this.condition.displaySize.physicalHeight
      ]
      let flag = true
      for (let i = 0; i < sizes.length; i++) {
        flag = (sizes[i] >= conditions[i].value.from && sizes[i] <= conditions[i].value.to) ? flag : false
        if (!flag) break
      }
      return flag
    }
  },
  data () {
    return {}
  }
}
