<template>
  <div class="input-text">
    <span v-if="label.length" class="label">
      {{ label }}
    </span>
    <input
      type="text"
      class="input"
      ref="input"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    >
  </div>
</template>
<script>
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
      default: '',
      required: false
    }
  },
  mounted () {
    this.$refs.input.value = this.value
  },
  methods: {
    updateValue ($event) {
      this.$emit('input', $event.target.value)
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
    &:focus {
      box-shadow: $shadow-hover;
    }
  }
}
</style>
