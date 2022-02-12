<template>
  <TheHeader />
  <router-view/>
  <TheFooter />
</template>

<script lang="ts">
import TheHeader from "./components/layouts/TheHeader.vue"
import TheFooter from "./components/layouts/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheFooter
  }
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
}

header, footer > #wrapper {
  padding: 1.75em;
  max-width: 1600px;
  margin: 0 auto;
}

main {
  padding: 0.55em 0;
}

:is(h1, h2, h3, h4, h5) {
  font-family: 'Noto Sans KR', sans-serif;
}

hr {
  border: 2px dashed #aaa;
  margin: 1.2rem auto;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 110%;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

// ------------

#nv-bar {
  display: block;
}

.md-wrapper {
  padding: 0 1.65rem;
  max-width: 1600px;
  margin: 0 auto;
}

#grid-responsive {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

// ------------
// Backdrop
// ------------
.bd {
  position: fixed;
  inset: 0 auto auto auto;
  height: 50%;
  width: 100vw;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center center !important;
  z-index: -2;
  filter: blur(14px);
  opacity: .5;

  &::after {
    z-index: 69;
    position: absolute;
    inset: auto auto 0 auto;
    content: '';
    width: 100vw;
    height: 200px;
    background: linear-gradient(to bottom, var(--header-backdrop-point-0) 0%, var(--header-backdrop-point-1) 85%, var(--header-backdrop-point-1) 100%);
  }

  &.home {
    background: url('~@/assets/img/LeahBDay.jpg');    
  }
}
</style>
