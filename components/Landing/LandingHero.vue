<script setup lang="ts">
import { gsap as g } from "gsap"

const ctx = ref()
const scrollDatShit = ref<HTMLDivElement>()

onMounted(() => {
	let gsapMedia = g.matchMedia("(min-width: 768px)")

	ctx.value = g.context((self) => {
		const svgScroll = self.selector!(".branding-scroll")
		const wrap = self.selector!("section")

		g.timeline({
			scrollTrigger: {
				trigger: wrap,
				start: "top top",
				end: "+=1100",
				scrub: 0.45,
			},
		}).to(svgScroll, { x: -350 })
	}, scrollDatShit.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<section ref="scrollDatShit" class="grid content-center w-screen h-screen mb-32 overflow-x-hidden">
		<BuiResponsive bui-gap-mobile="1rem" bui-gap-lg="1.25">
			<div class="relative flex branding-scroll w-fit gap-x-16 left-32">
				<Branding
					class="w-[calc(var(--vw)*64)] select-none"
					draggable="false"
				/>
				<Branding
					class="w-[calc(var(--vw)*64)] select-none"
					draggable="false"
				/>
			</div>
			<BuiResponsive
				bui-prose-p
				bui-gap-mobile="1rem"
				bui-gap-lg="1.25"
				class="relative flex flex-col left-32 font-inter subheading"
			>
				<p>Just a random blue fox-husky guy on the internet that makes cool things</p>
				<div>social stuff</div>
			</BuiResponsive>
		</BuiResponsive>
	</section>
</template>
