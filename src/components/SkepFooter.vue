<template>
  <footer>
    <div id="wrapper">
      <div id="social">
        <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="#" target="_blank"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="#" target="_blank"><i class="fab fa-soundcloud"></i></a>
        <a href="#" target="_blank"><i class="fab fa-spotify"></i></a>
      </div>
      <div id="footer-info">&copy; {{ new Date().getFullYear() }} Skepfusky. Site made in <img id="vue-logo" src="@/assets/img/vue-logo.svg"> Vue.js.</div>
    </div>
  </footer>
</template>

<style lang="scss">
#wrapper {
  @include flexy(space-between, center, row);
  max-width: $desktop-w;
  width: 100%;
  padding: .65rem 1.25rem;
}

#social {
  display: flex;
  column-gap: 1rem;

  a {
    $btn-off: whitesmoke;
    $btn-on: var(--sf-cyan-light-100);
    color: $btn-off;
    padding: .40rem;
    background: none;
    font-size: 125%;
    border-radius: 3px;

    &:hover {
      border-color: $btn-on;
      color: $btn-on
    }
  }
}

#vue-logo {
  $size: 17px;
  position: relative;
  top: 3px;
  margin: 0 3px;
  width: $size;
  height: $size;
}
</style>