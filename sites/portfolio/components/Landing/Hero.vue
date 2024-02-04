<script setup lang="ts">
import gsap from "gsap"
import cuties from "../../constants/cuties"

const cutieImg = ref<HTMLDivElement>()
const currentCutieIndex = ref(1)

const changeCutie = () => {
  let randomCutie: number

  do {
    randomCutie = Math.floor(Math.random() * cuties.length)
  } while (randomCutie === currentCutieIndex.value)

  currentCutieIndex.value = randomCutie
}

const picWrapper = ref<HTMLDivElement>()
const artistCredit = ref<HTMLDivElement>()

useGsapContext(() => {
  const wrappies = picWrapper.value
  const creditText = artistCredit.value as gsap.TweenTarget

  const options = {
    duration: 0.5,
    ease: "power2"
  }

  const rotSetterX = gsap.quickTo(
    wrappies as gsap.TweenTarget,
    "rotationX",
    options
  )
  const rotSetterY = gsap.quickTo(
    wrappies as gsap.TweenTarget,
    "rotationY",
    options
  )

  const cardScaleSetterW = gsap.quickTo(
    wrappies as gsap.TweenTarget,
    "scaleX",
    options
  )
  const cardScaleSetterH = gsap.quickTo(
    wrappies as gsap.TweenTarget,
    "scaleY",
    options
  )

  window.addEventListener("mousemove", (e) => {
    const dimH = window.innerHeight / 2 - e.y
    const dimW = window.innerWidth / 2 - e.x

    rotSetterX(dimH / 26)
    rotSetterY(dimW / (32 * -1))
  })

  const handleScale = (aydol: number) => {
    cardScaleSetterW(aydol)
    cardScaleSetterH(aydol)
  }

  wrappies!.addEventListener("mouseenter", () => handleScale(1.12))
  wrappies!.addEventListener("mouseleave", () => handleScale(1))
}, picWrapper.value!)
</script>

<template>
  <section class="h-[100dvh] grid place-items-center relative -top-12">
    <div class="flex flex-col gap-y-5 items-center justify-center">
      <div class="relative">
        <button
          ref="picWrapper"
          @click="changeCutie"
          class="before:absolute before:block before:inset-0"
        >
          <NuxtImg
            v-for="(cutie, i) in cuties"
            :key="i"
            format="webp"
            ref="cutieImg"
            provider="cloudinary"
            width="280"
            :src="`/fursonas/comms/${cutie.file}`"
            fetchpriority="high"
            draggable="false"
            alt="A goddamn cutie"
            :class="[
              'rounded-2xl aspect-square',
              i === currentCutieIndex ? '' : 'hidden'
            ]"
          />
        </button>
      </div>
      <div ref="artistCredit" class="text-base">
        <span class="opacity-50">{{ "Art by " }}</span>
        <KuroLink :href="cuties[currentCutieIndex].link" external>{{
          cuties[currentCutieIndex].artist
        }}</KuroLink>
      </div>
      <article class="w-2/3 xl:w-4/6 text-center flex flex-col gap-y-5 mt-8">
        <h1 class="sr-only">Introduction</h1>
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
  </section>
</template>
