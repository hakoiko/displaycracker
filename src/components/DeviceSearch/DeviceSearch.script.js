import RangeSlider from '../RangeSlider/RangeSlider'
import PopOver from '../PopOver/PopOver'

export default {
  name: 'DeviceSearch',
  components: {
    'range-slider': RangeSlider,
    'pop-over': PopOver
  },
  computed: {
    condition () {
      return this.$store.state.Search.condition
    }
  },
  created () {
    // set search options.
    this.$store.dispatch('initializeCondition', this.$store.getters.devices)
    // this.options = this.setOptions(this.condition)
  },
  mounted () {
    // this.options.displaySize.on = true
  },
  methods: {
    setOptions (condition) {
      let result = {}
      for (let key in this.condition) {
        result[key] = {
          label: this.$options.filters.labelize(key),
          class: '-' + this.$options.filters.hyphenize(key),
          id: this.$options.filters.camelize(key),
          action: this.updateCondition,
          on: false
        }
      }
      return result
    },
    updateCondition (key) {
      console.log('@updateCondition')
      this.$store.commit('updateCondition', this.condition[key], key)
    }
  },
  data () {
    return {
      options: {} // search Options setted by this.setOptions
    }
  }
}
