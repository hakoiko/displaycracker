<template>
  <div class="section-footer">
    <a
      class="icon -github -inverted"
      href="https://github.com/hakoiko/displaycracker"
    />
    Released under MIT License<br>
    Copyright © 2019 Chris Kim
  </div>
</template>
<script>
export default {
  name: 'FooterBlock',
  props: {}
}
</script>
<style lang="scss">
.section-footer {
  > .icon {
    display: block;
    margin: 0 auto 15px auto;
    width: 33px;
    height: 33px;
  }
  text-align: center;
  padding: $padding * 2;
  margin-top: $padding * 4;
  color: $c-text-inverted;
  font-size: 12px;
  line-height: 24px;
  background-color: $c-text;
}
</style>
