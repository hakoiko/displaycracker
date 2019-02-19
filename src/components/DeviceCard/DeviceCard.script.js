import * as Utils from '@/components/Utils/Utils'
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
  created () {
    this.model.screen = Object.assign(this.model.screen, Utils.getSpec(this.model.screen))
  },
  data () {
    return {}
  }
}
