<script setup lang="ts">
import BlogPostRenderer from "./BlogPostRenderer.vue"

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
    <!-- <nav class="flex justify-center gap-x-2.5 select-none">
      <button
        v-for="({ name, filter }, i) in lmao"
        :key="i"
        class="px-4 py-1.5 rounded-2xl bg-kuro-dark2 relative before:content-[''] before:absolute before:-inset-[1px] before:rounded-2xl before:bg-gradient-to-t before:from-kuro-violet-600 before:to-kuro-lavender-700 before:-z-[1] before:opacity-50 hover:before:opacity-100 before:transition-opacity"
      >
        <span class="whitespace-nowrap">{{ name }}</span>
      </button>
    </nav> -->
  </section>
  <section>
    <div class="w-full flex gap-12">
      <BlogPostRenderer
        class="flex-shrink-0 w-[60%]"
        big
        img="https://images.ctfassets.net/1wy7cxqsia50/5wIqmoYZ0I1f21GSf1UKZH/a71fa5c9dc378a8ebb36a5288b2365b0/Banner_hero_1_.png"
        title="A new chapter for MyFursona"
        description="A soon-to-be social art platform to cater artists and users for managing their characters and keep track of commissions and adoptables"
      />
      <div class="flex flex-col gap-y-9">
        <BlogPostRenderer
          title="Beware of fake and cheap fursuits!"
          description="There are ripoff fursuits from Chinese e-commerce websites, why you shouldn't buy these suits, and look for their original suiters that are commonly ripped from scammers!"
        />
        <BlogPostRenderer
          title="Programming Language's Supersets"
          img="https://images.ctfassets.net/1wy7cxqsia50/73ZC5QBXyJxv3h4dXQYYau/0d6a1f06b5187967483a71c5f40735e6/Frame_70.png"
          description='In the world of software development, we often encounter terms like "superset" and "subset" when discussing the relationships between programming languages.'
        />
        <BlogPostRenderer
          title='Origins of my "Kuroji Fusky" fursona'
          description="How I made my fox-husky character lmfao"
        />
      </div>
    </div>
    <aside class="w-2/6 flex-shrink-0">
      <h2>Latest posts</h2>
    </aside>
  </section>
</template>
