<template>
  <div id="social-row">
    <a class="social-btn" href="https://youtube.com/skepfusky97" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-youtube"></i></div>
      <div class="tooltip">
        <span>youtube</span>
      </div>
    </a>
    <a class="social-btn" href="https://github.com/skepfusky" target="_blank" rel="noreferrer noopener">
      <div class="social-icons">
        <i class="fab fa-2x fa-github"></i>
      </div>
      <div class="tooltip">
        <span>github</span>
      </div>
    </a>
    <a class="social-btn" href="https://twitter.com/skepfuskyjs" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-twitter"></i></div>
      <div class="tooltip">
        <span>tooter</span>
      </div>
    </a>
    <a class="social-btn" href="https://instagram.com/skepfuskyjs" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-instagram"></i></div>
      <div class="tooltip">
        <span>instagram</span>
      </div>
    </a>
    <a class="social-btn" href="https://deviantart.com/soskeptically" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-deviantart"></i></div>
      <div class="tooltip">
        <span>deviantart</span>
      </div>
    </a>
    <a class="social-btn" href="https://soundcloud.com/kokoro-husky-mixtapes" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-soundcloud"></i></div>
      <div class="tooltip">
        <span>soundcloud</span>
      </div>
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-spotify"></i></div>
      <div class="tooltip">
        <span>spotify</span>
      </div>
    </a>
    <a class="social-btn" href="#" target="_blank" rel="noreferrer noopener">
      <div class="social-icons"><i class="fab fa-2x fa-itunes-note"></i></div>
      <div class="tooltip">
        <span>apple music</span>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialSection",
  components: {},
});
</script>

<style lang="scss">
#social-row {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2.25rem;
}

.social-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:hover .tooltip {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
}

.tooltip {
  @include pos-a(40px);
  width: 100px;
  text-align: center;
  transition: all 100ms ease;
  transform: translateY(-7px) scale(0.9);
  opacity: 0;
  pointer-events: none;
}

.social-icons {
  opacity: 0.65;

  &:hover {
    opacity: 1;
  }
}
</style>
