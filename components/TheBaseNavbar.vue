<script setup lang="ts">
import gsap from "gsap"

const gsapCtx = ref(),
	contentsTl = ref(),
	topTl = ref(),
	headerWrap = ref<HTMLElement>(),
	isNavCurtainOpen = ref(false)

const { isScrolled } = useNavbarScroll()

function toggleTl() {
	const tlRev = contentsTl.value
	const htmlRoot = document.documentElement

	tlRev.reversed(!tlRev.reversed())
	isNavCurtainOpen.value = !tlRev.reversed()

	!tlRev.reversed()
		? (htmlRoot.style.overflow = "hidden")
		: (htmlRoot.style.overflow = "auto")
}

onMounted(() => {
	gsapCtx.value = gsap.context((self) => {
		const curtain = self.selector!(".nav-items-wrapper")
		const svgBurger = self.selector!("#Burger")
		const svgClose = self.selector!("#Close")

		contentsTl.value = gsap
			.timeline()
			.timeScale(0.2)
			.reverse()
			.from(curtain, { ease: "sine.inOut", height: "0vh" })
			.to(curtain, { ease: "sine.inOut", height: "100vh" })
			.duration(0.17)
	}, headerWrap.value)
})

onUnmounted(() => gsapCtx.value.revert())
</script>

<template>
	<header ref="headerWrap" :class="[isScrolled ? 'scrolled' : '']">
		<div class="top-nav-wrapper">
			<NuxtLink to="/" id="logo" role="img" aria-label="Kuroji Fusky"
				>Kuroji Fusky</NuxtLink
			>
			<button class="px-2 py-1" @click="toggleTl" aria-label="Toggle dropdown">
				<svg
					aria-hidden="false"
					role="img"
					focusable="false"
					width="50"
					height="50"
					viewBox="0 0 512 512"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<!-- prettier-ignore -->
					<g>
						<line id="Burger" x1="59.5" y1="125" x2="452.5" y2="125" stroke="white" stroke-width="15"/>
						<line id="Burger" x1="59.5" y1="371" x2="452.5" y2="371" stroke="white" stroke-width="15"/>
						<line id="Burger" x1="59.5" y1="243.195" x2="452.5" y2="243.195" stroke="white" stroke-width="15"/>
						<line id="Close" x1="122.657" y1="111.343" x2="400.55" y2="389.236" stroke="white" stroke-width="15"/>
						<line id="Close" x1="111.45" y1="389.343" x2="389.343" y2="111.45" stroke="white" stroke-width="15"/>
					</g>
				</svg>
			</button>
		</div>
		<div class="nav-items-wrapper" :aria-hidden="!isNavCurtainOpen">
			<div class="nav-items-list"></div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	@apply fixed z-[9999] top-0 left-0 right-0 bg-transparent border-0 border-transparent;

	transition-property: border, background;
	transition-duration: 300ms;
}

.scrolled {
	@apply bg-borahae-dark bg-opacity-75 backdrop-blur-lg border-b border-neutral-100;
}

.top-nav-wrapper {
	@apply flex items-center justify-between px-12 py-4 relative z-[6];
}

#logo {
	@apply font-inter uppercase font-extrabold select-none z-[5];
	font-size: calc(var(--vw) * var(--wordmark-size));

	--wordmark-size: 5;

	@media (min-width: 768px) {
		--wordmark-size: 3.5;
	}

	@media (min-width: 1280px) {
		--wordmark-size: 2;
	}
}

.nav-items-wrapper {
	@apply h-[0%] fixed top-0 left-0 right-0 bg-sona-borahaealt-900 transition-all duration-300 z-[5] overflow-hidden;
}
</style>
