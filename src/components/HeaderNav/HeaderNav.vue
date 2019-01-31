<template>
  <header class="header-nav">
    <div class="header-logo">
      <span class="logo-img" />
      <span class="logo-label">{{ appName }}</span>
    </div>
    <ul class="header-nav">
      <li
        class="nav-item"
        v-for="item in navItems"
        :key="item.name"
      >
        {{ item.label }}
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: 'HeaderNav',
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
<style lang="scss" src="./HeaderNav.scss"></style>
