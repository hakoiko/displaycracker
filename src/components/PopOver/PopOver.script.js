export default {
  name: 'PopOver',
  props: {
    position: {
      type: String,
      default: 'top'
    }
  },
  methods: {
    clickOutside () {
      this.on = false
    }
  },
  computed: {
    style () {
      const pos = this.position.split('-')
      const margin = '20px'
      return {
        'margin-top': pos[0] === 'bottom' ? margin : 0,
        'margin-right': pos[0] === 'left' ? margin : 0,
        'margin-bottom': pos[0] === 'top' ? margin : 0,
        'margin-left': pos[0] === 'right' ? margin : 0
      }
    }
  },
  data () {
    return {
      on: false
    }
  }
}
