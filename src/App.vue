<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import TheFooter from './components/TheFooter.vue'

// Lazy load components
const SkepHeader = defineAsyncComponent(() => import('./components/layouts/SkepHeader.vue'))
const AboutMe = defineAsyncComponent(() => import('./components/layouts/AboutMe.vue'))
const Projects = defineAsyncComponent(() => import('./components/layouts/Projects.vue'))
</script>

<template>
  <main role="main">
    <SkepHeader />
    <AboutMe />
    <Projects />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@use './assets/scss/mixin' as *;
@import 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Sans+KR:wght@400;500;700&display=swap';

:root {
  --gradient-pnt-0: rgba(32, 32, 32, 0);
  --gradient-pnt-1: rgba(32, 32, 32, 1);

  // Carousel
  --img-scroll: 200px;
  --carousel-fader: 269px;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: rgb(32, 32, 32);
  color: #f5f5f5;
  line-height: 1.55rem;
  overflow-x: hidden;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 107%;
}

a {
  text-decoration: none;
}

section, footer {
  max-width: 1400px;
  margin: 0 auto;
}

section {
  padding: 0 1.25ex;
}

section.grid-full-width {
  --grid-default: 12;
  display: grid;
  grid-template-columns: repeat(var(--grid-default), 1fr);
  max-width: 100%;
  padding: 0;
  position: relative;
}

footer {
  padding: 1.25ex;
}

.bubble-info {
  background: rgba(79, 79, 79, 0.25);
  padding: 1.15rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 0.75rem;

  > div {
    justify-content: center;
    display: flex;
    column-gap: 0.32rem;
    row-gap: 0.65rem;
    flex-wrap: wrap;
  }
}

#skep-profile-header {
  position: relative;
  margin-top: 90px;

  > #avatar {
    @include justify-center;
    transform: translateY(-38px);
    position: absolute;
    width: 100%;
    inset: 0 auto auto 0;
    margin: 0 auto;
    padding: 0 2ex;
    z-index: 70;

    img {
      border-radius: 50%;
      width: 285px;
      border: 8px solid #aaa;
      box-shadow: 0 0 32px #000;
    }
  }
  
  > article {
    margin-top: 45px !important;
    margin: 0 20%;
  }
}

#skill-item {
  padding: 0.55rem 1.05rem;
  border-radius: 7px;
  font-weight: 700;
  background: purple;
  font-size: 95%;
  box-shadow: 0 0 12px rgba(#000, 45%);
  cursor: default;
}
</style>
