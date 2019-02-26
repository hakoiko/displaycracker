export default {
  state: {
    condition: {
      string: '',
      displaySize: {
        used: false,
        pointWidth: {
          min: 0,
          max: 0,
          from: 0,
          to: 0,
          unit: 'pt',
          children: []
        },
        pointHeight: {
          min: 0,
          max: 0,
          from: 0,
          to: 0,
          unit: 'pt',
          children: []
        },
        pixelWidth: {
          min: 0,
          max: 0,
          from: 0,
          to: 0,
          unit: 'px',
          children: []
        },
        pixelHeight: {
          min: 0,
          max: 0,
          from: 0,
          to: 0,
          unit: 'px',
          children: []
        },
        physicalWidth: {
          min: 0,
          max: 0,
          from: 0,
          to: 0,
          unit: 'mm',
          children: []
        },
        physicalHeight: {
          min: 0,
          max: 0,
          from: 0,
          to: 0,
          unit: 'mm',
          children: []
        }
      },
      density: {
        used: false,
        min: 1,
        max: 1,
        from: 1,
        to: 1,
        children: []
      },
      ppi: {
        used: false,
        min: 0,
        max: 0,
        from: 0,
        to: 0,
        children: []
      },
      platform: {
        used: false,
        ios: true,
        android: true,
        etc: true
      },
      manufacturer: {
        used: false
      },
      displayType: {
        used: false,
        OLED: true,
        LCD: true,
        etc: true
      }
    }
  },
  getters: {},
  actions: {
    // Array.sort를 이용하는 방식 : 루프 여러번, 비교 한번
    // Array.forEach를 이용하는 방식 : 루프 한번 & 비교 여러번
    // 퍼포먼스 테스트를 해봐야하나.
    /**
     * 디바이스 목록을 분석해 각 스펙별 최대/최소치, 각 스펙에 어떤 값들이 들어있는지를 파실해 저장합니다.
     * @param {Object} context Vuex Context
     * @param {Array} devices 디바이스 목록.
     */
    initializeCondition (context, devices) {
      let condition = Object.assign({}, context.state.condition)
      let options = [
        condition.displaySize.pointWidth,
        condition.displaySize.pointHeight,
        condition.displaySize.pixelWidth,
        condition.displaySize.pixelHeight,
        condition.displaySize.physicalWidth,
        condition.displaySize.physicalHeight,
        condition.density,
        condition.ppi
      ]
      devices.forEach(device => {
        condition.displaySize.pointWidth.children.push(device.screen.coordinates.width)
        condition.displaySize.pointHeight.children.push(device.screen.coordinates.height)
        condition.displaySize.pixelWidth.children.push(device.screen.resolution.width)
        condition.displaySize.pixelHeight.children.push(device.screen.resolution.height)
        condition.displaySize.physicalWidth.children.push(Number(device.screen.physicalWidth.toFixed(2)))
        condition.displaySize.physicalHeight.children.push(Number(device.screen.physicalHeight.toFixed(2)))
        condition.density.children.push(device.screen.density)
        condition.ppi.children.push(device.screen.pixelsPer1Inch)
        condition.manufacturer[device.manufacturer] = true
      })
      options.forEach(option => {
        option.children.sort((a, b) => a - b)
        option.min = option.children[0]
        option.from = option.children[0]
        option.max = option.children[option.children.length - 1]
        option.to = option.children[option.children.length - 1]
      })
      context.commit('initializeCondition', condition)
    }
  },
  mutations: {
    /**
     * 검색 조건을 이니셜라이즈 합니다.
     * @param {Object} state Vuex State
     * @param {Object} condition Search Condition
     */
    initializeCondition (state, condition) {
      state.condition = condition
    },
    /**
     * 컨디션의 특정 키를 업데이트 합니다.
     * @param {Object} state Vuex State
     * @param {Object} param1 where<String> 저장할 키. ex: 'DisplaySize'. val<Object> 저장할 값.
     */
    updateCondition (state, { where, val }) {
      state.condition[where] = val
    }
  }
}