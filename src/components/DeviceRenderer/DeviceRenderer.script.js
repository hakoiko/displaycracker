import PixelMeasure from '../PixelMeasure/PixelMeasure'

export default {
  name: 'DeviceRenderer',
  components: {
    'pixel-measure': PixelMeasure
  },
  props: {
    // 렌더링항 디바이스 정보를 받습니다. store/Devices.js 참조.
    model: {
      type: Object,
      required: true
    },
    deviceAlign: {
      type: String,
      default: 'center'
    },
    // 렌더링 된 화면에서의 overflow 옵션을 설정합니다. [true: auto | flase: hidden]
    scrollable: {
      type: Boolean,
      default: false
    },
    // 1mm = 1px. 화면에디바이스를 실제로 그릴 때 사용합니다.
    scale: {
      type: Number,
      default: 2.55
    },
    // 측정 수치를 화면에 표시합니다.
    showMeasure: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
     * Device의 주 Body 스타일 을 설정합니다.
     *
     * @returns CSS Object
     */
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
    /**
     * Device의 스크린 스타일을 설정합니다.
     *
     * @returns CSS Object
     */
    deviceScreenStyle () {
      const style = {
        width: this.model.screen.physicalWidth * this.scale + 'px',
        height: this.model.screen.physicalHeight * this.scale + 'px',
        'border-radius': this.model.screen.radius * this.scale + 'px',
      }
      if (this.model.screen.style) return Object.assign(style, this.model.screen.style)
      return style
    },
    /**
     * Device에 표시될 컨텐츠 부분의 기본 스타일을 리턴합니다.
     *
     * @returns CSS Object
     */
    deviceContentStyle () {
      return {
        overflow: this.scrollable ? 'auto' : 'hidden'
      }
    },
    /**
     * Device의 Notch 스타일을 설정합니다.
     *
     * @returns CSS Object
     */
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
    /**
     * 화면상에 100px 단위 그리드를 생성합니다.
     *
     * @returns Object
     */
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
    /**
     * 디바이스의 화면상에 표시될 객체의 스타일을 설정합니다.
     *
     * @returns CSS Object
     */
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
  methods: {
    /**
     * Notch의 위치에 따라 적용할 Style을 반환합니다.
     *
     * @param {Array} pos ['top', 'left'] 등으로 구성된 notch position 정보. store/Devices.js 참조.
     * @returns CSS Object
     */
    notchPos (pos) {
      return {
        top: pos[0] === 'top' ? 0 : 'auto',
        right: pos[1] === undefined ? 0 : (pos[1] === 'right' ? 0 : 'auto'),
        bottom: pos[0] === 'bottom' ? 0 : 'auto',
        left: pos[1] === undefined ? 0 : (pos[1] === 'left' ? 0 : 'auto')
      }
    },
    /**
     * Notch의 위치에 따라 네귀퉁이의 radius가 적용/비정용 될 수 있습니다.
     * notch type이 pinhole일 경우 이 메소드는 실행되지 않습니다.
     *
     * @param {Array} pos ['top', 'left'] 등의 노치 위치 정보
     * @param {Number} radius border-radius에 적용될 radius 값.
     * @returns String '10px 10px 0 0' 등의 스트링을 리턴하데 됩니다.
     */
    notchRadius (pos, radius) {
      return [
        pos[0] === 'top' ? 0 : (pos[1] === 'left' ? 0 : radius + 'px'),
        pos[0] === 'top' ? 0 : (pos[1] === 'right' ? 0 : radius + 'px'),
        pos[0] === 'bottom' ? 0 : (pos[1] === 'right' ? 0 : radius + 'px'),
        pos[0] === 'bottom' ? 0 : (pos[1] === 'left' ? 0 : radius + 'px')
      ].join(' ')
    },
    /**
     * 노치의 위치에 따라 노치의 border 설정이 다르게 적용되어야 합니다.
     * notchBorderWidth 메소드는 사방의 border width를 설정합니다.
     *
     * @param {Array} pos ['top', 'left'] 등의 notch potision 정보
     * @returns '0 1px 1px 1px' 등의 border-width 에 적용될 css sctring
     */
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
      // 화면상에 100px 단위 grid를 표시할지 여부.
      showGrid: false,
      // 기본적으로 표시할 content의 제목
      paragraphTitle: 'Lorem Ipsum',
      // 기본적으로 표시할 content 본문
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Dictumst quisque sagittis purus sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Consequat semper viverra nam libero justo laoreet sit amet. Dui faucibus in ornare quam. Egestas egestas fringilla phasellus faucibus scelerisque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Mus mauris vitae ultricies leo. A pellentesque sit amet porttitor eget dolor morbi non arcu. In hac habitasse platea dictumst. Quis risus sed vulputate odio ut enim blandit. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ut placerat orci nulla pellentesque dignissim. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Tempus urna et pharetra pharetra massa massa. Eu ultrices vitae auctor eu augue ut lectus arcu. Eu ultrices vitae auctor eu augue ut.'
    }
  }
}
