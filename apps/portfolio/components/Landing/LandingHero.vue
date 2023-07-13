<script setup lang="ts">
import { gsap } from "gsap"

import { ChevronDownIcon } from "lucide-vue-next"
</script>

<template>
  <div
    id="hero"
    class="relative h-[100.5dvh] grid place-items-center select-none"
  >
    <section class="gap-y-12 flex flex-col items-center">
      <KurojiFuskyIcon aria-label="Kuroji Fusky logo" />
      <p>Self-taught developer and visual artist from the Philippines</p>
    </section>
    <div
      class="absolute bottom-5 left-[calc(50%-2.5)] grid place-items-center gap-y-2.5"
    >
      <span class="uppercase">Scroll down</span>
      <ChevronDownIcon />
    </div>
  </div>
</template>
