<template>
  <div
    class="device-screen-zoomed"
    :class="'-density-' + model.screen.density"
  >
    <pixel-measure
      class="-pixel"
      :is-horizontal="false"
      legend-align="left"
      legend-vertical-align="middle"
    >
      1px<br>
      {{ model.screen.physicalPixelSize | toFixed(2) }} mm
    </pixel-measure>
    <pixel-measure
      class="-point"
      :is-horizontal="false"
      legend-aligh="right"
      legend-vertical-align="middle"
    >
      1pt<br>
      {{ model.screen.physicalPtSize | toFixed(2) }} mm
    </pixel-measure>
  </div>
</template>
<script>
import PixelMeasure from '../PixelMeasure/PixelMeasure'

export default {
  name: 'DeviceScreenZoomed',
  components: {
    'pixel-measure': PixelMeasure
  },
  props: {
    model: {
      type: Object,
      default () {
        return {
          density: 3,
          physicalPixelSize: 1,
          physicalPtSize: 3
        }
      }
    }
  }
}
</script>
<style lang="scss" src="./DeviceScreenZoomed.scss"></style>
