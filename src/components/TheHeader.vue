<script lang="ts" setup>
import Logo from './Logo.vue'
</script>

<template>
  <header>
    <Logo />
    <nav>
      <a href="#about-me">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#proficency">Proficency</a>
      <a href="#roadmap">Roadmap</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;

header {
  @include justify-between;

  @media (max-width: 768px) {
    display: none;
  }
}

#logo {
  font-size: 120%;
}

nav {
  display: flex;
  column-gap: 2rem;

  
}

a {
  color: #f5f5f5;
}
</style>