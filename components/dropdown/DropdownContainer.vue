<template>
  <div id="dropdown" :class="class">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>