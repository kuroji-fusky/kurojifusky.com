<template>
  <footer>
    <div id="wrapper">
      <ul id="social-row">
          <li v-for="a in socials" :key="a.icon" class="site-link">
            <a :href="a.link" target="_blank">
              <font-awesome-icon :icon="['fab', `fa-${a.icon}`]" />
            </a>
          </li>
      </ul>
      <div class="flex gap-5 text-sm">
        <ul class="flex gap-2">
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
  </footer>
</template>

<script setup lang="ts">
import { socials } from "~~/models/Content";
</script>

<style lang="scss" scoped>
#wrapper {
  @apply flex justify-between items-center;
}

#social-row {
  @apply flex gap-x-8;
}
</style>
