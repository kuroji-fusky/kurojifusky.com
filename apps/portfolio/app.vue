<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const _r = useRoute()
const config = useRuntimeConfig()

const _SITE_URL = `https://${config.public.domainName}${_r.fullPath}`

useSeoMeta({ ogUrl: _SITE_URL })
useHeadSafe({ link: [{ rel: "canonical", href: _SITE_URL }] })

useSchemaOrg([
  defineWebSite({
    name: "Kuroji Fusky"
  }),
  defineWebPage()
])

onBeforeMount(() => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    duration: 1.125,
    orientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.65,
    smoothTouch: false,
    infinite: false
  })

  const raf = (time: unknown) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  lenis.on("scroll", ScrollTrigger.update)

  gsap.ticker.add((t) => lenis.raf(t * 1000))
})
</script>

<template>
  <KuroTransition />
  <Cursor />
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
  @apply transition-colors bg-[var(--dynamic-bg)] text-[var(--dynamic-fg)] font-inter duration-[725ms];
}

:root {
  --dynamic-fg: theme("colors.kuro-lavender.50");
  --dynamic-bg: theme("colors.kuro-dark2");
}
</style>
