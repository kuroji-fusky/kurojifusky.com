<script setup lang="ts">
import gsap from "gsap"

const gsapCtx = ref(),
	sectionRoot = ref<HTMLElement>(),
	textMask = ref<HTMLSpanElement>()

onMounted(() => {
	gsapCtx.value = gsap.context(() => {
		const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
		let mouse = { x: pos.x, y: pos.y }
		const rekt = { x: 0, y: 0 }
		const speed = 0.1

		const xSet = gsap.quickSetter(sectionRoot.value!, "--pos-x", "px")
		const ySet = gsap.quickSetter(sectionRoot.value!, "--pos-y", "px")
		const xMaskSet = gsap.quickSetter(sectionRoot.value!, "--mask-pos-x", "px")
		const yMaskSet = gsap.quickSetter(sectionRoot.value!, "--mask-pos-y", "px")

		window.addEventListener("mousemove", ({ x, y }: MouseEvent) => {
			mouse.x = x
			mouse.y = y
		})

		const handleCursorPos = () => {
			const maskRekt = textMask.value?.getBoundingClientRect()

			// adjust speed for higher refresh monitors
			const deltaRatio = gsap.ticker.deltaRatio()
			const dt = 1.0 - Math.pow(1.0 - speed, deltaRatio)

			pos.x += (mouse.x - pos.x) * dt
			pos.y += (mouse.y - pos.y) * dt

			rekt.x = maskRekt!.left - pos.x
			rekt.y = maskRekt!.top - pos.y

			xSet(pos.x.toFixed(2))
			ySet(pos.y.toFixed(2))
			xMaskSet(-rekt.x.toFixed(2))
			yMaskSet(-rekt.y.toFixed(2))
		}

		window.addEventListener("scroll", () => {
			if (window.scrollY < 1024) {
				gsap.ticker.add(handleCursorPos)
			} else {
				gsap.ticker.remove(handleCursorPos)
			}
		})
	}, sectionRoot.value)
})
onUnmounted(() => gsapCtx.value.revert())
</script>

<template>
	<section ref="sectionRoot" class="relative grid h-screen place-items-center">
		<article class="z-10 text-center cursor-default select-none">
			<h1 class="relative font-bold font-inter" aria-label="Kuroji Fusky">
				<span ref="textMask" class="kuro-wordmark mask">Kuroji Fusky</span>
				<span class="kuro-wordmark">Kuroji Fusky</span>
			</h1>
			<p>Full stack developer, designer, doing your mom-inator</p>
		</article>
		<div class="cursor-orbit" aria-hidden="true"></div>
		<div class="grid-wrapper" aria-hidden="true"></div>
	</section>
</template>

<style lang="scss" scoped>
section {
	--size: 15.5vw;
	--responsive-heading: 5.75;
	--responsive-paragraph: 1.125;
}

h1 {
	font-size: calc(var(--vw) * var(--responsive-heading));
}

p {
	font-size: calc(var(--vw) * var(--responsive-paragraph));
}

.kuro-wordmark {
	@apply bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600 bg-clip-text text-transparent;

	&.mask {
		@apply absolute text-white;
		clip-path: circle(
			calc(var(--size) / 2) at calc(var(--mask-pos-x)) var(--mask-pos-y)
		);
	}
}

:is(.grid-wrapper, .cursor-orbit) {
	@apply absolute pointer-events-none;
}

.cursor-orbit {
	@apply bg-red-600 rounded-full;
	width: var(--size);
	height: var(--size);
	top: calc(var(--size) / -2);
	left: calc(var(--size) / -2);
	transform: translate3d(var(--pos-x), var(--pos-y), 0);
}

.grid-wrapper {
	@apply h-screen w-screen;
}
</style>
