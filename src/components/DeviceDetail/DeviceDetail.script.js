import DeviceRenderer from '../DeviceRenderer/DeviceRenderer'
import SpecItem from '../DeviceSpecItem/DeviceSpecItem'
import DeviceScreenZoomed from '../DeviceScreenZoomed/DeviceScreenZoomed'
import { mapGetters } from 'vuex'

export default {
  name: 'DeviceDetail',
  props: {},
  components: {
    'device-renderer': DeviceRenderer,
    'spec-item': SpecItem,
    'screen-zoomed': DeviceScreenZoomed
  },
  methods: {
    /**
     * 디바이스 리스트 페이지로 돌아갑니다.
     *
     */
    quit () {
      this.$router.push({ name: 'device-list' })
    }
  },
  computed: {
    ...mapGetters(['getDeviceByKey']),

    /**
     * 현재 route param에서 device key를 가져옵니다.
     *
     * @returns
     */
    key () {
      return this.$route.params.deviceKey
    },

    /**
     * 디스플레이 상세에서 표시할 Device의 데이터를 리턴합니다.
     *
     * @returns DeviceObject
     */
    model () {
      return this.getDeviceByKey(this.key)
    }
  },
  data () {
    return {}
  }
}
