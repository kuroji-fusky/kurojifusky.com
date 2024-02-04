<script setup lang="ts">
defineProps<{ heading: string }>()
</script>

<template>
  <section>
    <h1>{{ heading }}</h1>
    <div>
      <slot />
    </div>
  </section>
</template>
