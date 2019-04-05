import { GetSpec } from '../components/Utils/Utils'

export default {
  state: {
    model: {
      name: 'iPhone X', // name of the device.
      manufacturer: '',
      os: 'iOS',
      device: {
        width: 70.9, // device width in mm. physical screen width would calculated from diagonal inch and aspect ratio.
        height: 143.6, // device height in mm.
        radius: 8 // radius of device corner in mm.
      },
      screen: {
        diagonal: 5.8, // diagonal length in inch. all of speification in this document is defined in SI unit. but most of manufacturers are open their screen sizes only in Inch. this is the only one yard/pound unit on this document.
        density: 3,
        resamplingScale: 1,
        renderedPixels: { // display scale in rendered pixels.
          width: 1125,
          height: 2436
        },
        physicalPixels: { // physical pixels on display hardware
          width: 1125,
          height: 2436
        },
        coordinates: { // screen scale used in development.
          width: 375,
          height: 812
        },
        offsetX: 0, // screen X offset from center in mm. 0 means 'center of device = center of screen'.
        offsetY: 0, // screen Y offset from center in mm. 10 =-10 left from center.
        radius: 5, // radius of screen corner in mm.
        type: 'OLED', // display type. [LCD | OLED | e-ink | ...more]
        pentiled: true, // 'pentile' is pantented display mechanism by Samsung electronics. normal LCD displays have 3 subpixels(RGB) in 1 pixel. but 'pentile' displays have usually 2 subpixels in 1 pixel.
        pattern: 'RG-BG', // [RG-BG | RG-BW | RGB] // usually, LCDs have RGB subpixels. but OLEDs are RG-BG or RG-BW.
        aspectRatio: 0,
        alfa: 0,
        alfaAngle: 0,
        betaAngle: 0,
        physicalHeight: 0,
        physicalWidth: 0,
        diagonalMm: 0,
        diagonalInch: 0,
        pixelsPer1Mm: 0,
        pointsPer1Mm: 0,
        pixelsPer1Inch: 0,
        physicalPixelSize: 0,
        physicalPtSize: 0,
        resamplingScale: 0,
        style: {} // custom styles for screen
      },
      notch: {
        type: 'notch', // [none | notch | pinhole]
        width: 34, // width of notch in mm.
        height: 5, // height of notch in mm.
        position: 'top', // [top-left | top | top-right | bottom-left | bottom | bottom-right ]
        radius: 3.5, // radius of notch or pinhole.
        offsetX: 0, // offset from edge of screen. it depends on 'notch.position'. if position is 'top-right', 3 = 3mm from right edge of screen.
        offsetY: 0, // of position is 'bottom', 3 = 3mm from screeb bottom edge.
        style: {} // custom styles for notch
      }
    }
  },
  getters: {
    generatedModel (state, getters) {
      return state.model
    }
  },
  actions: {},
  mutations: {
    setGeneratorDevice (state, device) {
      Object.assign(device.screen, GetSpec(device.screen))
      state.model = device
    }
  }
}
