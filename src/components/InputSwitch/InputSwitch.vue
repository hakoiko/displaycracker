<template>
  <div class="input-switch">
    <span
      v-if="label.length"
      class="label"
    >
      {{ label }}
    </span>
    <ul
      class="switch-list"
      ref="switch"
    >
      <li
        class="indicator"
        :style="indicatorStyle"
      />
      <li
        v-for="option in options"
        class="list-item"
        :ref="option.value"
        :key="option.value"
        :class="[
          '-' + option.value,
          {'-on': value === option.value }
        ]"
        @click="updateValue($event, option.value)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'InputSwitch',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default () {
        return [
          { label: 'O', value: true },
          { label: 'X', value: false }
        ]
      }
    }
  },
  methods: {
    updateValue ($event, value) {
      // console.dir(this.$refs[value][0])
      this.$emit('input', value)
    },
    isTrue (val) {
      return (val === true)
    }
  },
  computed: {
    indicatorStyle () {
      this.isTrue(this.mounted) // computed에서 해당 값의 변화를 watch하기 위해 dummy function을 실행.
      if (this.$refs[this.value] && this.mounted) {
        let selected = this.$refs[this.value][0]
        return {
          width: selected.clientWidth + 'px',
          left: selected.offsetLeft + 'px',
          opacity: 1
        }
      }
      return {}
    }
  },
  mounted () {
    this.mounted = true
  },
  data () {
    return {
      mounted: false
    }
  }
}
</script>
<style lang="scss">
.input-switch {
  position: relative;
  > .label {
    font: 700 12px 'OpenSans';
    padding: 5px 15px;
    display: block;
  }
  .switch-list {
    background: #fff;
    box-shadow: $shadow;
    border-radius: 40px;
    display: inline-block;
    position: relative;
    > .indicator {
      width: 0;
      height: 100%;
      opacity: 0;
      top: 0;
      left: auto;
      position: absolute;
      background-color: $c-point;
      border-radius: 40px;
      transition: .2s ease-out all;
    }
    > .list-item {
      position: relative;
      display: inline-block;
      padding: 10px 15px;
      z-index: 2;
      transition: .2s ease-out color, font-weight;
      cursor: pointer;
      &.-on {
        color: $c-text-inverted;
      }
    }
  }
}
</style>
