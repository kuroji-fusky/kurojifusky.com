<template>
  <div :class="(darkMode === true) ? 'theme-dark' : 'theme-light' ">
    <skep-navbar />
    <router-view/>
    <skep-footer />
  </div>
</template>

<script>
import SkepNavbar from "./components/SkepNavbar.vue";
import SkepFooter from "./components/SkepFooter.vue";

export default {
  components: {
    SkepNavbar, SkepFooter
  },
  data() {
    return {
      darkMode: true,
    }
  }
}
</script>

<style lang="scss">
// All SCSS stylesheets are loaded all across Vue components
</style>
