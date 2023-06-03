<script setup lang="ts">
import { AlertTriangleIcon } from "lucide-vue-next"

usePageMeta({
  title: "Under construction",
  description: "The site is temporarily down at the moment."
})
</script>

<template>
  <div class="p-12 pt-28 mx-auto max-w-screen-xl">
    <article class="p-5 border rounded-md border-kuro-yellow-600 prose-p:mt-3">
      <h1
        class="font-inter font-bold flex gap-x-2 text-2xl items-center text-kuro-yellow-600 prose-p:text-kuro-yellow-100"
      >
        <AlertTriangleIcon :size="32" />
        Website Under Construction
      </h1>
      <p>
        It's no secret writing and maintaining a website entirely by code is
        difficult! (and painful too)
      </p>

      <p>
        It's always in a limbo state where most parts of the site are finished
        while others are still either broken or not working properly. For a long
        time, I always change the way I make websites with a different framework
        last year, as some of the necessary parts weren't there at the time.
      </p>
      <p>
        Hopefully I can get it up and running in again this time! Please
        understand that I'm just a passionate individual that does all of this
        as a hobby, it will take ages to complete.
      </p>
      <p>Something epic is coming soon...</p>
    </article>
  </div>
</template>
