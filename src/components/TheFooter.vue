<template>
  <footer>
    <div id="wrapper">
      <div id="copyright">
        &copy; 2014-{{ new Date().getFullYear() }} skepfusky, made in Vue 3 + TypeScript + Vite... testicles
      </div>
      <div id="social">
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-soundcloud"></i>
        <i class="fab fa-spotify"></i>
        <i class="fab fa-itunes-note"></i>
      </div>
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

  #social {
    font-size: 120%;
    display: flex;
    column-gap: 1.85rem;
  }
}
</style>