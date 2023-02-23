<script setup lang="ts">
import gsap from "gsap"

const gsapCtx = ref(),
	sectionRoot = ref<HTMLElement>()

onMounted(() => {
	gsapCtx.value = gsap.context((self) => {
		const orbit = self.selector!(".cursor-orbit")
		const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    
		const mouse = { x: pos.x, y: pos.y }
		const speed = 0.1

		const xSet = gsap.quickSetter(orbit, "x", "px")
		const ySet = gsap.quickSetter(orbit, "y", "px")

		window.addEventListener("mousemove", ({ x, y }: MouseEvent) => {
			mouse.x = x
			mouse.y = y
		})

		gsap.ticker.add(() => {
			const deltaRatio = gsap.ticker.deltaRatio()

			// adjust speed for higher refresh monitors
			const dt = 1.0 - Math.pow(1.0 - speed, deltaRatio)

			pos.x += (mouse.x - pos.x) * dt
			pos.y += (mouse.y - pos.y) * dt
			xSet(pos.x)
			ySet(pos.y)
		})
	}, sectionRoot.value)
})
onUnmounted(() => gsapCtx.value.revert())
</script>

<template>
	<section ref="sectionRoot" class="relative grid h-screen place-items-center">
		<article class="z-10 text-center cursor-default select-none">
			<h1 id="kuro-wordmark" class="font-bold font-inter">Kuroji Fusky</h1>
			<p>Making abominations since 2014</p>
		</article>
		<div class="pointer-events-none cursor-orbit" aria-hidden="true"></div>
		<div class="grid-wrapper" aria-hidden="true"></div>
	</section>
</template>

<style lang="scss" scoped>
h1 {
	font-size: calc(var(--vw) * 5.75);
}

p {
	font-size: calc(var(--vw) * 1.125);
}

#kuro-wordmark {
	@apply bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600 bg-clip-text text-transparent;
}

:is(.grid-wrapper, .cursor-orbit) {
	@apply absolute;
}

.cursor-orbit {
	@apply w-[12.5vw] h-[12.5vw] bg-red-400 -top-[6vw] -left-[6vw];
}

.grid-wrapper {
	@apply h-screen w-screen;
}
</style>
