<script setup lang="ts">
import { socials } from "@kuro/shared"
</script>

<template>
  <div class="mx-auto max-w-screen-2xl px-10 py-9">
    <footer class="flex justify-between">
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
    </footer>
  </div>
</template>
