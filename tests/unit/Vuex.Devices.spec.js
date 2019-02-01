import Devices from '@/store/Devices'
import * as DeviceSpecifications from '@/devices'

describe('Vuex.Devices', () => {
  it('all device spec loaded successfully', () => {
    const deviceCount = Object.keys(DeviceSpecifications).length
    expect(Object.keys(Devices.state.devices).length).toBe(deviceCount)
  })
})

// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

/* describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
}) */
