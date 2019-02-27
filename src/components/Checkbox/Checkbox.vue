<template>
  <label class="check-box">
    <input
      type="checkbox"
      ref="checkbox"
      class="checker"
      :checked="checked"
      @change="updateValue"
    >
    <span
      class="label"
    >
      <slot />
    </span>
  </label>
</template>
<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    checked: {
      type: Boolean,
      value: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs.checkbox.checked = this.checked
  },
  methods: {
    updateValue ($event) {
      this.$emit('input', $event.target.checked)
    }
  }
}
</script>
<style lang="scss">
.check-box {
  $size: 24px;
  position: relative;
  line-height: $size;
  height: $size;
  display: inline-block;
  .checker {
    width: $size;
    height: $size;
    vertical-align: top;
    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      position: absolute;
      width: $size;
      height: $size;
      background: $c-bg-sub;
      border: 1px solid $c-line;
      border-radius: $radius / 4;
      pointer-events: none;
      background-color: lighten($c-line, 15%);
      border-color: $c-line;
    }
    &:checked:after {
      background: $c-point center / 22px 22px no-repeat url('../../assets/icon-check-white.svg');
      border-color: darken($c-point, 10%);
    }
  }
  .label {
    margin-left: 10px;
    display: inline-block;
    vertical-align: top;
  }
}
</style>
