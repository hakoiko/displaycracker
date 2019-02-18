export const iPhoneXR = {
  name: 'iPhone XR', // name of the device.
  manufacturer: 'Apple',
  os: 'ios',
  device: {
    width: 75.7, // device width in mm. physical screen width would calculated from diagonal inch and aspect ratio.
    height: 150.9, // device height in mm.
    radius: 8, // radius of device corner in mm.
    style: {// add custom styles for device
      'box-shadow': '0 0.2em 0.5em 0 rgba(255, 255, 255, .15) inset, 0 -0.2em 0.5em 0 rgba(0, 0, 0, .3) inset'
    }
  },
  screen: {
    diagonal: 6.1, // diagonal length in inch. all of speification in this document is defined in SI unit. but most of manufacturers are open their screen sizes only in Inch. this is the only one yard/pound unit on this document.
    resolution: { // display scale in rendered pixels.
      width: 828,
      height: 1792
    },
    coordinates: { // screen scale used in development.
      width: 414,
      height: 896
    },
    density: 2, // renderedScale / coordinateScale.
    offsetX: 0, // screen X offset from center in mm. 0 means 'center of device = center of screen'.
    offsetY: 0, // screen Y offset from center in mm. 10 =-10 left from center.
    radius: 5, // radius of screen corner in mm.
    type: 'IPS LCD', // display type. [IPS LCD | OLED | e-ink | ...more]
    pentiled: false, // 'pentile' is pantented display mechanism by Samsung electronics. normal LCD displays have 3 subpixels(RGB) in 1 pixel. but 'pentile' displays have usually 2 subpixels in 1 pixel.
    pattern: 'RGB', // [RG-BG | RG-BW | RGB] // usually, LCDs have RGB subpixels. but OLEDs are RG-BG or RG-BW.
    style: {} // custom styles for screen
  },
  notch: {
    hasNotch: true,
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
