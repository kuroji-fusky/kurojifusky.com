<template>
  <header>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </header>
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

header {
  // padding: 30px;
  padding: 1rem 2rem;
  @include flex_params(center, center, row);
  @include list_spacing(30px);
  background: gray;
  font-size: 110%;

  ul {
    @include flex_params(unset, unset, row);
  }
  

  a {
    font-weight: bold;
    color: white;
    @include prop_transition(color);

    &:hover {
      color: lighten($skep-lightblue, 27%);
    }

    &.router-link-exact-active {
      color: $skep-lightblue;
      cursor: default;
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
