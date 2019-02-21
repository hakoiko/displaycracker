export default {
  name: 'RangeSlider',
  props: {
    ranged: {
      type: Boolean,
      default: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    useHistogram: {
      type: Boolean,
      default: true
    },
    histogramData: {
      type: Array,
      default () {
        return [5, 30, 11, 75, 30, 33, 97, 99]
      }
    },
    isHistogramDataSorted: { // histogramData가 sort 된 상태로 전달받은것인가? false면 따로 sort함.
      type: Boolean,
      default: true
    },
    histogramStep: {
      type: Number,
      default: 10
    },
    histogramHeight: {
      type: Number,
      default: 100
    }
  },
  methods: {
    updated () {
      this.$emit('updated', this.value)
    }
  },
  computed: {
    from: {
      get () {
        return this.value[0]
      },
      set (val) {
        this.value[0] = Number(val)
      }
    },
    to: {
      get () {
        return this.value[1]
      },
      set (val) {
        this.value[1] = Number(val)
      }
    },
    localMin () {
      return (this.histogramDataSorted.length) ? this.histogramDataSorted[0].value : this.this.min
    },
    localMax () {
      return (this.histogramDataSorted.length) ? this.histogramDataSorted[this.histogramDataSorted.length - 1].value : this.this.min
    },
    histogram () {
      this.histogramDataSorted = this.isHistogramDataSorted ? this.histogramData : this.histogramData.concat().sort((a, b) => a - b)
      const steps = Math.ceil((this.max - this.min) / this.histogramStep)
      let result = []
      for (let i = 0; i < steps; i++) {
        result.push({
          value: i * this.histogramStep,
          count: 0
        })
      }
      this.histogramDataSorted.forEach(v => {
        result[Math.floor((v - this.min) / this.histogramStep)].count++
      })
      return result
    },
    counted () {
      const sorted = this.histogram.concat().sort((a, b) => a.count - b.count)
      return {
        min: sorted[0].count,
        max: sorted[sorted.length - 1].count
      }
    }
  },
  data () {
    return {
      value: [this.min, this.max],
      histogramDataSorted: []
    }
  }
}
