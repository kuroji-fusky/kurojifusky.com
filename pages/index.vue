<script setup lang="ts">
import Lenis from "@studio-freight/lenis"

usePageMeta({
	title: "Kuroji Fusky: Building abominations since 2013",
	description:
		"A terrible website with mind-blowing visuals, created by a furry btw lol",
})

onMounted(() => {
	const lenis = new Lenis({
		duration: 1.125,
		orientation: "vertical",
		gestureOrientation: "vertical",
		smoothWheel: true,
		wheelMultiplier: 1,
		smoothTouch: false,
		touchMultiplier: 2,
		infinite: false,
	})

	const raf = (time: any) => {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
})
</script>

<template>
	<div class="min-h-screen">
		<div>
			<LandingHero />
			<LandingIntro />
			<BiroResponsive
				class="sticky bottom-0 left-0 right-0 bg-red-200 -z-[1]"
				aria-hidden="true"
			></BiroResponsive>
		</div>
		<LandingProjects />
	</div>
</template>

<style>
pre[class*="language-"] {
	@apply m-0;
}

code[class*="language-"] {
	@apply font-jetbrains-mono;
}
</style>
