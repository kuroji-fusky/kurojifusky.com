<template>
  <div class="grid place-items-center h-viewport">
    <div class="flex flex-col items-center z-10 text-center px-7 select-none">
      <h1 class="text-6xl">404</h1>
      <strong class="text-xl">...oh hey you're here!</strong>
      <hr class="w-[25%] my-5" />
      <p>
        This website is still under construction. Most of the links you've just clicked on doesn't exist... for now.
      </p>
      <p>
        Either, I'm waiting for other plugins to be supported, or I'm
        just lazy and can't be bothered lol
      </p>
      <NuxtLink
        to="/"
        class="mt-8 py-2 px-3 card-hoverable bg-neutral-900 hover:bg-sona-borahae-700"
      >
        Back to homepage</NuxtLink
      >
    </div>
  </div>
  <div class="fixed inset-0 grid place-items-center opacity-30">
    <div
      class="-z-1 w-[110%] rotate-12 h-[24rem] bg-gradient-to-l from-sona-borahae-600 via-sona-royalblue-500 to-sona-skycyan-600 opacity-50 blur-[300px]"
    ></div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "oof a 404 page",
})
</script>
