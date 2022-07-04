<template>
  <TheBaseNavbar />
  <slot></slot>
  <TheBaseFooter />
</template>

<script setup lang="ts">
const route = useRoute();
let title = "skepfusky official website";
let desc =
  "Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines";
let img = "TBA";

definePageMeta({
  layout: "default",
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - skepfusky`
      : "skepfusky official website";
  },
  meta: [
    { name: "description", content: desc },
    {
      name: "keywords",
      content: "kokoro husky, skepfusky, furry, programming, developer",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:type", content: "website" },
    { property: "og:img", content: img },
    { name: "twitter:title", content: desc },
    { name: "twitter:site", content: "@skepfuskyjs" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:description", content: desc },
    { name: "twitter:img", content: img },
  ],
});
</script>
