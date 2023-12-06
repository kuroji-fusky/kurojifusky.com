<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  // const lenis = new Lenis({
  //   duration: 1.125,
  //   orientation: "vertical",
  //   smoothWheel: true,
  //   wheelMultiplier: 0.65,
  //   smoothTouch: false,
  //   infinite: false,
  // });
  // const raf = (time: unknown) => {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // };
  // requestAnimationFrame(raf);
  // lenis.on("scroll", ScrollTrigger.update);
  // gsap.ticker.add((t) => lenis.raf(t * 1000));
})
</script>

<template>
  <Navbar />
  <div class="min-h-[calc(100dvh-1.25rem)]">
    <slot />
  </div>
  <Footer />
</template>
