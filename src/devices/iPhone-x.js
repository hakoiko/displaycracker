export const iPhoneX = {
  name: 'iPhone X', // name of the device.
  manufacturer: 'Apple',
  os: 'iOS',
  device: {
    width: 70.9, // device width in mm. physical screen width would calculated from diagonal inch and aspect ratio.
    height: 143.6, // device height in mm.
    radius: 8, // radius of device corner in mm.
    style: {// add custom styles for device
      'box-shadow': '0 0.2em 0.5em 0 rgba(255, 255, 255, .15) inset, 0 -0.2em 0.5em 0 rgba(0, 0, 0, .3) inset'
    }
  },
  screen: {
    diagonal: 5.8, // diagonal length in inch. all of speification in this document is defined in SI unit. but most of manufacturers are open their screen sizes only in Inch. this is the only one yard/pound unit on this document.
    resolution: { // display scale in rendered pixels.
      width: 1125,
      height: 2436
    },
    coordinates: { // screen scale used in development.
      width: 375,
      height: 812
    },
    density: 3, // renderedScale / coordinateScale.
    offsetX: 0, // screen X offset from center in mm. 0 means 'center of device = center of screen'.
    offsetY: 0, // screen Y offset from center in mm. 10 =-10 left from center.
    radius: 5, // radius of screen corner in mm.
    type: 'OLED', // display type. [LCD | OLED | e-ink | ...more]
    pentiled: true, // 'pentile' is pantented display mechanism by Samsung electronics. normal LCD displays have 3 subpixels(RGB) in 1 pixel. but 'pentile' displays have usually 2 subpixels in 1 pixel.
    pattern: 'RG-BG', // [RG-BG | RG-BW | RGB] // usually, LCDs have RGB subpixels. but OLEDs are RG-BG or RG-BW.
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
