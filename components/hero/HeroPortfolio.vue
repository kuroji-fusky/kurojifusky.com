<template>
  <div id="hero-grid">
    <a
      v-for="item in portfolio"
      :key="item.link"
      :href="item.link"
      class="hero-item card-hoverable"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
import { portfolio } from "~~/models/Content";
</script>

<style lang="scss" scoped>
#hero-grid {
  @apply grid grid-cols-3 gap-3 p-5 max-w-[85rem] mx-auto;
}

.hero-item {
  @apply select-none flex flex-col justify-center items-center p-6 text-center transition-all duration-[320ms] gap-y-3;

  &:hover {
    @apply bg-sona-borahae-500 bg-opacity-25;
    transform: translate(-0.11rem, -0.11rem);
  }

  p {
    @apply leading-5;
  }
}
</style>
