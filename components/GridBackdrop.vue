<script setup lang="ts">
import { gsap } from "gsap"

const ctx = ref(),
	gridRef = ref<HTMLDivElement>()

onMounted(() => {
	ctx.value = gsap.context((self) => {
		const wrapper = self.selector!("#grid-wrapper")
		const grid = self.selector!("#vaporwave-grid")

		useGsapMobileLimit(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: wrapper,
						scrub: 0.45,
						start: "-25.5% top",
						end: "+=3800",
					},
				})
				.fromTo(
					wrapper,
					{ translateX: "-51.75vw", translateY: "18rem" },
					{ translateX: "-51.75vw", translateY: "26rem" }
				)
				.fromTo(grid, { rotateX: "68deg" }, { rotateX: "92deg" }, "<")
		})
	}, gridRef.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<div ref="gridRef" aria-hidden="true">
		<div id="grid-wrapper" class="fixed top-0 w-[200vw] pointer-events-none">
			<div id="vaporwave-grid" class="w-[200vw] opacity-50">
				<div class="absolute w-[200vw] grid h-screen gap-12">
					<span
						v-for="_ in Array(8)"
						class="border-t-4 border-kuro-lavender-300"
					></span>
				</div>
				<div class="grid w-[200vw] h-screen grid-flow-col gap-16">
					<span
						v-for="_ in Array(15)"
						class="border-0 border-l-4 border-kuro-lavender-300"
					></span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#grid-wrapper {
	perspective: 1200px;
	transform: translate3d(-51.75vw, 18rem, 0);
}

#vaporwave-grid {
	transform: rotate3d(1, 0, 0, 68deg);
}
</style>
