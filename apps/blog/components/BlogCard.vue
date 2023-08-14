<script setup lang="ts">
defineProps<{
  title: string
  banner: string
  slug: string
  tag?: string
  date?: string
  category: string[]
}>()
</script>

<template>
  <div
    class="flex flex-col px-0 py-6 pt-4 border-0 border-b-2 rounded-none md:rounded-lg md:border-2 md:pt-6 md:px-5 gap-y-2 border-kuro-lavender-800"
  >
    <NuxtLink
      :to="`/post/${slug}`"
      class="mb-2 overflow-hidden rounded-md"
      prefetch
    >
      <NuxtImg
        :src="banner"
        class="aspect-[16/7.85] w-full object-cover scale-[1.01] md:hover:scale-105 transition-transform duration-300 h-full"
        sizes="400px lg:600px"
        format="webp"
        decoding="async"
        loading="eager"
        quality="60"
        preload
      />
    </NuxtLink>
    <div class="flex items-center gap-x-1.5">
      <NuxtLink
        class="text-sm py-0.5 px-3 rounded-3xl bg-kuro-lavender-800 hover:bg-kuro-lavender-900"
        v-for="name in category"
        :to="`/category/${name.toLowerCase()}`"
        prefetch
        >{{ name }}</NuxtLink
      >
    </div>
    <NuxtLink
      :to="`/post/${slug}`"
      class="text-[1.725rem] leading-9 font-bold font-inter hover:text-violet-300 hover:underline"
    >
      {{ title }}
    </NuxtLink>
    <Timestamp class="text-sm" :date="(date as string)" />
  </div>
</template>
