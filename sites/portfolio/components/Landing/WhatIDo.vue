d
<script setup lang="ts">
const endevorIndex = ref(0)
const endevorList = [
  {
    icon: "WIP",
    text: "VFX & Film",
    description: "Me make shit video",
    examples: []
  },
  {
    icon: "WIP",
    text: "Engineering",
    description: "I like to code lmao",
    examples: []
  },
  {
    icon: "WIP",
    text: "UI/UX Design",
    description: "I've been designing stuff lol",
    examples: []
  },
  {
    icon: "WIP",
    text: "Music",
    description: "I make instrumental trash",
    examples: []
  }
]
</script>

<template>
  <div class="px-6 py-12">
    <h2 class="font-unbounded text-5xl uppercase block text-center mb-9">
      {{ "What I Do" }}
    </h2>
    <div
      class="rounded-md shadow-lg shadow-kuro-royalblue-200 px-5 py-3 max-w-screen-2xl mx-auto flex flex-col gap-5 h-[40rem]"
    >
      <div class="flex justify-center w-full gap-3 flex-wrap">
        <button
          v-for="(btn, index) in endevorList"
          :key="index"
          :aria-selected="index == endevorIndex"
          :class="[
            'px-4 rounded-3xl py-1.5',
            index == endevorIndex ? 'bg-red-700' : 'bg-gray-700'
          ]"
          @click="() => (endevorIndex = index)"
        >
          {{ btn.text }}
        </button>
      </div>
      <div class="h-full w-full">
        <div
          :key="index"
          v-for="(shit, index) in endevorList"
          :class="[endevorIndex === index ? '' : 'hidden']"
        >
          <h2 class="sr-only">
            {{ shit.text }}
          </h2>
          <p>
            {{ shit.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
