import DeviceCard from '../DeviceCard/DeviceCard'

export default {
  name: 'device-list',
  components: {
    'device-card': DeviceCard
  },
  computed: {
    deviceList () {
      console.log(this.$store.getters.devices)
      return this.$store.getters.devices
    }
  },
  created () {},
  methods: {},
  data () {
    return {}
  }
}
