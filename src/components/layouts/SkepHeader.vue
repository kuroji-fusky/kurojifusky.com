<script lang="ts" setup>
import ProfileCarousel from '../ProfileCarousel.vue'
import SocialHandler from '../SocialHandler.vue'
</script>

<template>
  <section id="skep-profile-header">
    <div id="avatar">
      <img
        src="../../assets/img/03.png"
        alt="Skepfusky's avatar"
        aria-label="Skepfusky's avatar"
      />
    </div>
    <ProfileCarousel />
    <article class="bubble-info">
      <h1>Saranghae</h1>
      <div>
        <span id="skill-item">✨ Front-end Developer</span>
        <span id="skill-item">🎵 Indie Music Producer</span>
        <span id="skill-item">🎥 Filmmaker</span>
        <span id="skill-item">📱 UI/UX designer</span>
        <span id="skill-item">🙃 Certified Weirdo</span>
      </div>
      <SocialHandler />
    </article>
  </section>
</template>