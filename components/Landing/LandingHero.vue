<script setup lang="ts">
import { gsap as g } from "gsap"

const ctx = ref()
const scrollDatShit = ref<HTMLDivElement>()

onMounted(() => {
	let gsapMedia = g.matchMedia("(min-width: 768px)")

	ctx.value = g.context((self) => {
		const cc = self.selector!(".center")
		const wrap = self.selector!("section")

		g.timeline({
			scrollTrigger: {
				trigger: wrap,
				start: "top top",
				end: "+=1100",
				scrub: 0.45,
			},
		}).to(cc, { x: -350 })
	}, scrollDatShit.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<section class="grid content-center h-screen mb-32" ref="scrollDatShit">
		<div class="center flex w-fit gap-x-16 relative left-32">
			<Branding class="w-[calc(var(--vw)*64)]" />
			<Branding class="w-[calc(var(--vw)*64)]" />
		</div>
	</section>
</template>

<style lang="scss"></style>
