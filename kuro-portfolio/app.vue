<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import { storeToRefs } from "pinia"
import { useNavbarOpenStore } from "./stores"

useHTMLViewport()

const { isNavbarOpen } = storeToRefs(useNavbarOpenStore())

onMounted(() => {
	const lenis = new Lenis({
		duration: 1.125,
		orientation: "vertical",
		smoothWheel: true,
		wheelMultiplier: 1.6,
		smoothTouch: false,
		infinite: false,
	})

	watch(isNavbarOpen, (navOpen) => {
		if (!navOpen) {
			lenis.start()
		} else {
			lenis.stop()
		}
	})

	const raf = (time: any) => {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
})

const config = useRuntimeConfig().public

useHead({
	script: [
		!config.dev
			? {
					src: "https://analytics.umami.is/script.js",
					async: true,
					"data-website-id": config.umami,
			  }
			: {},
	],
})
</script>

<template>
	<main>
		<NuxtPage />
	</main>
</template>
