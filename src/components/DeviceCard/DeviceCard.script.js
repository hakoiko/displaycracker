import DeviceRenderer from '../DeviceRenderer/DeviceRenderer'

export default {
  name: 'deviceCard',
  components: {
    'device-renderer': DeviceRenderer
  },
  props: {
    'model': {
      type: Object,
      required: true
    }
  },
  methods: {},
  created () {},
  data () {
    return {}
  }
}
