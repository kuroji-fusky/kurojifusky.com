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
  font-size: 1.25rem;

  ul {
    @include flex_params(unset, unset, row);
  }

  li {
    @include flex_params(center, center, column);
  }

  a {
    @include prop_transition(color);
    @include flex_params(center, center, column);
    font-weight: bold;
    color: white;

    &:hover {
      .header-line {
        width: 100%;
      }
    }

    &:hover {
      color: lighten($skep-blue, 27%);
    }

    &.router-link-exact-active {
      color: $skep-blue;
      cursor: default;

      .header-line {
        width: 100%;
        background: $skep-blue;
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
  height: 2px;
  background: white;
  box-shadow: 0 0 12px rgba(white, 50%);
  display: block;
  @include prop_transition();
}
</style>
