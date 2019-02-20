export default {
  name: 'DeviceSearch',
  components: {},
  computed: {
    condition () {
      return this.$store.state.Search.condition
    },
    options () {
      let result = {}
      for (let key in this.condition) {
        result[key] = {
          label: this.$options.filters.labelize(key),
          class: '-' + this.$options.filters.hyphenize(key),
          action: this.updateCondition
        }
      }
      return result
    }
  },
  created () {},
  methods: {
    updateCondition (key) {
      console.log('@updateCondition')
      this.$store.commit('updateCondition', this.condition[key], key)
    }
  },
  data () {
    return {
    }
  }
}
