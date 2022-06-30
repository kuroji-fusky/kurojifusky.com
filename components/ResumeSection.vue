<script setup lang="ts">
const p = defineProps<{
  title?: string;
  techTitle?: string;
}>();
</script>
<template>
  <section>
    <h3 v-if="techTitle" class="resume-heading" data-attr="technologies /">
      {{ techTitle }}
    </h3>
    <h3 v-else class="resume-heading">{{ title }}</h3>
      <slot />
  </section>
</template>

<style lang="scss" scoped>
.resume-heading {
  @apply text-gray-100 text-lg uppercase select-none py-1;

  &[data-attr] {
    &::before {
      content: attr(data-attr);
      @apply pr-2 text-gray-400;
    }
  }
}
</style>
