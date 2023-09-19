<script setup lang="ts">
defineProps<
  Partial<{
    title: string
    description: string
    date: string | unknown
    img: string
    category: string[]
    big: boolean
  }>
>()
</script>

<template>
  <article :class="['flex gap-7', !big ? 'flex-row' : 'flex-col']">
    <a
      href="#"
      :class="[
        'flex relative before:absolute before:block before:inset-0',
        !big && 'mb-auto flex-shrink-0 w-2/6'
      ]"
      draggable="false"
    >
      <img
        :class="[
          'object-cover w-full h-full rounded-lg ',
          !big ? 'aspect-square' : 'aspect-[12/6]'
        ]"
        :src="
          img ||
          'https://images.ctfassets.net/1wy7cxqsia50/mAZvCqagMSGHRNBRCo6fG/50ad301404a132586b73b165f648a658/Untitled101_20230316135154.png'
        "
        alt=""
        draggable="false"
      />
    </a>
    <div class="flex flex-col">
      <div class="flex flex-wrap gap-4">
        <span>Category</span>
        <span>Category</span>
        <span>Category</span>
        <span>Category</span>
      </div>
      <h2 :class="['my-4', !big ? 'text-3xl' : 'text-5xl']">
        {{ title }}
      </h2>
      <p class="text-lg leading-7">
        {{ description }}
      </p>
    </div>
  </article>
</template>
