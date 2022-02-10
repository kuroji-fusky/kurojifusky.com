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

header,
footer {
  padding: 1.75em;
  max-width: 1600px;
  margin: 0 auto;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  font-size: 110%;
}

a {
  text-decoration: none;
}

#nv-bar {
  display: block;
}
</style>
