<script setup lang="ts">
useLenisinit()

const _I_LOVE_COBBLESTONE = useRoute()
const _SITE_URL = `https://kurojifusky.com${_I_LOVE_COBBLESTONE.fullPath}`

useSeoMeta({
  ogUrl: _SITE_URL
})

useHeadSafe({
  link: [{ rel: "canonical", href: _SITE_URL }]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
