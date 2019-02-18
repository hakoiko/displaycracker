export default {
  name: 'DeviceRender',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed: {
    deviceBodyStyle () {
      const style = {
        width: this.model.device.width * this.scale + 'px',
        height: this.model.device.height * this.scale + 'px',
        background: this.$store.getters.deviceColor,
        'border-radius': this.model.device.radius * this.scale + 'px'
      }
      if (this.model.device.style) return Object.assign(style, this.model.device.style)
      return style
    },
    deviceScreenStyle () {
      const style = {
        width: this.model.screenSpec.physicalWidth * this.scale + 'px',
        height: this.model.screenSpec.physicalHeight * this.scale + 'px',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, .1), rgba(255, 255, 255, .05))',
        'border-radius': this.model.screen.radius * this.scale + 'px',
        transform: [].join(' ')
      }
      if (this.model.screen.style) return Object.assign(style, this.model.screen.style)
      return style
    },
    deviceNotchStyle () {
      const notchSpec = this.model.notch
      const pos = notchSpec.position.split('-')
      const radius = notchSpec.radius * this.scale
      const style = {
        width: notchSpec.width * this.scale + 'px',
        height: notchSpec.height * this.scale + 'px',
        background: this.$store.getters.deviceColor,
        top: pos[0] === 'top' ? 0 : 'auto',
        right: pos[1] === undefined ? 0 : (pos[1] === 'right' ? 0 : 'auto'),
        bottom: pos[0] === 'bottom' ? 0 : 'auto',
        left: pos[1] === undefined ? 0 : (pos[1] === 'left' ? 0 : 'auto'),
        'border-radius': notchSpec.type === 'pinhole' ? radius + 'px' : [
          pos[0] === 'top' ? 0 : (pos[1] === 'left' ? 0 : radius + 'px'),
          pos[0] === 'top' ? 0 : (pos[1] === 'right' ? 0 : radius + 'px'),
          pos[0] === 'bottom' ? 0 : (pos[1] === 'right' ? 0 : radius + 'px'),
          pos[0] === 'bottom' ? 0 : (pos[1] === 'left' ? 0 : radius + 'px')
        ].join(' '),
        transform: [
          'translateX(' + notchSpec.offsetX * (pos[1] === 'right' ? -1 : 1) * this.scale + 'px)',
          'translateY(' + notchSpec.offsetY * (pos[0] === 'top' ? 1 : -1) * this.scale + 'px)'
        ].join(' ')
      }
      if (notchSpec.style) return Object.assign(style, notchSpec.style)
      return style
    },
    contentGrid () {
      let items = []
      let gridWidth = 100 // points
      let count = Math.ceil(this.model.screenSpec.coordinates.width / gridWidth)
      for (let i = 1; i <= count; i++) {
        items.push({
          id: i,
          width: gridWidth,
          coordinate: i * gridWidth,
          style: {
            width: this.model.screenSpec.physicalPtSize * gridWidth * this.scale + 'px'
          }
        })
      }
      return {
        count: count,
        items: items
      }
    },
    paragraphStyle () {
      const notchPos = this.model.notch.position.split('-')
      let scale = this.model.screenSpec.physicalWidth * this.scale / this.model.screenSpec.coordinates.width
      return {
        paragraph: {
          width: this.model.screenSpec.coordinates.width + 'px',
          height: this.model.screenSpec.coordinates.height + 'px',
          'margin-top': notchPos[0] === 'top' ? (this.model.notch.height + this.model.notch.offsetY) * this.scale + 5 + 'px' : 0,
          transform: 'scale(' + scale + ')'
        }
      }
    }
  },
  components: {},
  methods: {},
  data () {
    return {
      scale: 2.1,
      showGrid: false,
      paragraphTitle: 'Lorem ipsum',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
