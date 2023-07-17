<script setup lang="ts">
defineProps<{
  title: string
  banner: string
  slug: string
  tag?: string
  date?: string
}>()
</script>

<template>
  <div
    class="flex flex-col px-5 py-6 border rounded-lg gap-y-2 border-kuro-lavender-700"
  >
    <NuxtLink :to="`/post/${slug}`" class="overflow-hidden rounded-lg">
      <NuxtImg
        :src="banner"
        class="aspect-[16/8] w-full object-cover hover:scale-105 transition-transform duration-300"
        sizes="300px lg:600px"
        format="webp"
        decoding="async"
        loading="eager"
        quality="69"
        preload
      />
    </NuxtLink>
    <NuxtLink
      :to="`/post/${slug}`"
      class="pt-2 text-[1.725rem] font-bold font-inter hover:text-violet-300 hover:underline"
    >
      {{ title }}
    </NuxtLink>
    <div class="flex gap-x-3.5">
      <p>tag</p>
      <Timestamp :date="(date as string)" />
    </div>
  </div>
</template>
