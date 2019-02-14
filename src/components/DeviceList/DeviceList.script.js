import DeviceCard from '../DeviceCard/DeviceCard'

export default {
  name: 'device-list',
  components: {
    'device-card': DeviceCard
  },
  computed: {
    deviceList () {
      return this.$store.getters.devices
    }
  },
  created () {},
  methods: {},
  data () {
    return {}
  }
}
