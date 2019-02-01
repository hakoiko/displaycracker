export default {
  name: 'device-list',
  components: {},
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
