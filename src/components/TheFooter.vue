<script lang="ts" setup>
import SocialHandler from './SocialHandler.vue'
</script>

<template>
  <footer>
    <div id="wrapper">
      <div style="font-size: 0.95rem">
        &copy; 2014-{{ new Date().getFullYear() }} skepfusky, made in Vue 3 + TypeScript + Vite
      </div>
      <SocialHandler />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mixin' as *;

footer {
  position: relative;
  padding: 1.25rem 0;

  > #wrapper {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    @include justify-between;
  }
}
</style>