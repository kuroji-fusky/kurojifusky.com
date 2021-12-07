<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <skep-footer/>
</template>

<script>
import SkepFooter from './components/SkepFooter.vue'

export default {
  components: {
    SkepFooter  
  }
}
</script>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
