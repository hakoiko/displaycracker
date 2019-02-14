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
    }
  },
  components: {},
  methods: {},
  data () {
    return {
      scale: 2.2
    }
  }
}
