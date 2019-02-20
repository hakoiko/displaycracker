export default {
  state: {
    condition: {
      string: '',
      displaySize: {
        pointWidthMin: 0,
        pointWidthMax: 760,
        pointHeightMin: 0,
        pointHeightMax: 760,
        renderedPixelWidthMin: 0,
        renderedPixelWidthMax: 1280,
        renderedPixelHeightMin: 0,
        renderedPixelHeightMax: 1280,
        physicalWidthMin: 0,
        physicalWidthMax: 100,
        physicalHeightMin: 0,
        physicalHeightMax: 100
      },
      density: {
        min: 1,
        max: 5
      },
      dpi: {
        min: 0,
        max: 1000
      },
      platform: {
        ios: true,
        android: true,
        etc: true
      },
      manufacturer: {
        Apple: true,
        Samsung: true,
        LG: true
      },
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
    initializeCondition (context) {
      console.log('@Store.Search.actions.context:', context)
      // context.commit('setDeviceColor', '#555')
    }
  },
  mutations: {
    updateCondition (state, condition, key) {
      state.condition[key] = condition
    }
  }
}
