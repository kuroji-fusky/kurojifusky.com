<script setup lang="ts">
withDefaults(
  defineProps<{
    readonly landing?: boolean
  }>(),
  { landing: false }
)
</script>

<template>
  <ResWrapper
    tag="header"
    class="z-[4] flex justify-between items-center inset-0 bottom-[unset] fixed"
    :px="[5, 4, 3]"
    :py="2.125"
  >
    <ResWrapper extract-var>
      <NuxtLink to="/" class="px-[var(--px-scoped)] py-[var(--py-scoped)]">
        <KurojiFuskyIcon
          class="w-[12rem]"
          role="img"
          aria-label="Kuroji Fusky"
        />
      </NuxtLink>
    </ResWrapper>
    <ResWrapper
      tag="button"
      aria-label="Toggle menu"
      :wh="20"
      class="w-10 h-10 flex flex-col justify-center gap-y-3"
    >
      <div
        class="border-0 border-b-2 border-white w-full"
        v-for="_ in Array(2)"
      />
    </ResWrapper>
  </ResWrapper>
</template>
