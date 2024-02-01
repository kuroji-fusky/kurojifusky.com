<script setup lang="ts"></script>

<template>
  <div class="h-[100dvh] grid place-items-center relative -top-12">
    <div class="flex flex-col gap-y-5 items-center justify-center">
      <div class="relative before:absolute before:block before:inset-0">
        <div id="change_fursona_interactive">
          <NuxtImg
            provider="cloudinary"
            width="280"
            src="/fursonas/comms/toboshiro_icon.png"
            fetchpriority="high"
            draggable="false"
            alt="A goddamn cutie"
            class="rounded-2xl aspect-square"
          />
        </div>
        <div
          class="absolute -inset-12 rounded-2xl border-2 border-white pointer-events-none opacity-20"
        />
        <div
          class="absolute -inset-32 rounded-2xl border-2 border-white pointer-events-none opacity-15"
        />
        <div
          class="absolute -inset-52 rounded-2xl border-2 border-white pointer-events-none opacity-10"
        />
        <div
          class="absolute -inset-72 rounded-2xl border-2 border-white pointer-events-none opacity-5"
        />
      </div>
      <div class="text-base">
        <span class="opacity-50">{{ "Art by " }}</span>
        <KuroLink href="https://www.etsy.com/shop/toboshirosworkshop" external
          >Tobo Shiro</KuroLink
        >
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
