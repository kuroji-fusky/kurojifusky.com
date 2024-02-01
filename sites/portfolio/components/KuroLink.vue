<script setup lang="ts">
defineProps<{
  href: string
  external?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="href"
    :target="!external ? null : '_blank'"
    class="hover:underline inline-flex items-center text-kuro-lavender-100 group"
  >
    <span class="whitespace-nowrap group-hover:text-kuro-lavender-300">
      <slot />
    </span>
    <LucideArrowUpRight
      v-if="external"
      :size="20"
      class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </NuxtLink>
</template>
