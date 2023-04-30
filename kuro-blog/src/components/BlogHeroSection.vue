<script setup lang="ts">
import BlogItem from "./BlogItem.vue"
</script>

<template>
  <section class="px-8 mx-auto max-w-screen-2xl">
    <div class="flex gap-12">
      <BlogItem large class="w-[60%]" title="Why I love BTS 💜" />
      <div class="flex flex-col w-2/5 gap-y-5">
        <BlogItem title='How I started to "love" myself 😏' />
        <BlogItem title="I've done something incredibly DUMB 😳" />
        <BlogItem title="Making egg fried rice with ONE FINGER 🤯" />
      </div>
    </div>
  </section>
</template>
