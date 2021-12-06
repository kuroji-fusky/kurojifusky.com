<template>
  <skepHeader/>
  BRUHHH
  <skepFooter/>
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
