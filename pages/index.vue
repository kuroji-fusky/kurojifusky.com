<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import { Heart } from "lucide-vue-next"

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
				class="sticky bottom-0 left-0 w-full right-0 bg-red-200 -z-[1]"
				aria-hidden="true"
			>
				<GridBackdrop />
			</BiroResponsive>
		</div>
		<LandingSkills />
		<LandingShowcase />
		<section class="flex justify-center">
			<BiroResponsive
				bui-p
				class="inline-flex items-center font-bold font-inter gap-x-2"
				><span>Made with</span> <Heart :size="24" /><span>
					by Kuro</span
				></BiroResponsive
			>
		</section>
	</div>
</template>
