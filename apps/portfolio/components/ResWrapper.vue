<script setup lang="ts">
type _ResponsiveShit = number | [number | undefined, number | undefined, string]

defineProps<{
  tag?: keyof HTMLElementTagNameMap
  wh?: _ResponsiveShit
  resWidth?: _ResponsiveShit
  resHeight?: _ResponsiveShit
  px?: _ResponsiveShit
  py?: _ResponsiveShit
}>()
</script>

<template>
  <component
    :is="tag ?? 'div'"
    :class="[wh || (resWidth && resHeight) ? 'has-wh' : undefined]"
    :style="[wh ? `--size: ${wh}` : undefined]"
  >
    <slot />
  </component>
</template>
