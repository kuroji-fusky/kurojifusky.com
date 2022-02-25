<script lang="ts" setup>
import ProfileCarousel from '../ProfileCarousel.vue'
import SocialHandler from '../SocialHandler.vue'
</script>

<template>
  <section id="skep-profile-header">
    <div id="avatar">
      <img
        src="@/assets/img/08.png"
        alt="Skepfusky's avatar"
        aria-label="Skepfusky's avatar"
      />
    </div>
    <ProfileCarousel />
    <article class="bubble-info">
      <h1>Saranghae</h1>
      <div>
        <span id="skill-item">✨ Front-end web developer</span>
        <span id="skill-item">🖌️ UI/UX designer</span>
        <span id="skill-item">🎵 Independent music artist</span>
        <span id="skill-item">🎤 Tenor vocalist</span>
        <span id="skill-item">🕺 Freestyle performer</span>
        <span id="skill-item">🎥 Filmmaker</span>
        <span id="skill-item">🙃 Certified weirdo</span>
      </div>
      <SocialHandler />
    </article>
  </section>
</template>

<style lang="scss" scoped>
#skep-profile-header {
  .bubble-info {
    row-gap: 1.75rem;
  }

  #social {
    font-size: 165%;
    column-gap: 2.5rem;
  }
}
</style>