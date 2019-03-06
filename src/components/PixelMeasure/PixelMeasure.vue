<template>
  <div
    class="pixel-measure"
    :class="[
      '-' + this.angle,
      '-legend-' + this.legendAlign,
      '-legend-vertical-' + this.legendVerticalAlign
    ]"
  >
    <div class="measure-bar" />
    <span class="measure-result">
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  name: 'PixelMeasure',
  props: {
    // 측정자의 가로/세로 여부.
    isHorizontal: {
      type: Boolean,
      default: true
    },
    // 범례의 가로 위치
    legendAlign: {
      type: String,
      default: 'right'
    },
    // 범례의 세로 위치
    legendVerticalAlign: {
      type: String,
      default: 'middle'
    }
  },
  computed: {
    angle () {
      return (this.isHorizontal) ? 'horizontal' : 'vertical'
    }
  }
}
</script>
<style lang="scss" src="./PixelMeasure.scss"></style>
