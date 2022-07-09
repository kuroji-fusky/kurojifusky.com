<template>
  <ul id="dropdown-list">
    <li v-if="heading">
      <h5>{{ heading }}</h5>
    </li>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{ heading?: string }>()
</script>

<style lang="scss" scoped>
h5 {
  @apply block px-3 py-1;
}

li {
  @apply p-0 #{!important};
}
</style>
