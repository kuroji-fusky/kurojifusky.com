<template>
  <slot></slot>
</template>

<script setup>
const title = "skepfusky official website"
const desc = "Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines"
const img = "TBA"
const siteUrl = "https://skepfusky.xyz/"

definePageMeta({
  layout: "home",
})

useHead({
  title: title,
  meta: [
    { name: "description", content: desc },
    {
      name: "keywords",
      content: "kokoro husky, skepfusky, furry, programming, developer",
    },
    {
      property: "og:title",
      content:title,
    },
    {
      property: "og:description",
      content:desc,
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: img },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "800" },
    { property: "og:url", content: siteUrl },
    {
      name: "twitter:title",
      content: title,
    },
    { name: "twitter:site", content: "@skepfuskyjs" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:description",
      content: desc,
    },
    { name: "twitter:image", content: img },
    { name: "twitter:url", content: siteUrl },
  ],
  link: [{ rel: "canonical", href: siteUrl }],
})
</script>
