<template>
  <TheBaseNavbar />
  <slot></slot>
  <TheBaseFooter />
</template>

<script setup>
const route = useRoute();

let title = "skepfusky official website";
let desc =
  "Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines";
let img = "TBA";
let siteUrl = `https://skepfusky.xyz${route.path}`;

definePageMeta({
  layout: "default",
});

useHead({
  title: route.path === "/" ? title : `${route.meta.title} - skepfusky`,
  meta: [
    { name: "description", content: desc },
    {
      name: "keywords",
      content: "kokoro husky, skepfusky, furry, programming, developer",
    },
    {
      property: "og:title",
      content: route.path === "/" ? title : `${route.meta.title} - skepfusky`,
    },
    {
      property: "og:description",
      content: route.path === "/" ? desc : route.meta.description,
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: img },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "800" },
    { property: "og:url", content: siteUrl },
    {
      name: "twitter:title",
      content: route.path === "/" ? title : `${route.meta.title} - skepfusky`,
    },
    { name: "twitter:site", content: "@skepfuskyjs" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:description",
      content: route.path === "/" ? desc : route.meta.description,
    },
    { name: "twitter:image", content: img },
    { name: "twitter:url", content: siteUrl },
  ],
  link: [{ rel: "canonical", href: siteUrl }],
});
</script>
