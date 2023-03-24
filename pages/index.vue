<script setup lang="ts">
import { Heart } from "lucide-vue-next"

usePageMeta({
	title: "Kuroji Fusky: Building abominations since 2013",
	description:
		"A terrible website with mind-blowing visuals, created by a furry btw lol",
})

const gay = {
	"gap-x": { xl: 5, lg: 10, md: "2rem" },
}
</script>

<template>
	<div class="min-h-screen">
		<BuiRewrite tag="a" :options="gay">
    </BuiRewrite>
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
	</div>
</template>
