<script setup lang="ts">
withDefaults(
  defineProps<{
    readonly landing?: boolean
  }>(),
  { landing: false }
)
</script>

<template>
  <header
    class="z-[4] flex justify-between items-center inset-0 bottom-[unset] fixed px-12 py-4"
  >
    <NuxtLink to="/">
      <KurojiFuskyIcon
        role="img"
        aria-label="Kuroji Fusky"
      />
    </NuxtLink>
    <button
      aria-label="Toggle menu"
      :wh="20"
      class="w-10 h-10 flex flex-col justify-center gap-y-3"
    >
      <div
        class="border-0 border-b-2 border-white w-full"
        aria-hidden="true"
        v-for="_ in Array(2)"
      />
    </button>
  </header>
</template>
