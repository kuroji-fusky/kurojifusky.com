<script setup lang="ts">
defineProps<{
  img: string
  reverse?: boolean
}>()
</script>

<template>
  <div :class="['flex', !reverse ? 'flex-row' : 'flex-row-reverse']">
    <div>
      <slot />
    </div>
    <NuxtImg :src="img" alt="" provider="cloudinary" quality="75" width="400" />
  </div>
</template>
