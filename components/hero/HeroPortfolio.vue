<template>
  <h5>Browse my stuff</h5>
  <div id="hero-grid">
    <a
      v-for="item in portfolio"
      :key="item.link"
      :href="item.link"
      class="hero-item card-hoverable"
    >
      <span class="text-5xl">{{ item.emoji }}</span>
      <h3 class="highlight">{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
import { portfolio } from "~~/models/Content";
</script>

<style lang="scss" scoped>
h5 {
  @apply font-bold text-center select-none;
}

#hero-grid {
  @apply grid grid-cols-3 gap-3 p-5 max-w-[85rem] mx-auto;
}

.hero-item {
  @apply select-none flex flex-col justify-center items-center p-6 text-center transition-all duration-[320ms] gap-y-2;

  &:hover {
    @apply bg-sona-borahae-500 bg-opacity-25;
    transform: translate(-0.11rem, -0.11rem);
  }

  p {
    @apply leading-5;
  }
}
</style>
