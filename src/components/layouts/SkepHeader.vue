<script lang="ts" setup>
import ProfileCarousel from '../ProfileCarousel.vue'
import SocialHandler from '../SocialHandler.vue'
import Logo from '../Logo.vue'
</script>

<template>
  <section>
    <div id="avatar">
      <img
        src="@/assets/img/08.png"
        alt="Skepfusky's avatar"
        aria-label="Skepfusky's avatar"
      />
    </div>
    <ProfileCarousel />
    <article class="bubble-info">
      <h1>
        <Logo />
      </h1>
      <div>
        <span id="skill-item">✨ Full-stack web developer</span>
        <span id="skill-item"><img src="@/assets/img/vue-logo.svg" alt="Vue logo" width="21" style="transform: translateY(3px); margin-right: 2px">&nbsp;Vue developer</span>
        <span id="skill-item">🖌️ Web &amp; UI/UX designer</span>
        <span id="skill-item">🎵 Independent music artist</span>
        <span id="skill-item">🎤 Tenor vocalist</span>
        <span id="skill-item">🕺 Freestyle performer</span>
        <span id="skill-item">🎥 Filmmaker</span>
      </div>
      <hr>
      <SocialHandler />
    </article>
  </section>
</template>

<style lang="scss" scoped>
.bubble-info {
  background: linear-gradient(180deg, #2c2c2c00, var(--overlay));
}

section {
  .bubble-info {
    row-gap: 1.75rem;
  }

  #avatar {
    animation: avatarRestore 300ms ease forwards;

    @media (max-width: 768px) {
      animation: avatarSmol 300ms ease forwards;
    }
  }

  #social {
    display: grid;
    grid-auto-flow: column;
    font-size: 135%;
    column-gap: 2.75rem;

    @media (max-width: 1280px) {
      column-gap: 2rem;
    }

    @media (max-width: 840px) {
      justify-content: space-around;
      gap: 2.1rem;
    }
    @media (max-width: 520px) {
      grid-template-rows: 1fr 1fr;
    }
  }
}

$smol: 0.97;
@keyframes avatarRestore {
  from {transform: scale($smol) translate(-2px, -40px);}
  to {transform: scale(1) translateY(-40px)}
}

@keyframes avatarSmol {
  to {
    transform: scale($smol) translate(-2px, -40px);
  }
}

article h1 {
  font-size: 170%;
  transform: translateY(4px);
}

</style>