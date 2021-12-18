<template>
  <skep-navbar />
  <router-view></router-view>
  <skep-footer />
</template>

<script>
import SkepNavbar from "./components/SkepNavbar.vue"
import SkepFooter from "./components/SkepFooter.vue"

export default {
  components: { SkepNavbar, SkepFooter }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: mix(black, gray, 75%);
  color: whitesmoke;
  overflow-x: hidden;
}

div,
span,
figure,
figcaption {
  display: block;
}

header {
  @include flexy(space-between, center, row);
  padding: 0 2rem;
}

footer {
  @include flexy(center, unset, row);
  background: mix($skep-blue, black, 25%);
  color: whitesmoke;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-size: 90%;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  pointer-events: none;
}

#center-wrapper {
  @include flexy(center, center, column);
}

figcaption {
  text-align: center;
}

* {
  scrollbar-color: $skep-lightblue $skep-blue;

  @media only screen and (min-width: $x-desktop-w) {
    // font-size: 1.15rem;
  }

  // font-size: 1.1rem;

  @include md-tablet-devices {
    font-size: 1.05rem;
  }
}
</style>
