<template>
  <div class="universe">
    <header-block />
    <section class="section-content">
      <router-view />
    </section>
  </div>
</template>
<script>
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock'

export default {
  name: 'MainView',
  components: {
    'header-block': HeaderBlock
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss"></style>
