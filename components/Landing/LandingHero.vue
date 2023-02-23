<script setup lang="ts">
import gsap from "gsap"

const gsapCtx = ref(),
	sectionRoot = ref<HTMLElement>()

onMounted(() => {
	gsapCtx.value = gsap.context((self) => {
		const orbit = self.selector!(".cursor-orbit")
		const _defaultPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

		const mouse = { x: _defaultPos.x, y: _defaultPos.y }
		const speed = 0.1

		const xSet = gsap.quickSetter(orbit, "x", "px")
		const ySet = gsap.quickSetter(orbit, "y", "px")

		window.addEventListener("mousemove", ({ x, y }: MouseEvent) => {
			mouse.x = x
			mouse.y = y
		})

		const handleCursorPos = () => {
			// adjust speed for higher refresh monitors
			const deltaRatio = gsap.ticker.deltaRatio()
			const dt = 1.0 - Math.pow(1.0 - speed, deltaRatio)

			_defaultPos.x += (mouse.x - _defaultPos.x) * dt
			_defaultPos.y += (mouse.y - _defaultPos.y) * dt
			xSet(_defaultPos.x)
			ySet(_defaultPos.y)
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					gsap.ticker.remove(handleCursorPos)
				} else {
					gsap.ticker.add(handleCursorPos)
				}
			})
		})

		observer.observe(sectionRoot.value!)
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
		<div class="cursor-orbit" aria-hidden="true"></div>
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
	@apply absolute pointer-events-none;
}

.cursor-orbit {
	@apply w-[12.5vw] h-[12.5vw] bg-red-400 -top-[6vw] -left-[6vw];
}

.grid-wrapper {
	@apply h-screen w-screen;
}
</style>
