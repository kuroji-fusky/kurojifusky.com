<script setup lang="ts">
import { ref, onMounted } from "vue"
import kLogo from "../k-logo.vue"

const categories = [
  "Insights",
  "Updates",
  "Design",
  "Engineering",
  "Others",
  "Music"
]

const shelfToggle = ref(false)

const kuroIconRef = ref<HTMLElement | null>(null)
const shelfBlog = ref<HTMLElement | null>(null)
const shelfKuro = ref<HTMLElement | null>(null)

const handleLogoClicc = () => {
  shelfToggle.value = !shelfToggle.value

  console.log(shelfToggle.value)
}
</script>

<template>
  <header class="bg-kuro-dark1 sticky top-0 z-[2]">
    <nav class="flex items-center max-w-screen-2xl py-4 px-9 mx-auto">
      <div class="flex items-center w-full gap-x-3.5">
        <button
          ref="kuroIconRef"
          @click="handleLogoClicc"
          class="cursor-pointer"
        >
          <kLogo />
        </button>
        <span class="mx-1 text-2xl opacity-50 select-none">/</span>
        <div class="relative flex items-center">
          <a
            ref="shelfBlog"
            id="shelf-blog"
            href="/"
            class="absolute -top-2 left-0 transition-[transform,opacity] duration-300 inline-flex gap-x-3.5 items-center font-bold text-3xl"
            :class="[
              shelfToggle
                ? 'translate-y-6 opacity-0 scale-y-50 pointer-events-none'
                : ''
            ]"
          >
            <img
              src="/favicon.png"
              alt="Kuroji drawn by MintyChipMocha"
              width="33px"
              class="aspect-square"
            />
            <span class="select-none"> Blog </span>
          </a>
          <div
            ref="shelfKuro"
            id="shelf-kuro"
            class="transition-[transform,opacity] duration-300 inline-flex gap-x-3.5 items-center"
            :class="[
              !shelfToggle
                ? '-translate-y-6 opacity-0 scale-y-50 pointer-events-none'
                : ''
            ]"
          >
            content
          </div>
        </div>
      </div>
      <div class="flex items-center w-full justify-end text-[1.025rem]">
        <span
          class="transition-colors duration-150 group px-3.5 py-2.5 rounded-md relative select-none hover:bg-kuro-lavender-700 hover:bg-opacity-50"
        >
          Categories
          <div
            class="py-3 group-hover:opacity-100 group-focus:opacity-100 group group-hover:pointer-events-auto group-hover:translate-y-0 group-focus:translate-y-0 translate-y-1 ease-in-out transition-[opacity,transform] duration-200 opacity-0 pointer-events-none absolute left-0 top-10"
          >
            <div
              class="bg-kuro-dark2 p-2 grid rounded-md border border-kuro-violet-600"
            >
              <a
                v-for="(item, index) in categories"
                :key="index"
                :href="`/category/${item.toLocaleLowerCase()}`"
                class="transition-colors duration-150 px-3 py-2.5 hover:bg-kuro-lavender-600 hover:bg-opacity-75 rounded-md"
              >
                {{ item }}
              </a>
            </div>
          </div>
        </span>
        <a
          href="/about-me"
          class="transition-colors duration-200 px-3.5 py-2.5 rounded-md relative select-none hover:bg-kuro-lavender-700 hover:bg-opacity-50"
        >
          About me
        </a>
      </div>
    </nav>
  </header>
</template>
