<script setup lang="ts">
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: "/" })

useSeoMeta({
  title: "You just got 404'd lol"
})

const shitQuotes = [
  {
    message: "That was nuts!",
    reference: "Daggett, The Angry Beavers"
  },
  {
    message: "The plug thing! It's not plugged!",
    reference: "GIR, from Megadoomer, Invader Zim"
  },
  {
    message: "Why was there bacon in the soap?!",
    reference: "Rise of the Zitboy, Invader Zim"
  },
  {
    message: "I'm gonna roll around the floor for a little bit. 'Kay?",
    reference: "GIR, from Germs, Invader Zim"
  },
  {
    message: "Yeah! I'm gonna be SIIICK!",
    reference: "GIR, Invader Zim"
  },
  {
    message: "Invite Dib over? That's insane! Even for YOU!",
    reference: "Return of Keef, Invader Zim"
  }
]

const randomQuote = shitQuotes[Math.floor(Math.random() * shitQuotes.length)]
</script>

<template>
  <NuxtLayout>
    <div class="grid place-items-center h-screen">
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="text-6xl font-bold">{{ error!.statusCode }}</h1>
        <blockquote class="flex flex-col gap-y-1.5 items-center">
          <em class="text-xl">
            {{ randomQuote.message }}
          </em>
          <span class="opacity-70">
            {{ `— ${randomQuote.reference}` }}
          </span>
        </blockquote>
        <div>
          <p>{{ error!.statusMessage }}</p>
        </div>
        <button
          @click="handleError"
          class="px-5 py-3 rounded-md bg-kuro-lavender-800 hover:bg-kuro-lavender-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
