<script setup lang="ts">
const lmao = [
  { name: "All", filter: "" },
  { name: "Updates", filter: "updates" },
  { name: "Insights", filter: "insights" },
  { name: "UI/UX and Design", filter: "design" },
  { name: "Engineering", filter: "engineering" },
  { name: "Music", filter: "music" }
]
</script>

<template>
  <section class="pb-4 pt-6">
    <nav class="flex justify-center gap-x-2.5 select-none">
      <button
        v-for="({ name, filter }, i) in lmao"
        :key="i"
        class="px-4 py-1.5 rounded-2xl bg-kuro-dark2 relative before:content-[''] before:absolute before:-inset-[1px] before:rounded-2xl before:bg-gradient-to-t before:from-kuro-violet-600 before:to-kuro-lavender-700 before:-z-[1] before:opacity-50 hover:before:opacity-100 before:transition-opacity"
      >
        <span class="whitespace-nowrap">{{ name }}</span>
      </button>
    </nav>
  </section>
  <section>
    <div class="w-full">picked posts</div>
    <aside class="w-2/6 flex-shrink-0">
      <h2>Latest posts</h2>
    </aside>
  </section>
</template>
