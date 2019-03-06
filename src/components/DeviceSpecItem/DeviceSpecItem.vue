<template>
  <div class="spec-item">
    <div class="label">
      {{ label }}
    </div>
    <!-- /.label -->
    <div class="spec">
      <slot />
    </div>
    <!-- /.spec -->
  </div>
  <!-- /.spec-item -->
</template>
<script>
export default {
  name: 'DeviceSpecItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.spec-item {
  > .spec {
    font: 600 20px 'OpenSans';
  }
  > .label {
    font: 600 14px 'OpenSans';
    opacity: .6;
    margin-bottom: 3px;
  }
}
</style>
