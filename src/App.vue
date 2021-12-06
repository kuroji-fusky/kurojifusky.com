<template>
<div id="app">
  <skepHeader></skepHeader>
  BRUHHH
  <skepFooter></skepFooter>
</div>
</template>

<script>
import skepHeader from './layouts/SkepHeader.vue'
import skepFooter from './layouts/SkepFooter.vue'

export default {
  name: 'skep-portfolio',
  components: {
    skepHeader,
    skepFooter
  }
}
</script>

<style lang="scss">
@use 'assets/scss/mixins.scss';
@use 'assets/scss/palette.scss';

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before, *::after {
  content:'';
  display: block;
}

#app {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

// Header footer stuff
.text-spacing {
  padding-left: 5px;
  position: relative;
  top: -1px;
}

$colors: white;
$font-big-screen: 125%;

header {
  nav {
    color: $colors;
    font-size: $font-big-screen;
  }
}
footer {
  #wrapper {
    color: $colors;
    font-size: $font-big-screen;
  }
}
</style>
