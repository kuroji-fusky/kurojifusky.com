<template>
  <div>
    <h3>Browse my stuff</h3>
    <div id="hero-grid">
      <a
        v-for="item in portfolio"
        :key="item.link"
        href="#"
        v-on:click="tba()"
        class="hero-item card-hoverable"
      >
        <span class="text-5xl">{{ item.emoji }}</span>
        <h3 class="highlight">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { portfolio } from "~~/models/Content";

function tba() {
  alert("This website is still being worked on lol");
}
</script>

<style lang="scss" scoped>
h3 {
  @apply font-bold text-center select-none;
}

#hero-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 p-5 max-w-[85rem] mx-auto;
}

.hero-item {
  @apply bg-sona-borahae-500 bg-opacity-5 select-none flex flex-col justify-center items-center p-6 text-center transition-all duration-[320ms] gap-y-2;

  &:hover {
    @apply bg-opacity-20 translate-x-[0.33rem] translate-y-[0.33rem];
  }

  p {
    @apply leading-5;
  }
}
</style>
