<script lang="ts" setup>
import SocialHandler from './SocialHandler.vue'
</script>

<template>
  <footer>
    <div id="wrapper">
      <div style="font-size: 0.95rem">
        &copy; 2014-{{ new Date().getFullYear() }} skepfusky, made in Vue 3 + TypeScript + Vite
        <br>
        <span style="opacity: .5;"><i class="fas fa-envelope"></i> For businesses & inqueries: agency@fusky.co</span>
      </div>
      <SocialHandler />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;

footer {
  position: relative;
  padding: 1.25rem 0;

  > #wrapper {
    margin: 0 auto;
    width: 100%;
    @include justify-between;
    align-items: center;
    @media (max-width: 800px) {
      text-align: center;
      display: block !important;
  }
  }
}

#social {
  @media (max-width: 800px) {
    display: none;
  }
}
</style>