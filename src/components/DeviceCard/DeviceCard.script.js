import * as Utils from '@/components/Utils/Utils'

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
