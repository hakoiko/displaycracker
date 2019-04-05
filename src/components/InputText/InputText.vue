<template>
  <div class="input-text">
    <span
      v-if="label.length"
      class="label"
    >
      {{ label }}
    </span>
    <span
      v-if="unit.length"
      class="unit"
    >
      {{ unit }}
    </span>
    <input
      :type="type"
      class="input"
      ref="input"
      :value="value"
      :placeholder="placeholder"
      :style="{ 'padding-right': unit.length ? '40px' : '15px' }"
      :disabled="disabled"
      @input="updateValue"
      @focus="focus"
      @blur="blur"
      @change="change"
      @valid="valid"
      @submit="submit"
    >
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'InputText',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    type () {
      return _.isNumber(this.value) ? 'number' : 'text'
    }
  },
  mounted () {
    this.$refs.input.value = this.value
  },
  methods: {
    updateValue ($event) {
      let val = (this.type === 'number') ? $event.target.valueAsNumber : $event.target.value
      this.$emit('input', val)
    },
    focus ($event) {
      this.$emit('focus', $event)
    },
    blur ($event) {
      this.$emit('blur', $event)
    },
    change ($event) {
      this.$emit('change', $event)
    },
    valid ($event) {
      this.$emit('valid', $event)
    },
    submit ($event) {
      this.$emit('submit', $event)
    }
  }
}
</script>
<style lang="scss">
.input-text {
  position: relative;
  > .label {
    font: 700 12px 'OpenSans';
    padding: 5px 15px;
    display: block;
  }
  > .unit {
    font: 400 12px 'OpenSans';
    position: absolute;
    bottom: 0;
    right: 15px;
    line-height: 38px;
  }
  > .input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 10px 15px;
    border-radius: 32px;
    border: none;
    outline: none;
    box-shadow: $shadow;
    transition: .2s ease-out box-shadow;
    font-size: 16px;
    &:disabled {
      background: $c-bg-sub-disabled;
      color: $c-text-disabled
    }
    &:focus {
      box-shadow: $shadow-hover;
    }
  }
}
</style>
