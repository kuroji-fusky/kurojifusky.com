<script setup lang="ts">
import { socials } from "@kuro/shared"
</script>

<template>
  <footer class="px-8 mx-auto max-w-screen-2xl">
    <div class="flex justify-between">
      <div class="flex items-center gap-x-3.5">
        <a
          v-for="(social, index) in socials"
          :key="index"
          :title="social.name"
          :href="social.link"
          rel="nofollower me"
          target="_blank"
        >
          <component :is="social.icon" width="1.6rem" height="1.15rem" />
        </a>
      </div>
      <span>Version 1.1</span>
    </div>
  </footer>
</template>
