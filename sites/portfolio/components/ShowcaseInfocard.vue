<script setup lang="ts">
defineProps<
  Partial<{
    title: string
    date: string
    type: string
    icon: string
  }>
>()
</script>

<template>
  <div
    class="from-kuro-skycyan-300 to-kuro-violet-400 grid grid-cols-6 bg-gradient-to-tr via-orange-100"
  >
    <!-- Icon -->
    <div class="bg-kuro-dark2 col-span-1 row-span-2 my-[0.1rem] ml-[0.1rem] flex flex-col p-5">
      <span
        class="font-semi-bold text-kuro-violet-100 text-lg uppercase text-opacity-60"
        aria-hidden
        >Icon</span
      >
      <div class="grid h-full w-full place-items-center">
        <div class="relative aspect-square w-28 transition-transform ease-in hover:scale-110">
          <div class="absolute inset-0 z-[10]" />
          <NuxtImg
            src="/apple-icon-192.png"
            class="absolute inset-0 h-full w-full"
            quality="50"
            format="webp"
            draggable="false"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Title -->
    <div class="bg-kuro-dark2 col-span-3 row-span-2 my-[0.1rem] ml-[0.1rem] flex flex-col p-5">
      <span
        class="font-semi-bold text-kuro-violet-100 text-lg uppercase text-opacity-60"
        aria-hidden
        >Project Title</span
      >
      <span class="font-unbounded text-5xl font-bold">
        {{ title }}
      </span>
    </div>

    <div class="bg-kuro-dark2 col-span-2 mx-[0.1rem] mb-0 mt-[0.1rem] flex flex-col p-6">
      <span
        class="font-semi-bold text-kuro-violet-100 text-lg uppercase text-opacity-60"
        aria-hidden
        >Type</span
      >
      <span>{{ type }}</span>
    </div>
    <div class="bg-kuro-dark2 col-span-2 mx-[0.1rem] my-[0.1rem] flex flex-col p-6">
      <span
        class="font-semi-bold text-kuro-violet-100 text-lg uppercase text-opacity-60"
        aria-hidden
        >Date</span
      >
      <span>{{ date }}</span>
    </div>
  </div>
</template>
