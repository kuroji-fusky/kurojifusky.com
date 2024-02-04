<script setup lang="ts">
const preloadBaseUrl =
  "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/f_auto,q_85,w_280/fursonas/comms/"

const cuties = [
  {
    file: "toboshiro_icon.png",
    artist: "Tobo Shiro",
    link: "https://www.etsy.com/shop/toboshirosworkshop"
  },
  {
    file: "dougly_Icon2.png",
    artist: "sadcat16hrz",
    link: "https://twitter.com/sadcat16hrz"
  },
  {
    file: "MCM_headshot-comm.png",
    artist: "MintyChipMocha",
    link: "https://www.youtube.com/@MintyChipMocha"
  },
  {
    file: "Icon_sunbaestudios.png",
    artist: "SamoyedRoseCreations",
    link: "https://www.etsy.com/shop/SamoyedRoseCreations"
  },
  {
    file: "IMG_2094.png",
    artist: "TheMysticalMango",
    link: "https://www.etsy.com/shop/TheMysticalMango"
  },
  {
    file: "IMG-20230728-WA0005.jpg",
    artist: "Lumyhuh",
    link: "https://www.etsy.com/shop/Moonbats"
  },
  {
    file: "nepukamiArts_2000.jpg",
    artist: "nepukami",
    link: "https://www.etsy.com/shop/nepukamiArts"
  }
]

const cutieImg = ref<HTMLDivElement>()
const currentCutieIndex = ref(1)

const changeCutie = () => {
  console.log("*moans*")

  currentCutieIndex.value = Math.floor(Math.random() * cuties.length)
}
</script>

<template>
  <div class="h-[100dvh] grid place-items-center relative -top-12">
    <div class="flex flex-col gap-y-5 items-center justify-center">
      <div class="relative">
        <button
          @click="changeCutie"
          class="before:absolute before:block before:inset-0"
        >
          <NuxtImg
            ref="cutieImg"
            provider="cloudinary"
            width="280"
            :src="`/fursonas/comms/${cuties[currentCutieIndex].file}`"
            fetchpriority="high"
            draggable="false"
            alt="A goddamn cutie"
            class="rounded-2xl aspect-square"
          />
        </button>
      </div>
      <div class="text-base">
        <span class="opacity-50">{{ "Art by " }}</span>
        <KuroLink :href="cuties[currentCutieIndex].link" external>{{
          cuties[currentCutieIndex].artist
        }}</KuroLink>
      </div>
      <article class="w-2/3 xl:w-4/6 text-center flex flex-col gap-y-5 mt-8">
        <p>
          Hello! I'm a random floof on the internet making cool things mostly
          for the fun of it! I go by a blue-yellow fox-husky hybrid fluffy
          animal named "Kuroji" (koo-ROW-jee).
        </p>
        <p>
          As a self-taught individual, I strive to inspire future generations
          through my unique vision and delivering high-quality products whilst
          incorporating my weird and self-deprecating humor.
        </p>
      </article>
    </div>
  </div>
</template>
