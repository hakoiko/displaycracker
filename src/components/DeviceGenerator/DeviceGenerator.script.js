import DeviceRenderer from '../DeviceRenderer/DeviceRenderer'
import InputText from '../InputText/InputText'
import InputSwitch from '../InputSwitch/InputSwitch'
import { mapGetters } from 'vuex'

export default {
  name: 'DeviceGenerator',
  components: {
    'device-renderer': DeviceRenderer,
    'input-text': InputText,
    'input-switch': InputSwitch
  },
  mounted () {
    this.$store.commit('setGeneratorDevice', this.generatedModel)
  },
  methods: {
    updateModel () {
      this.$store.commit('setGeneratorDevice', this.generatedModel)
    }
  },
  computed: {
    aspectRatioValidated () {
      const aspectRatioViewport = this.generatedModel.screen.coordinates.width / this.generatedModel.screen.coordinates.height
      const aspectRatioRender = this.generatedModel.screen.renderedPixels.width / this.generatedModel.screen.renderedPixels.height
      const aspectRatioPhysical = this.generatedModel.screen.physicalPixels.width / this.generatedModel.screen.physicalPixels.height
      return ((aspectRatioViewport === aspectRatioRender) && (aspectRatioViewport === aspectRatioPhysical))
    },
    ...mapGetters(['generatedModel'])
  },
  data () {
    return {
      testVal: 'ASDF',
      osOptions: [
        { label: 'iOS', value: 'iOS' },
        { label: 'Android', value: 'Android' },
        { label: 'etc.', value: 'etc' }
      ],
      focused: ''
    }
  }
}
