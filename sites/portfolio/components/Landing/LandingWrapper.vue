<script setup lang="ts">
defineProps<{ heading: string }>()
</script>

<template>
  <section class="py-12">
    <h1 class="font-unbounded text-5xl uppercase block text-center mb-9">
      {{ heading }}
    </h1>
    <div>
      <slot />
    </div>
  </section>
</template>
