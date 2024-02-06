<script setup lang="ts">
import gsap from "gsap"
import { cuties } from "~/constants"

const cutieImg = ref<HTMLDivElement>()
const cutieIndex = ref(1)

const changeCutie = () => {
  let randomCutie: number

  setTimeout(() => {
    do {
      randomCutie = Math.floor(Math.random() * cuties.length)
    } while (randomCutie === cutieIndex.value)

    cutieIndex.value = randomCutie
  }, 200)
}

const picWrapper = ref<HTMLDivElement>()
const artistCredit = ref<HTMLDivElement>()

useGsapContext(picWrapper.value, () => {
  const wrappies = picWrapper.value
  const creditText = artistCredit.value

  const options: gsap.TweenVars = {
    duration: 0.5,
    ease: "power2"
  }

  const rotSetterX = gsap.quickTo(wrappies as gsap.TweenTarget, "rotationX", options)
  const rotSetterY = gsap.quickTo(wrappies as gsap.TweenTarget, "rotationY", options)
  const cardScaleSetterW = gsap.quickTo(wrappies as gsap.TweenTarget, "scaleX", options)
  const cardScaleSetterH = gsap.quickTo(wrappies as gsap.TweenTarget, "scaleY", options)

  window.addEventListener("mousemove", (e) => {
    const dimH = window.innerHeight / 2 - e.y
    const dimW = window.innerWidth / 2 - e.x

    rotSetterX(dimH / 26)
    rotSetterY(dimW / (32 * -1))
  })

  const changeWrapperScale = (scale: number) => {
    cardScaleSetterW(scale)
    cardScaleSetterH(scale)
  }

  wrappies!.addEventListener("mouseenter", () => changeWrapperScale(1.12))
  wrappies!.addEventListener("mouseleave", () => changeWrapperScale(1))
})
</script>

<template>
  <section class="relative -top-12 grid h-[100dvh] place-items-center">
    <div class="flex flex-col items-center justify-center gap-y-5">
      <div class="relative">
        <button
          ref="picWrapper"
          @click="changeCutie"
          class="before:absolute before:inset-0 before:block"
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
            :class="['aspect-square rounded-2xl', i === cutieIndex ? '' : 'hidden']"
          />
        </button>
      </div>
      <div ref="artistCredit" class="text-base">
        <span class="opacity-50">{{ "Art by " }}</span>
        <KuroLink :href="cuties[cutieIndex].link" external>{{
          cuties[cutieIndex].artist
        }}</KuroLink>
      </div>
      <article class="mt-8 flex w-2/3 flex-col gap-y-5 text-center xl:w-4/6">
        <h1 class="sr-only">Introduction</h1>
        <p>
          Hello! I make cool things mostly for the fun of it! I go by a blue-yellow fox-husky hybrid
          fluffy animal named "Kuroji" (koo-ROW-jee).
        </p>
        <p>
          As a self-taught individual, I strive to inspire future generations through my unique
          vision and delivering high-quality end products whilst incorporating my strange humor to
          the mix.
        </p>
      </article>
    </div>
  </section>
</template>
