<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default"
})
</script>

<style>
body {
  @apply bg-gradient-to-tr from-sona-royalblue-900 to-sona-borahae-900 text-neutral-50;
}
</style>
