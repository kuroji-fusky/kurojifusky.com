<template>
  <footer>
    <div id="wrapper">
      <ul id="social-row">
        <li v-for="a in socials" :key="a.icon" class="site-link-reverse">
          <a :href="a.link" target="_blank">
            <font-awesome-icon :icon="['fab', `fa-${a.icon}`]" />
          </a>
        </li>
      </ul>
      <div class="flex gap-5 text-sm">
        <ul class="flex gap-5">
          <li><a class="site-link" href="#">Copyright</a></li>
          <li><a class="site-link" href="#">Contact</a></li>
        </ul>
        <span>
          &copy; {{ new Date().getFullYear() }} Fusky & Co., LLC. Built on
          <a class="site-link" href="https://v3.nuxtjs.org/" target="_blank"
            >Nuxt 3</a
          >!
        </span>
      </div>
    </div>
    <div id="gradient-bg"></div>
  </footer>
</template>

<script setup lang="ts">
import { socials } from "~~/models/Content"
</script>

<style lang="scss" scoped>
footer {
  @apply relative;

  &:not(.site-link) {
    @apply text-[#f5f5f5];
  }
}

#gradient-bg {
  @apply absolute bottom-0 -left-12 -right-12 h-[4.5rem] bg-gradient-to-l from-sona-borahae-600 via-sona-royalblue-500 to-sona-skycyan-600 -z-10 opacity-50 blur-[100px];
}

#wrapper {
  @apply flex justify-between items-center py-7;
}

#social-row {
  @apply flex gap-x-8;
}
</style>
