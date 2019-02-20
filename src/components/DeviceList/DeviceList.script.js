import DeviceCard from '../DeviceCard/DeviceCard'
import DeviceSearch from '../DeviceSearch/DeviceSearch'

export default {
  name: 'DeviceList',
  components: {
    'device-card': DeviceCard,
    'device-search': DeviceSearch
  },
  computed: {
    deviceList () {
      let condition = this.$store.getters.searchCondition
      let devices = this.$store.getters.devices

      // String 검색 사용시
      if (condition.string.length) {
        devices = devices.filter(device => {
          // backlog: support case sensitive search
          return device.name.toLowerCase().includes(condition.string.toLowerCase())
        })
      }

      return devices
    }
  },
  created () {},
  methods: {},
  data () {
    return {}
  }
}
