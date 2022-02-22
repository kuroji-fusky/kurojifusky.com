<script setup lang="ts">
import TheProfileCarousel from './components/TheProfileCarousel.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <main role="main">
    <div id="skep-profile-header">
      <div id="avatar">
        <img src="./assets/img/03.png" alt="Skepfusky's avatar" aria-label="Skepfusky's avatar">
      </div>
      <TheProfileCarousel />
      <article class="bubble-info">
        <h1 >Saranghae</h1>
        <div>
          <span id="skill-item">✨ Front-end Developer</span>
          <span id="skill-item">🎵 Indie Music Producer</span>
          <span id="skill-item">🎥 Filmmaker</span>
          <span id="skill-item">📱 UI/UX designer</span>
          <span id="skill-item">🙃 Certified Weirdo</span>
        </div>
      </article>
    </div>
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

main, footer {
  max-width: 1400px;
  margin: 0 auto;
}

main {
  padding: 0 1.25ex;
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
    transform: translateY(-38px);
    position: absolute;
    width: 100%;
    @include justify-center;
    inset: 0 auto auto 0;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2ex;
    z-index: 70;

    img {
      border-radius: 50%;
      width: 21%;
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
  padding: 0.35rem 0.55rem;
  border-radius: 7px;
  font-weight: 700;
  background: purple;
  font-size: 95%;
  box-shadow: 0 0 12px rgba(#000, 45%);
  cursor: default;
  border: 2px solid violet;
}
</style>
