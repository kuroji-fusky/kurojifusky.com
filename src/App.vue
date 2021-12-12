<template>
  <header>
    <ul>
      <li><router-link to="/home">Home<span class="header-line"></span></router-link></li>
      <!-- <li><a href="#">Browse My Garbage<span class="header-line"></span></a></li> -->
      <li><router-link :to="{ name: 'About' }">About<span class="header-line"></span></router-link></li>
    </ul>
  </header>
  <router-view/>
  <skep-footer/>
</template>

<script>
import SkepFooter from './components/SkepFooter.vue'

export default {
  components: {
    'skep-footer': SkepFooter,
  }
}
</script>

<style lang="scss">
header {
  padding: 1rem 2rem;
  @include flex_params(center, center, row);
  @include list_spacing(30px);
  background: mix(gray, black, 20%);
  font-size: 110%;

  ul {
    @include flex_params(unset, unset, row);
  }

  li {
    @include flex_params(center, center, column);
  }

  a {
    font-weight: bold;
    color: white;
    @include prop_transition(color);
    @include flex_params(center, center, column);
    &:hover {
      .header-line {
        width: 90%;
      }
    }

    &:hover {
      color: lighten($skep-lightblue, 27%);
    }

    &.router-link-exact-active {
      color: $skep-lightblue;
      cursor: default;

      .header-line {
        width: 100%;
        background: $skep-lightblue;
      }
    }
  }
}

.text-spacing {
  padding-left: 5px;
  position: relative;
  top: -1px;
}

.header-line {
  transform: translateY(5px);
  width: 0%;
  height: 3px;
  background: white;
  box-shadow: 0 0 12px white;
  border-radius: 16px;
  display: block;
  @include prop_transition();
}
</style>
