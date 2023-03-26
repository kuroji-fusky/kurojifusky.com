<script setup lang="ts">
import { Heart } from "lucide-vue-next"

usePageMeta({
	title: "Kuroji Fusky: Building abominations since 2013",
	description:
		"Kuroji is a blue fox-husky guy on the internet that makes cool things lol",
})
</script>

<template>
	<div>
		<LandingHero />
		<LandingIntro />
	</div>
	<LandingShowcase />
	<LandingIRLSlider />
	<section class="flex justify-center">
		<BuiResponsive
			bui-p
			class="inline-flex items-center font-bold font-inter gap-x-2"
			><span>Made with</span> <Heart :size="24" /><span>
				by Kuro</span
			></BuiResponsive
		>
	</section>
</template>
