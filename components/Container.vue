<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; description?: string }>()
useHead({
  title: props.title,
  meta: [
    { name: "description", content: props.description },
    { name: "twitter:title", content: props.title },
    { name: "twitter:description", content: props.description },
    { name: "twitter:owner", content: "@kurojifusky" },
    { name: "twitter:creator", content: "@kurojifusky" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:title", content: props.title },
    { property: "og:description", content: props.description },
    { property: "og:site_name", content: "Kuroji Dump" },
    { property: "og:type", content: "website" },
  ],
})
</script>

<style scoped></style>
