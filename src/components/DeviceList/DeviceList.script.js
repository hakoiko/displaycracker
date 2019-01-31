export default {
  name: 'device-list',
  components: {},
  computed: {
    filteredDeviceList () {
      return this.$store.getters.devices
    }
  },
  created () {},
  methods: {},
  data () {
    return {}
  }
}
