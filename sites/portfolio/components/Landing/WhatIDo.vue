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
      class="relative mx-auto flex h-[40rem] max-w-screen-2xl flex-col gap-5 rounded-md border border-[rgb(var(--wid-primary))] px-5 py-3 shadow-lg transition-[border-color]"
      :style="{
        '--wid-primary': endevorList[endevorIndex].color[0],
        '--wid-secondary': endevorList[endevorIndex].color[1]
      }"
    >
      <div class="flex w-full flex-wrap justify-center gap-3">
        <button
          v-for="(btn, index) in endevorList"
          :key="index"
          :aria-selected="index == endevorIndex"
          :class="[
            'rounded-3xl bg-[rgb(var(--wid-primary)/var(--tw-bg-opacity))] px-4 py-1.5 transition-colors',
            index == endevorIndex ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-75'
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
