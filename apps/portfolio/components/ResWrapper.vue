<script setup lang="ts">
type _ResponsiveShit =
  | number
  | [number | undefined, number | undefined, string | undefined]

defineProps<{
  tag?: keyof HTMLElementTagNameMap
  wh?: _ResponsiveShit
  size?: number
  px?: _ResponsiveShit
  py?: _ResponsiveShit
}>()
</script>

<template>
  <component
    :is="tag ?? 'div'"
    :style="[size ? `--size: calc(var(--vw) * ${size})` : undefined]"
  >
    <slot />
  </component>
</template>
