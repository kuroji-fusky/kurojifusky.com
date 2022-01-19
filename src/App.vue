<template>
  <main role="main">
    <section style="height: 100vh; display: flex; flex-direction: column; row-gap: 1rem; justify-content: center; align-items: center;">
      <EpicFlipAvatar/>
      <div class="vertical-list" style="max-width: 500px;">
        <ul>
          <li>19-year-old manchild</li>
          <li>Vue.js developer</li>
          <li>veteran video editor</li>
          <li>filmmaker</li>
          <li>indie musician</li>
          <li>performer/dancer</li>
        </ul>
      </div>
      <SocialSection/>
    </section>
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
  <div id="solid">
    <SkepFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EpicFlipAvatar from './components/EpicFlipAvatar.vue';
import SocialSection from './components/SocialSection.vue';
// import CringeBio from './components/CringeBio.vue';
import Fursona from './components/Fursona.vue';
// import Projects from './components/Projects.vue';
import SkepFooter from './components/SkepFooter.vue';

export default defineComponent({
  components: {
    EpicFlipAvatar,
    SocialSection,
    // CringeBio,
    Fursona,
    // Projects,
    SkepFooter
  }
});
</script>

<style lang="scss">
#solid {
  background: mix(black, gray, 77%);
}

section, footer {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 12px;
}

#fixed-bg {
  $stripe1: rgb(27,163,171);
  $stripe2: rgb(92,4,150);
  position: fixed;
  inset: auto 0 0 0;
  height: 100vh;
  z-index: -5;
  background: linear-gradient(90deg, $stripe1 0%, $stripe2 33%, $stripe1 66%, $stripe2 100%);
  background-size: 300%;
  filter: blur(32px);
  animation: oohSmooth 27s infinite linear;
}

@keyframes oohSmooth {
  to{background-position:right}
  from{background-position:left}
}

footer {
  padding: 1.25rem 0;
  text-align: center;
}

</style>