<template>
  <skep-navbar />
  <router-view />
  <skep-footer />
</template>

<script>
import SkepNavbar from "@/components/SkepNavbar.vue";
import SkepFooter from "@/components/SkepFooter.vue";

export default {
  components: {
    SkepNavbar,
    SkepFooter,
  },
};
</script>

<style lang="scss">
//
</style>
