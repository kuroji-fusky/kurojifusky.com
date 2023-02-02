<script setup lang="ts">
const props = defineProps<{
  title: string
  link: string
}>()
</script>

<template>
  <NuxtLink :to="props.link" class="px-4 py-2 rounded-lg border select-none">
    {{ props.title }}
  </NuxtLink>
</template>