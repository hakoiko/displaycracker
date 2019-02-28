<template>
  <header class="header-block">
    <div class="block-container">
      <div class="header-logo">
        <span class="label">
          DISPLAY<br>CRACKER.
        </span>
      </div>
      <ul class="header-nav">
        <li
          class="nav-item"
          v-for="item in navItems"
          :key="item.name"
          :class="'-' + item.name"
        >
          <router-link
            class="router-link"
            :to="item.path"
          >
            {{ item.label }}
          </router-link>
        </li>
        <li class="nav-item -github">
          <a
            href="https://github.com/hakoiko/displaycracker"
            target="_blank"
          />
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
    setNavItems (routes) {
      let items = []
      routes.forEach(route => {
        if (route.children) items = items.concat(this.setNavItems(route.children))
        if (route.showOnNav) items.push(route)
      })
      return items
    }
  },
  created () {
    this.navItems = this.setNavItems(this.$router.options.routes)
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
