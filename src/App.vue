<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

// Lazy load components
const SkepHeader = defineAsyncComponent(() => import('@/components/layouts/SkepHeader.vue'))
const AboutMe = defineAsyncComponent(() => import('@/components/layouts/AboutMe.vue'))
const Projects = defineAsyncComponent(() => import('@/components/layouts/Projects.vue'))
const Proficency = defineAsyncComponent(() => import('@/components/layouts/Proficency.vue'))
// const Roadmap = defineAsyncComponent(() => import('@/components/layouts/Roadmap.vue'))
</script>

<template>
<TheHeader />
  <main role="main">
    <SkepHeader />
    <AboutMe />
    <Projects />
    <Proficency />
    <!-- <Roadmap /> -->
  </main>
  <TheFooter />
</template>

<style lang="scss">
@use '@/assets/scss/mixin' as *;
@import 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Sans+KR:wght@400;500;700&display=swap';

:root {
  --overlay: #2c2c2c; 
  --item-padding: 0.95rem;

  // Carousel
  --gradient-pnt-0: #20202000;
  --gradient-pnt-1: #202020;

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
  background: var(--gradient-pnt-1);
  color: #f5f5f5;
  line-height: 1.65rem;
  overflow-x: hidden;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 118%;
}

hr {
  width: 100%;
  border: 2px dashed #aaa;
}

a {
  text-decoration: none;
}

section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.25ex;
}

footer {
  padding: 1.25ex;
}

.bubble-info {
  background: var(--overlay);
  padding: 1.15rem;
  border-radius: 10px;
  @include item-center;
  flex-direction: column;
  row-gap: 0.75rem;

  > div {
    @include justify-center;
    column-gap: 0.32rem;
    row-gap: 0.65rem;
    flex-wrap: wrap;
  }
}

section:first-child {
  position: relative;
  margin-top: 140px;

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
    transition: margin 300ms ease;

    @media (max-width: 768px) {
      margin: 0 1%;
    }
  }
}

#skep-art-wrapper {
  animation: popInDatBeauty 500ms 600ms ease forwards;
  opacity: 0;
}

@keyframes popInDatBeauty {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
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
