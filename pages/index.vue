<script setup lang="ts">
import Lenis from "@studio-freight/lenis"

usePageMeta({
	title: "Kuroji Fusky - building abominations since 2013",
	description:
		"A terrible website with mind-blowing visuals, created by a furry btw lol",
})

onMounted(() => {
	const lenis = new Lenis({
		duration: 1.125,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		direction: "vertical",
		gestureDirection: "vertical",
		smooth: true,
		mouseMultiplier: 1,
		smoothTouch: false,
		touchMultiplier: 2,
		infinite: false,
	})

	// @ts-ignore
	// lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
	// 	console.log({ scroll, limit, velocity, direction, progress })
	// })

	function raf(time: any) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
})
</script>

<template>
	<div class="min-h-screen">
		<LandingHero />
    <LandingWhoAmI />
    <LandingProjects />
	</div>
</template>
