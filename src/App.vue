<template>
  <skep-navbar />
  <router-view></router-view>
  <skep-footer />
</template>

<script>
import SkepNavbar from "./components/SkepNavbar.vue";
import SkepFooter from "./components/SkepFooter.vue";

export default {
  components: {
    SkepNavbar,
    SkepFooter,
  },
};
</script>

<style lang="scss">
// global.scss loaded to root and the rest of the Vue components
</style>
