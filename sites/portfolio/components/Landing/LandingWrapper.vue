<script setup lang="ts">
defineProps<{ heading: string }>()
</script>

<template>
  <section class="py-12">
    <h1 class="font-unbounded mb-9 block text-center text-5xl uppercase">
      {{ heading }}
    </h1>
    <div>
      <slot />
    </div>
  </section>
</template>
