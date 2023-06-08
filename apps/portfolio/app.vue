<script setup lang="ts">
useLenisinit()

const _r = useRoute()
const _SITE_URL = `https://kurojifusky.com${_r.fullPath}`

useSeoMeta({
  ogUrl: _SITE_URL
})

useHeadSafe({
  link: [{ rel: "canonical", href: _SITE_URL }]
})

const isLoaded = ref(false)

onMounted(() => {
  if (document.readyState === "complete") isLoaded.value = true
})
</script>

<template>
  <TheBasePreloader :hide="isLoaded" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

