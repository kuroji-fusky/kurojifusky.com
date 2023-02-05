<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

useCalcViewport()

useHead({
	titleTemplate: (titleChunk) =>
		titleChunk === "Kuroji Fusky" ? titleChunk : `${titleChunk} - Kuroji Fusky`,
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
