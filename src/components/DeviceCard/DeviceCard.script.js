import * as Utils from '../Utils/Utils'

export default {
  name: 'deviceCard',
  props: {
    'model': {
      type: Object,
      required: true
    }
  },
  methods: {},
  computed: {
    spec () {
      return Utils.getSpec(this.model)
    }
  },
  data () {
    return {}
  }
}
