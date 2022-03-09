<script lang="ts" setup>
import Logo from './Logo.vue'
</script>

<template>
  <header>
    <router-link to="/">
      <Logo />
    </router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/roadmap">Roadmap</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;

header {
  @include justify-between;

  @media (max-width: 768px) {
    @include justify-center;
  }
}

#logo {
  font-size: 120%;
  @media (max-width: 768px) {
    display: none;
  }
}

nav {
  display: flex;
  column-gap: 2rem;
  .portfolio-page-active {
    color: #48ddf7;
    text-shadow: 0 0 12px #2076c5;
    font-weight: 700;
    transition: all 200ms ease;
  }
}

a {
  color: #f5f5f5;
}
</style>