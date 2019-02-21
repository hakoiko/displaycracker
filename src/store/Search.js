export default {
  state: {
    condition: {
      string: '',
      displaySize: {
        pointWidth: {
          min: 0,
          max: 0,
          children: []
        },
        pointHeight: {
          min: 0,
          max: 0,
          children: []
        },
        pixelWidth: {
          min: 0,
          max: 0,
          children: []
        },
        pixelHeight: {
          min: 0,
          max: 0,
          children: []
        },
        physicalWidth: {
          min: 0,
          max: 0,
          children: []
        },
        physicalHeight: {
          min: 0,
          max: 0,
          children: []
        }
      },
      density: {
        min: 1,
        max: 1,
        children: []
      },
      ppi: {
        min: 0,
        max: 0,
        children: []
      },
      platform: {
        ios: true,
        android: true,
        etc: true
      },
      manufacturer: {},
      displayType: {
        OLED: true,
        LCD: true,
        etc: true
      }
    }
  },
  getters: {
    searchCondition (state) {
      return state.condition
    }
  },
  actions: {
    // Array.sort를 이용하는 방식 : 루프 여러번, 비교 한번
    // Array.forEach를 이용하는 방식 : 루프 한번 & 비교 여러번
    // 퍼포먼스 테스트를 해봐야하나.
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
        condition.displaySize.physicalWidth.children.push(device.screen.physicalWidth)
        condition.displaySize.physicalHeight.children.push(device.screen.physicalHeight)
        condition.density.children.push(device.screen.density)
        condition.ppi.children.push(device.screen.pixelsPer1Inch)
        condition.manufacturer[device.manufacturer] = true
      })
      options.forEach(option => {
        option.children.sort((a, b) => a - b)
        option.min = option.children[0]
        option.max = option.children[option.children.length - 1]
      })
      context.commit('initializeCondition', condition)
    }
  },
  mutations: {
    initializeCondition (state, condition) {
      state.condition = condition
    },
    updateCondition (state, condition, key) {
      state.condition[key] = condition
    }
  }
}
