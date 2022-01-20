<template>
  <main role="main">
    <section style="height: 100vh; display: flex; flex-direction: column; text-align: center; row-gap: 1.5rem; justify-content: center; align-items: center;">
      <EpicFlipAvatar/>
      <div class="animate-stall" style="font-size: 1.75rem; cursor: default; display: flex;">
        <strong style="color: #48ddf7;">skep</strong>
        <span style="color:#f0db4f">fusky</span>();
      </div>
      <i class="animate-stall" style="cursor: default;">Making top-tier hot garbage since 2014!</i>
      <div class="vertical-list animate-stall" style="max-width: 700px;">
        <ul>
          <li style="background: #2076c8" >19-year-old Filipino manchild</li>
          <li style="background: #f0db4f; color: #000" >front-end JavaScript developer</li>
          <li style="background: #41b883" >Vue.js developer</li>
          <li style="background: #982bbd" >experienced video editor</li>
          <li style="background: orangered" >filmmaker</li>
          <li style="background: rgb(37, 240, 179); color: #000" >indie musician</li>
          <li style="background: blueviolet" >performer/dancer</li>
        </ul>
      </div>
      <SocialSection/>
    </section>
    <!-- <div id="temp-footer" style="font-family: 'Ubuntu Mono', 'Roboto Mono', Consolas, monospace">
      &copy; {{ new Date().getFullYear() }} skepfusky
      <br>
      <a href="https://vitejs.dev" style="text-decoration: underline !important;" target="_blank" rel="noopener">Made in Vue.js + Vite</a>
    </div> -->
    <div id="solid">
      <!-- <section>
        <CringeBio/>
      </section> -->
      <section>
        <Fursona/>
      </section>
      <!-- <section>
        <Projects/>
      </section> -->
    </div>
  </main>
  <div id="fixed-bg"></div>
  <!-- <SkepFooter/> -->
</template>

<script>
import EpicFlipAvatar from './components/EpicFlipAvatar.vue';
import SocialSection from './components/SocialSection.vue';
// import CringeBio from './components/CringeBio.vue';
import Fursona from './components/Fursona.vue';
// import Projects from './components/Projects.vue';
import SkepFooter from './components/SkepFooter.vue';

export default {
  components: {
    EpicFlipAvatar,
    SocialSection,
    // CringeBio,
    Fursona,
    // Projects,
    SkepFooter
  }
};
</script>

<style lang="scss">
$stripe1: rgb(27,163,171);
$stripe2: rgb(92,4,150);

#app {
  // overflow: hidden !important;
}

#temp-footer {
  position: fixed;
  bottom: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

* {
  scrollbar-color: $stripe1 $stripe2;
  scrollbar-width: thin;
}

.vertical-list {
  ul {
    cursor: default;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .55rem;
  }

  li {
    padding: .75rem 1rem;

    @include tablet-devices {
      padding: .55rem .85rem;
    }
    box-shadow: 4px 4px 0 rgba(black, 25%);
    transition: all 100ms ease-out;

    &:hover {
      box-shadow: 8px 8px 0 rgba(black, 15%);
      transform: translate(-2px, -2px);
    }
  }
}

#solid {
  background: mix(black, gray, 77%);
}

#fixed-bg {
  position: fixed;
  inset: 0 0 0 0;
  height: 100vh;
  z-index: -5;
  background: linear-gradient(90deg, $stripe1 0%, $stripe2 33%, $stripe1 66%, $stripe2 100%);
  background-size: 300%;
  animation: oohSmooth 27s infinite linear;
}

@keyframes oohSmooth {
  to{background-position:right}
  from{background-position:left}
}

.animate-stall {
  &:nth-child(2) {
    animation: elementStall 2.5s ease;
  }
  &:nth-child(3) {
    animation: elementStall 2.6s ease;
  }
  &:nth-child(4) {
    animation: elementStall 2.7s ease;
  }
  &:nth-child(5) {
    animation: elementStall 2.8s ease;
  }
}

@keyframes elementStall {
  0% {
    transform: translateY(16px);
    opacity: 0;
  }
  80% {
    transform: translateY(16px);
    opacity: 0;
    pointer-events: all;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}

</style>