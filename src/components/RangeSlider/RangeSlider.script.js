export default {
  name: 'RangeSlider',
  props: {
    // Ranged slider인지 단일 값을 선탣하는 슬라이더인지 여부.
    ranged: {
      type: Boolean,
      default: true
    },
    // 레인지 최소 값.
    min: {
      type: Number,
      default: 0
    },
    // 레인지 최대 값.
    max: {
      type: Number,
      default: 100
    },
    // 슬라이더 이동 최소 수치
    step: {
      type: Number,
      default: 1
    },
    // 히스토그램을 표시할 것인지 여부.
    useHistogram: {
      type: Boolean,
      default: true
    },
    // 히스토그램 표시시에 표현할 데이터를 받습니다. Number의 배열이 필요합니다.
    histogramData: {
      type: Array,
      default () {
        return [5, 30, 11, 75, 30, 33, 97, 99]
      }
    },
    // 히스토그램 데이터가 이미 sorting 된 데이터인지 전달합니다. false라면 별도로 소팅 과정을 거칩니다.
    isHistogramDataSorted: {
      type: Boolean,
      default: true
    },
    // 히스토그램 표시시, 스텝을 설정합니다
    histogramStep: {
      type: Number,
      default: 10
    },
    // 히스토그램 표시시, 히스토그램의 px 높이를 설정합니다.
    histogramHeight: {
      type: Number,
      default: 100
    },
    // 레인지 슬라이더가 편집할 데이터의 이름을 받아옵니다. 값이 변경될 때 updated 이벤트 인수로 리턴합니다.
    for: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * 레인지 슬라이더의 값이 바뀔 떄 실행됩니다.
     * @param {string} handle ['from' | 'to']
     */
    inserted (handle) {
      if (handle === 'from' && this.from >= this.to) this.from = Number(this.to) - this.step
      if (handle === 'to' && this.to <= this.from) this.to = Number(this.from) + this.step
      this.$emit('inserted', this.value, this.for)
    },
    /**
     * 레인지 슬라이더의 값이 변경이 완료되면 실행됩니다.
     */
    updated () {
      this.$emit('updated', this.value, this.for)
    }
  },
  computed: {
    /**
     * from, to 값을 묶어서 반환합니다.
     */
    value () {
      return [Number(this.from), Number(this.to)]
    },
    /**
     * 히스토그램 데이터를 이용해 각 스텝별로 들어갈 아이템의 개수를 설정합니다.
     */
    histogram () {
      this.histogramDataSorted = this.isHistogramDataSorted ? this.histogramData : this.histogramData.concat().sort((a, b) => a - b)
      const steps = Math.ceil((this.max - this.min) / this.histogramStep)
      let result = []
      for (let i = 0; i < steps; i++) {
        result.push({
          from: i * this.histogramStep + this.min,
          count: 0
        })
      }
      this.histogramDataSorted.forEach(v => {
        let index = Math.floor((v - this.min) / this.histogramStep)
        if (result[index]) {
          result[index].count++
        } else {
          result[index - 1].count++
        }
      })
      return result
    },
    /**
     * Range의 최대, 최소값이 아닌, 각 Step별로 가장 아이템이 많은 Step과 가장 적은 Step을 찾아 리턴합니다.
     */
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
      histogramDataSorted: [],
      from: this.min,
      to: this.max
    }
  }
}
