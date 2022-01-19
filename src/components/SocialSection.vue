<template>
  <div id="social-row">
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">
      <i class="fab fa-2x fa-youtube"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">
      <i class="fab fa-2x fa-twitter"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener" style="font-size: 96%">
      <i class="fab fa-2x fa-github"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">
      <i class="fab fa-2x fa-instagram"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener" style="font-size: 85%">
      <i class="fab fa-2x fa-deviantart"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">
      <i class="fab fa-2x fa-soundcloud"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener" style="font-size: 90%">
      <i class="fab fa-2x fa-spotify"></i> 
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener" style="font-size: 90%">
      <i class="fab fa-2x fa-itunes-note"></i> 
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialSection',
})
</script>

<style lang="scss">
#social-row {
  display: flex;
  column-gap: 2rem;
  align-items: center;

  a {

    opacity: .65;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
