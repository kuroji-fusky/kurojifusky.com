<template>
  <li>
    <NuxtLink v-if="extLink" :href="extLink">
      {{ title }}
    </NuxtLink>
    <NuxtLink v-else :to="pageLink">
      {{ title }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
interface DropdownItemProps {
  title: string
  pageLink?: string
  extLink?: string
}

const props = withDefaults(defineProps<DropdownItemProps>(), {
  title: "Test",
  pageLink: "#",
})
</script>

<style scoped>
a {
  @apply block px-3 py-0.5 transition-all duration-200 hover:bg-neutral-400 rounded-md;
}
</style>
