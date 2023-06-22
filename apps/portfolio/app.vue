<script setup lang="ts">
import { useDynamicColor } from "./composables/useDynamicColor"

useLenisinit()

const _r = useRoute()
const _SITE_URL = `https://kurojifusky.com${_r.fullPath}`

useSeoMeta({
  ogUrl: _SITE_URL
})

useHeadSafe({
  link: [{ rel: "canonical", href: _SITE_URL }]
})

useSchemaOrg([
  defineWebSite({
    name: "Kuroji Fusky"
  }),
  defineWebPage()
])
</script>

<template>
  <div
    id="cursor-placeholder"
    class="fixed top-0 left-0 z-[9999] pointer-events-none"
  ></div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: initial;
  overflow-x: hidden;
}

body {
  @apply transition-colors;
}

:root {
  --dynamic-fg: theme("colors.kuro-lavender.50");
  --dynamic-bg: theme("colors.kuro-dark2");
}
</style>
