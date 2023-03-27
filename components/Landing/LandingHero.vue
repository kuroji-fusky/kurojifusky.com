<script setup lang="ts">
import { MOBILE_SCREEN } from "../Constants"
import { gsap } from "gsap"

const ctx = ref()
const scrollDatShit = ref<HTMLDivElement>()

onMounted(() => {
	const mm = gsap.matchMedia()

	ctx.value = gsap.context((self) => {
		const svgScroll = self.selector!(".branding-scroll")
		const wrap = self.selector!("section")

		mm.add(MOBILE_SCREEN, () => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: wrap,
						start: "top top",
						end: "+=1100",
						scrub: 0.45,
					},
				})
				.to(svgScroll, { x: -375 })
		})
	}, scrollDatShit.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<section
		ref="scrollDatShit"
		class="grid content-center w-screen h-screen mb-32 overflow-x-hidden"
	>
		<BuiRewrite
			:options="{ 'gap-y': { xl: 1.25, lg: 1.25, md: '1rem' } }"
			class="grid"
		>
			<div class="relative flex branding-scroll w-fit gap-x-16 left-32">
				<Branding
					class="w-[calc(var(--vw)*64)] select-none"
					role="img"
					name="branding"
					draggable="false"
				/>
				<Branding
					class="w-[calc(var(--vw)*64)] select-none"
					role="img"
					name="branding"
					draggable="false"
				/>
			</div>
			<BuiText
				class="max-w-[37ch] relative flex flex-col left-32 font-inter subheading"
			>
				An independent blue fox-husky floof on the internet that makes cool
				things
			</BuiText>
		</BuiRewrite>
	</section>
</template>
