<script lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { useMeta } from 'vue-meta'

export default {
  components: {
    TheHeader, TheFooter
  },
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true },
      og: {
        site_name: 'skepfusky'
      },
      twitter: {
        site: '@skepfuskyjs',
      }
    })
  }
}
</script>

<template>
  <metainfo>
    <template #title="{ content }">
      {{ content ? `${content} - skepfusky` : `skepfusky`}}
    </template>
  </metainfo>
  <TheHeader />
  <router-view></router-view>
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

section, header, footer {
  max-width: 1640px;
  margin: 0 auto;
}
section {
  padding: 0 1.25ex;
}
footer #wrapper {
  padding: 1.25ex 1.90rem;
}
header {
  padding: 1.55rem 2rem;
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
  margin-top: 100px;
  transition: margin 300ms ease;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  #avatar {
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
    margin-top: 40px !important;
    margin: 0 20%;
    transition: margin 300ms ease;

    @media (max-width: 840px) {
      margin-top: 50px !important;
      margin: 0 1%;
    }
  }
}

skep-carousel-wrapper {
  display: block;
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
  background: #4914a0;
  font-size: 95%;
  box-shadow: 0 0 12px rgba(#000, 45%);
  cursor: default;
}
</style>
