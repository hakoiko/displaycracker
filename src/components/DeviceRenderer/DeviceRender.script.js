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
        width: this.model.screen.physicalWidth * this.scale + 'px',
        height: this.model.screen.physicalHeight * this.scale + 'px',
        'border-radius': this.model.screen.radius * this.scale + 'px'
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
        transform: [
          'translateX(' + notchSpec.offsetX * (pos[1] === 'right' ? -1 : 1) * this.scale + 'px)',
          'translateY(' + notchSpec.offsetY * (pos[0] === 'top' ? 1 : -1) * this.scale + 'px)'
        ].join(' '),
        'border-radius': radius + 'px'
      }
      Object.assign(style, this.notchPos(pos))
      if (this.model.notch.type === 'notch') {
        style['border-radius'] = this.notchRadius(pos, radius)
        style['border-width'] = this.notchBorderWidth(pos)
      }
      if (notchSpec.style) return Object.assign(style, notchSpec.style)
      return style
    },
    contentGrid () {
      let items = []
      let gridWidth = 100 // points
      let count = Math.ceil(this.model.screen.coordinates.width / gridWidth)
      for (let i = 1; i <= count; i++) {
        items.push({
          id: i,
          width: gridWidth,
          coordinate: i * gridWidth,
          style: {
            width: this.model.screen.physicalPtSize * gridWidth * this.scale + 'px'
          }
        })
      }
      return {
        count: count,
        items: items
      }
    },
    contentStyle () {
      const notchPos = this.model.notch.position.split('-')
      let scale = this.model.screen.physicalWidth * this.scale / this.model.screen.coordinates.width
      return {
        width: this.model.screen.coordinates.width + 'px',
        height: this.model.screen.coordinates.height + 'px',
        'margin-top': notchPos[0] === 'top' ? (this.model.notch.height + this.model.notch.offsetY) * this.scale + 'px' : 0,
        transform: 'scale(' + scale + ')'
      }
    }
  },
  components: {},
  methods: {
    notchPos (pos) {
      return {
        top: pos[0] === 'top' ? 0 : 'auto',
        right: pos[1] === undefined ? 0 : (pos[1] === 'right' ? 0 : 'auto'),
        bottom: pos[0] === 'bottom' ? 0 : 'auto',
        left: pos[1] === undefined ? 0 : (pos[1] === 'left' ? 0 : 'auto')
      }
    },
    notchRadius (pos, radius) {
      return [
        pos[0] === 'top' ? 0 : (pos[1] === 'left' ? 0 : radius + 'px'),
        pos[0] === 'top' ? 0 : (pos[1] === 'right' ? 0 : radius + 'px'),
        pos[0] === 'bottom' ? 0 : (pos[1] === 'right' ? 0 : radius + 'px'),
        pos[0] === 'bottom' ? 0 : (pos[1] === 'left' ? 0 : radius + 'px')
      ].join(' ')
    },
    notchBorderWidth (pos) {
      return [
        pos[0] === 'top' ? 0 : '1px',
        pos[1] === 'right' ? 0 : '1px',
        pos[0] === 'bottom' ? 0 : '1px',
        pos[0] === 'left' ? 0 : '1px'
      ].join(' ')
    }
  },
  data () {
    return {
      scale: 2.55,
      showGrid: false,
      paragraphTitle: 'Lorem Ipsum',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Dictumst quisque sagittis purus sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Consequat semper viverra nam libero justo laoreet sit amet. Dui faucibus in ornare quam. Egestas egestas fringilla phasellus faucibus scelerisque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Mus mauris vitae ultricies leo. A pellentesque sit amet porttitor eget dolor morbi non arcu. In hac habitasse platea dictumst. Quis risus sed vulputate odio ut enim blandit. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ut placerat orci nulla pellentesque dignissim. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Tempus urna et pharetra pharetra massa massa. Eu ultrices vitae auctor eu augue ut lectus arcu. Eu ultrices vitae auctor eu augue ut.'
    }
  }
}
