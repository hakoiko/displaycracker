import RangeSlider from '../RangeSlider/RangeSlider'
import Checkbox from '../Checkbox/Checkbox'
import PopOver from '../PopOver/PopOver'

export default {
  name: 'DeviceSearch',
  components: {
    'range-slider': RangeSlider,
    'pop-over': PopOver,
    'checkbox': Checkbox
  },
  computed: {
    condition () {
      return this.$store.state.Search.condition
    },
    displaySizeOptions () {
      let result = []
      for (let key in this.condition.displaySize) {
        if (key === 'pure') break
        result.push({
          label: this.$options.filters.labelize(key),
          class: '-' + this.$options.filters.hyphenize(key),
          id: this.$options.filters.camelize(key),
          for: 'displaySize.' + key,
          ranged: true,
          value: this.condition.displaySize[key].value,
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
     * 해당 컨디션의 min, max가 from, to와 같은지를 판별합니다.
     * @param {Objec} condition Search Condition
     */
    checkPure (condition) {
      if (condition.from) {
        return (condition.min === condition.value.from && condition.max === condition.value.to)
      } else {
        let flag = true
        for (let key in condition) {
          flag = (key !== 'pure' && condition[key].min === condition[key].value.from && condition[key].max === condition[key].value.to)
          if (!flag) break
        }
        return flag
      }
    },
    /**
     * 컴포넌트의 condition의 값을 value로 업데이트 합니다
     * @param {Array, String} value RangeSlider로부터 받아오는 데이터
     * @param {String} where RangeSlider가 변경하는 데이터의 부모 Object
     */
    setCondition (value, where) {
      if (Array.isArray(value) && value.length > 1) {
        this._.get(this.condition, where).from = Number(value[0])
        this._.get(this.condition, where).to = Number(value[1])
      } else {
        if (where === 'string') this.condition[where] = value
      }
    },
    /**
     * 디스플레이 크기 검색 컨디션을 Vuex 로 커밋 합니다.
     * @param {Array} value RangeSlider로부터 받아오는 데이터
     * @param {String} where RangeSlider가 변경하는 데이터의 부모 Object
     */
    updateCondition (value, where) {
      this.setCondition(value, where)
      where = where.split('.')
      if (this.condition[where[0]].pure !== undefined) this.condition[where[0]].pure = this.checkPure(this.condition[where[0]])
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
        pointWidth: 5,
        pointHeight: 20,
        pixelWidth: 60,
        pixelHeight: 120,
        physicalWidth: 1,
        physicalHeight: 3
      }
    }
  }
}
