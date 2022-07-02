<template>
  <TheBaseNavbar />
  <slot></slot>
  <TheBaseFooter />
</template>

<script setup lang="ts">
const route = useRoute();
let title = "skep official website";
let desc = "Description";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - skepfusky` : "skepfusky official website";
  },
  meta: [
    { name: "description", content: desc },
    {
      name: "keywords",
      content: "kokoro husky, skepfusky, furry, programming, developer",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:website", content: "website" },
    { name: "twitter:title", content: desc },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:description", content: desc },
  ],
});
</script>
