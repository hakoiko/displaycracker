export const iPhone3GS = {
  name: 'iPhone 3GS', // name of the device.
  manufacturer: 'Apple',
  os: 'ios',
  device: {
    width: 62.1, // device width in mm. physical screen width would calculated from diagonal inch and aspect ratio.
    height: 115.5, // device height in mm.
    radius: 8, // radius of device corner in mm.
    style: {} // add custom styles for device
  },
  screen: {
    diagonal: 3.5, // diagonal length in inch. all of speification in this document is defined in SI unit. but most of manufacturers are open their screen sizes only in Inch. this is the only one yard/pound unit on this document.
    resolution: { // display scale in rendered pixels.
      width: 320,
      height: 480
    },
    coordinates: { // screen scale used in development.
      width: 320,
      height: 480
    },
    density: 1, // renderedScale / coordinateScale.
    offsetX: 0, // screen X offset from center in mm. 0 means 'center of device = center of screen'.
    offsetY: 0, // screen Y offset from center in mm. 10 =-10 left from center.
    radius: 0, // radius of screen corner in mm.
    type: 'LCD', // display type. [LCD | OLED | e-ink | ...more]
    pentiled: false, // 'pentile' is pantented display mechanism by Samsung electronics. normal LCD displays have 3 subpixels(RGB) in 1 pixel. but 'pentile' displays have usually 2 subpixels in 1 pixel.
    pattern: 'RGB', // [RG-BG | RG-BW | RGB] // usually, LCDs have RGB subpixels. but OLEDs are RG-BG or RG-BW.
    style: {} // custom styles for screen
  },
  notch: {
    hasNotch: false,
    type: 'none', // [none | notch | pinhole]
    width: 0, // width of notch in mm.
    height: 0, // height of notch in mm.
    position: 'top', // [top-left | top | top-right | bottom-left | bottom | bottom-right ]
    radius: 0, // radius of notch or pinhole.
    offsetX: 0, // offset from edge of screen. it depends on 'notch.position'. if position is 'top-right', 3 = 3mm from right edge of screen.
    offsetY: 0, // of position is 'bottom', 3 = 3mm from screeb bottom edge.
    style: {} // custom styles for notch
  }
}
