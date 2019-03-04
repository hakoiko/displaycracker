import Search from '../../store/Search'

export default {
  /**
   * Device 명이 현재 검색 컨디션의 string에 포함된느지 여부를 리턴
   * @param {Object} device Device
   */
  filterDeviceName (device) {
    // backlog: support case sensitive search
    return device.name.toLowerCase().includes(Search.state.condition.string.value.toLowerCase())
  },
  /**
   * Platform 필터
   * @param {Object} device Device
   */
  filterDevicePlatform (device) {
    console.log('@filterDevicePlatform', Search.state.condition.platform[device.os])
    return Search.state.condition.platform[device.os]
  },
  /**
   * Manufacturer 필터
   * @param {Object} device Device
   */
  filterDeviceManufacturer (device) {
    console.log('@filterDeviceManufacturer', device.manufacturer, Search.state.condition.manufacturer[device.manufacturer])
    return Search.state.condition.manufacturer[device.manufacturer]
  },
  /**
   * PPI 필터
   * @param {Object} device Device
   */
  filterDevicePpi (device) {
    return (Number(device.screen.pixelsPer1Inch.toFixed(1)) >= Search.state.condition.ppi.value.from && Number(device.screen.pixelsPer1Inch.toFixed(1)) <= Search.state.condition.ppi.value.to)
  },
  /**
   * Density 필터
   * @param {Object} device Device
   */
  filterDeviceDensity (device) {
    return (device.screen.density >= Search.state.condition.density.value.from && device.screen.density <= Search.state.condition.density.value.to)
  },
  /**
   * Device의 ScreenSize 옵션이 검색조건의 ScreenSize에 포함되는지 여부를 리턴
   * @param {Object} device Device
   */
  filterDisplaySize (device) {
    let sizes = [
      device.screen.coordinates.width,
      device.screen.coordinates.height,
      device.screen.resolution.width,
      device.screen.resolution.height,
      Number(device.screen.physicalWidth.toFixed(2)),
      Number(device.screen.physicalHeight.toFixed(2))
    ]
    let conditions = [
      Search.state.condition.displaySize.pointWidth,
      Search.state.condition.displaySize.pointHeight,
      Search.state.condition.displaySize.pixelWidth,
      Search.state.condition.displaySize.pixelHeight,
      Search.state.condition.displaySize.physicalWidth,
      Search.state.condition.displaySize.physicalHeight
    ]
    let flag = true
    for (let i = 0; i < sizes.length; i++) {
      flag = (sizes[i] >= conditions[i].value.from && sizes[i] <= conditions[i].value.to) ? flag : false
      if (!flag) break
    }
    return flag
  }
}
