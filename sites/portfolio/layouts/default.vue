<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

onMounted(() => {
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

  console.log("Now this bitch hydrated")
})
</script>

<template>
  <div
    id="transition"
    class="bottom-unset pointer-events-none fixed inset-0 z-[999] h-screen"
  ></div>
  <Navbar />
  <main class="min-h-[calc(100dvh-1.25rem)]">
    <slot />
  </main>
  <Footer />
</template>
