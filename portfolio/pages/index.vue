<script setup lang="ts">
import { useTastySEO } from "~/composables/useTastySEO"

useTastySEO({
  title: "GIVE ME DAT GHOST",
  description: "I make awesome silly stuff on da interwebz",
})
</script>

<template>
  <main>
    <!-- <LandingHero /> -->
    <LandingIntro />
    <LandingShowcase />
    <LandingBriefHistory />
    <LandingSuppowt />
  </main>
</template>
