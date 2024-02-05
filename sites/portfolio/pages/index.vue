<script setup lang="ts">
import { SITE_TITLE } from "~/constants"

useSEO({
  title: SITE_TITLE,
  description: "I make awesome silly and cool stuff"
})
</script>

<template>
  <LazyLandingBaseGrid />
  <LandingHero />
  <LazyLandingWhatIDo />
  <LazyLandingShowcase />
</template>
