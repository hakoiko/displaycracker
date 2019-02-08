<template>
  <header class="header-block">
    <div class="block-container">
      <div class="header-logo">
        <span class="image" />
        <span class="label">
          {{ appName }}
        </span>
      </div>
      <ul class="header-nav">
        <li
          class="nav-item"
          v-for="item in navItems"
          :key="item.name"
          :class="'-' + item.name"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderBlock',
  props: {},
  components: {},
  methods: {
    setNavItems () {
      let items = []
      this.$router.options.routes.forEach(route => {
        if (route.showOnNav) items.push(route)
      })
      return items
    }
  },
  created () {
    this.navItems = this.setNavItems()
  },
  computed: {
    appName () {
      return this.$store.state.Settings.appName
    }
  },
  data () {
    return {
      navItems: []
    }
  }
}
</script>
<style lang="scss" src="./HeaderBlock.scss" scoped />
