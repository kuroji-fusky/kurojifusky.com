<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

useSeoMeta({
  title: "You just got 404'd lol",
});

const shitQuotes = [
  {
    message: "The plug thing! It's not plugged!",
    reference: "GIR, from Megadoomer, Invader Zim",
  },
  {
    message: "MEATPOLES! YAAAAAAY!",
    reference: "Crainer, SSundee's SkyFactory S2E21",
  },
  {
    message: "Why was there bacon in the soap?!",
    reference: "Rise of the Zitboy, Invader Zim",
  },
  {
    message: "I'm gonna roll around the floor for a little bit. 'Kay?'",
    reference: "GIR, from Germs, Invader Zim",
  },
  {
    message: "Yeah! I'm gonna be SIIICK!",
    reference: "GIR, Invader Zim",
  },
  {
    message: "LIIIIES! THE FILTHY EARTH BOY LIIIIES!!",
    reference: "Zim, Invader Zim",
  },
  {
    message: "Invite Dib over? That's insane! Even for YOU!",
    reference: "Return of Keef, Invader Zim",
  },
  {
    message:
      "I'll throw an ender pearl so hard at your face, it'll teleport to your nose to your butt... smell that crap!",
    reference: "Derp SSundee",
  },
];

const randomQuote = shitQuotes[Math.floor(Math.random() * shitQuotes.length)];
</script>

<template>
  <NuxtLayout>
    <h1 class="text-6xl font-bold">{{ error!.statusCode }}</h1>
    <blockquote class="flex flex-col gap-y-1.5 items-end">
      <em class="text-xl">
        {{ randomQuote.message }}
      </em>
      <p class="before:content-['—']">
        {{ randomQuote.reference }}
      </p>
    </blockquote>
    <div>
      <p>{{ error!.statusMessage }}</p>
    </div>
    <button
      @click="handleError"
      class="px-4 py-2 rounded-md bg-kuro-lavender-800"
    >
      GTFO
    </button>
  </NuxtLayout>
</template>
