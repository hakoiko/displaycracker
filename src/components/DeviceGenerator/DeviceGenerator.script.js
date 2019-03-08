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
  methods: {
    updateModel () {
      this.$store.commit('setGeneratorDevice', this.generatedModel)
    }
  },
  computed: {
    ...mapGetters(['generatedModel'])
  },
  data () {
    return {
      testVal: 'ASDF',
      osOptions: [
        { label: 'iOS', value: 'iOS' },
        { label: 'Android', value: 'Android' },
        { label: 'etc.', value: 'etc' }
      ]
    }
  }
}
