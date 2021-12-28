<template>
  <div id="app" :class="[themeToggle ? 'theme-light' : 'thtme-dark']">
    <skep-navbar :themeToggle="themeToggle"/>
    <router-view></router-view>
    <skep-footer />
  </div>
</template>

<script>
import SkepNavbar from "./components/SkepNavbar.vue"
import SkepFooter from "./components/SkepFooter.vue"

export default {
  components: {
    SkepNavbar,
    SkepFooter 
  },
  data() {
    return {
      themeToggle: false
    }
  }
}
</script>

<style lang="scss">
// global.scss loaded to root and the rest of the Vue components
</style>
