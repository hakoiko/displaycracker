export const iPhoneX = {
  name: 'iPhone X', // name of the device.
  diagonal: 5.8, // diagonal length in inch. all of speification in this document is defined in SI unit. but most of manufacturers are open their screen sizes only in Inch. this is the only one yard/pound unit on this document.
  render: { // rendered pixels.
    width: 1125,
    height: 2436
  },
  coordinates: { // used in development.
    width: 375,
    height: 812
  },
  density: 3, // renderedScale / coordinateScale.
  physical: { // specification for physical device
    device: {
      width: 75.7, // device width in mm. physical screen width would calculated from diagonal inch and aspect ratio.
      height: 150.9, // device height in mm.
      radius: 8 // radius of device corner in mm.
    },
    screen: {
      offsetX: 0, // screen X offset from center in mm. 0 means 'center of device = center of screen'.
      offsetY: 0, // screen Y offset from center in mm. 10 =-10 left from center.
      radius: 7, // radius of screen corner in mm.
      type: 'OLED', // display type. [LCD | OLED | e-ink | ...more]
      pentiled: true, // 'pentile' is pantented display mechanism by Samsung electronics. normal LCD displays have 3 subpixels(RGB) in 1 pixel. but 'pentile' displays have usually 2 subpixels in 1 pixel.
      pattern: 'RG-BG' // [RG-BG | RG-BW | RGB] // usually, LCDs have RGB subpixels. but OLEDs are RG-BG or RG-BW.
    },
    notch: {
      hasNotch: true,
      type: 'notch', // [none | notch | pinhole]
      width: 34, // width of notch in mm.
      height: 5, // height of notch in mm.
      position: 'top', // [topLeft | top | topRight | bottomLeft | bottom | bottomRight ]
      radius: 5, // radius of notch or pinhole.
      offsetX: 0, // offset from edge of screen. it depends on 'notch.position'. if position is 'topRight', 3 = 3mm from right edge of screen.
      offsetY: 0 // of position is 'bottom', 3 = 3mm from screeb bottom edge.
    }
  }
}
