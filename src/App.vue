<template>
  <main>
    <section>
      <EpicFlipAvatar/>
    </section>
    <section>
      <CringeBio/>
    </section>
    <section>
      <div id="social-row">
        <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">tooter</a>
        <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">instagram</a>
        <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">youtube</a>
        <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">github</a>
        <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">fa lol</a>
        <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">deviantart</a>
      </div>
    </section>
  </main>
  <SkepFooter/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkepFooter from './components/SkepFooter.vue';
import EpicFlipAvatar from './components/EpicFlipAvatar.vue';
import CringeBio from './components/CringeBio.vue';

export default defineComponent({
  components: { SkepFooter, CringeBio, EpicFlipAvatar }
});
</script>