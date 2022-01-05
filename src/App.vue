<template>
  <div
    :class="(darkMode === true) ? 'theme-dark' : 'theme-light' "
    @themeToggle="darkMode"
  >
    <skep-navbar />
    <a 
      @click="darkMode = !darkMode"
      class="theme-toggle-btn"
    >
      <span class="theme-toggle-icon-rotate">
        <i class="fas fa-adjust"></i>
      </span>
    </a>
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
  },
}
</script>

<style lang="scss">
// All SCSS stylesheets are loaded all across Vue components
</style>
