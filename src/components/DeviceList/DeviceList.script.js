import DeviceCard from '../DeviceCard/DeviceCard'
import DeviceSearch from '../DeviceSearch/DeviceSearch'
import { mapGetters } from 'vuex'

export default {
  name: 'DeviceList',
  components: {
    'device-card': DeviceCard,
    'device-search': DeviceSearch
  },
  computed: {
    ...mapGetters({
      condition: 'searchCondition',
      deviceList: 'filteredDeviceList'
    })
  },
  created () {
    this.$store.dispatch('initializeDeviceList')
  },
  mounted () {
  },
  methods: {
    /**
     * 디바이스 상세를 오픈합니다.
     *
     * @param {Object} device Device Object.
     */
    routeToDeviceDetail (device) {
      this.$router.push({
        name: 'device-detail',
        params: {
          deviceKey: device.key
        }
      })
    }
  },
  data () {
    return {}
  }
}
