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
    class="text-kuro-lavender-100 group inline-flex items-center hover:underline"
  >
    <span class="group-hover:text-kuro-lavender-300 whitespace-nowrap">
      <slot />
    </span>
    <LucideArrowUpRight
      v-if="external"
      :size="20"
      class="opacity-50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
    />
  </NuxtLink>
</template>
