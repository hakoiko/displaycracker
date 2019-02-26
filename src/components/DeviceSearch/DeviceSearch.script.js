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
    },
    displaySizeOptions () {
      let result = []
      for (let key in this.condition.displaySize) {
        result.push({
          label: this.$options.filters.labelize(key),
          class: '-' + this.$options.filters.hyphenize(key),
          id: this.$options.filters.camelize(key),
          for: 'displaySize.' + key,
          ranged: true,
          step: this.sliderStep[key],
          min: this.condition.displaySize[key].min,
          max: this.condition.displaySize[key].max,
          unit: this.condition.displaySize[key].unit,
          useHistogram: true,
          histogramData: this.condition.displaySize[key].children,
          histogramStep: this.histogramStep[key],
          histogramHeight: 100
        })
      }
      return result
    }
  },
  created () {
    // set search options.
    this.$store.dispatch('initializeCondition', this.$store.getters.devices)
  },
  methods: {
    /**
     * 컴포넌트의 condition의 값을 value로 업데이트 합니다
     * @param {Array} value RangeSlider로부터 받아오는 데이터
     * @param {String} where RangeSlider가 변경하는 데이터의 부모 Object
     */
    setCondition (value, where) {
      if (value.length > 1) {
        this._.get(this.condition, where).from = Number(value[0])
        this._.get(this.condition, where).to = Number(value[1])
      } else {
        this._.get(this.condition, where).value = Number(value[0])
      }
    },
    checkUsed (where) {
      return false
    },
    /**
     * 디스플레이 크기 검색 컨디션을 Vuex 로 커밋 합니다.
     * @param {Array} value RangeSlider로부터 받아오는 데이터
     * @param {String} where RangeSlider가 변경하는 데이터의 부모 Object
     */
    updateCondition (value, where) {
      this.setCondition(value, where)
      where = where.split('.')
      this.condition[where[0]].used = this.checkUsed(where[0])
      this.$store.commit('updateCondition', { where: where[0], val: this.condition[where[0]] })
    }
  },
  data () {
    return {
      sliderStep: {
        pointWidth: 1,
        pointHeight: 2,
        pixelWidth: 1,
        pixelHeight: 1,
        physicalWidth: 0.01,
        physicalHeight: 0.01
      },
      histogramStep: {
        pointWidth: 10,
        pointHeight: 20,
        pixelWidth: 60,
        pixelHeight: 120,
        physicalWidth: 2,
        physicalHeight: 5
      }
    }
  }
}
