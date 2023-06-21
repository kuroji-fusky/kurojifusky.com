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

useSchemaOrg([
  // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
  defineWebSite({
    name: "Kuroji Fusky"
  }),
  defineWebPage()
])
</script>

<template>
  <div id="cursor-placeholder" class="fixed top-0 left-0 z-[9999]"></div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: initial;
  overflow-x: hidden;
}
</style>
