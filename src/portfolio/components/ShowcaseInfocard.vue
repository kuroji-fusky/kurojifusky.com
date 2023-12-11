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
    class="grid grid-cols-6 bg-gradient-to-tr from-kuro-skycyan-300 via-orange-100 to-kuro-violet-400"
  >
    <!-- Icon -->
    <div
      class="row-span-2 col-span-1 flex flex-col p-5 bg-kuro-dark2 ml-[0.1rem] my-[0.1rem]"
    >
      <span
        class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
        aria-hidden
        >Icon</span
      >
      <div class="w-full h-full grid place-items-center">
        <div
          class="relative aspect-square w-28 hover:scale-110 ease-in transition-transform"
        >
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
    <div
      class="row-span-2 flex flex-col p-5 bg-kuro-dark2 ml-[0.1rem] my-[0.1rem] col-span-3"
    >
      <span
        class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
        aria-hidden
        >Project Title</span
      >
      <span class="font-unbounded text-5xl font-bold">
        {{ title }}
      </span>
    </div>

    <div
      class="flex flex-col p-6 bg-kuro-dark2 mt-[0.1rem] mx-[0.1rem] mb-0 col-span-2"
    >
      <span
        class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
        aria-hidden
        >Type</span
      >
      <span>{{ type }}</span>
    </div>
    <div
      class="flex flex-col p-6 bg-kuro-dark2 my-[0.1rem] mx-[0.1rem] col-span-2"
    >
      <span
        class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
        aria-hidden
        >Date</span
      >
      <span>{{ date }}</span>
    </div>
  </div>
</template>
