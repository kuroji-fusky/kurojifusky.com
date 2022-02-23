<script lang="ts" setup>
import SocialHandler from './SocialHandler.vue'
</script>

<template>
  <footer>
    <div id="wrapper">
      <div id="copyright">
        &copy; 2014-{{ new Date().getFullYear() }} skepfusky, made in Vue 3 + TypeScript + Vite... testicles
      </div>
      <SocialHandler />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mixin' as *;

footer {
  > #wrapper {
    width: 100%;
    @include justify-between;
  }
}
</style>