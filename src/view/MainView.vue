<template>
  <div class="universe">
    <header-block />
    <section class="section-content">
      <router-view />
    </section>
    <footer-block />
  </div>
</template>
<script>
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock'
import FooterBlock from '@/components/FooterBlock/FooterBlock'

export default {
  name: 'MainView',
  components: {
    'header-block': HeaderBlock,
    'footer-block': FooterBlock
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss"></style>
