d
<script setup lang="ts">
const endevorIndex = ref(0)
const endevorList = [
  {
    icon: "WIP",
    text: "VFX & Film",
    description: "Me make shit video",
    color: ["247 90 79", "227 145 64"],
    examples: []
  },
  {
    icon: "WIP",
    text: "Engineering",
    description: "I like to code lmao",
    color: ["blue", "green"],
    examples: []
  },
  {
    icon: "WIP",
    text: "UI/UX Design",
    description: "I've been designing stuff lol",
    color: ["green", "yellow"],
    examples: []
  },
  {
    icon: "WIP",
    text: "Music",
    description: "I make instrumental trash",
    color: ["purple", "brown"],
    examples: []
  }
]
</script>

<template>
  <LandingWrapper heading="What I Do">
    <div
      class="relative border border-[rgb(var(--wid-primary))] transition-[border-color] rounded-md shadow-lg px-5 py-3 max-w-screen-2xl mx-auto flex flex-col gap-5 h-[40rem]"
      :style="{
        '--wid-primary': endevorList[endevorIndex].color[0],
        '--wid-secondary': endevorList[endevorIndex].color[1]
      }"
    >
      <div class="flex justify-center w-full gap-3 flex-wrap">
        <button
          v-for="(btn, index) in endevorList"
          :key="index"
          :aria-selected="index == endevorIndex"
          :class="[
            'px-4 rounded-3xl py-1.5 bg-[rgb(var(--wid-primary)/var(--tw-bg-opacity))] transition-colors',
            index == endevorIndex
              ? 'bg-opacity-100'
              : 'bg-opacity-50 hover:bg-opacity-75'
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
  </LandingWrapper>
</template>
