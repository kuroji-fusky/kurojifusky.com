<script setup lang="ts">
import gsap from "gsap"
import { useNavbarOpenStore } from "~~/stores"

const gsapCtx = ref(),
	contentsTl = ref(),
	navTl = ref(),
	headerWrap = ref<HTMLElement>(),
	isNavCurtainOpen = ref(false)

const { isScrolled } = useNavbarScroll()
const navStore = useNavbarOpenStore()

function toggleTls() {
	const curtainVal = contentsTl.value
	const navVal = navTl.value

	isNavCurtainOpen.value = !curtainVal.reversed()

	curtainVal.reversed(!curtainVal.reversed())
	navVal.reversed(!navVal.reversed())
}

onMounted(() => {
	gsapCtx.value = gsap.context((self) => {
		const wordmark = self.selector!("a.wordmark")
		const svgBurger = self.selector!("#Burger")
		const svgClose = self.selector!("#Close")

		const curtain = self.selector!(".nav-items-wrapper")

		const burgerTweens: gsap.TweenVars = {
			duration: "3",
			ease: "expo.inOut",
			x: -460,
		}

		const closeTweens: gsap.TweenVars = {
			duration: "3",
			x: 400,
		}

		const curtainTweens: gsap.TweenVars = {
			duration: "0.1",
			ease: "sine.inOut",
		}

		// prettier-ignore
		navTl.value = gsap
			.timeline()
			.reverse()
			.to(svgBurger[0], burgerTweens, "<-=8%")
			.to(svgBurger[1], burgerTweens, "<-=16%")
			.to(svgBurger[2], burgerTweens, "<-=24%")
			.from(svgClose[0], { ...closeTweens, y: -400 }, ">-=21%")
			.from(svgClose[1], { ...closeTweens, y: 400 }, "<")
			.duration(0.6)

		contentsTl.value = gsap
			.timeline()
			.reverse()
			.fromTo(curtain, { height: "0vh" }, { ...curtainTweens, height: "100vh" })
			.duration(0.25)
	}, headerWrap.value)
})

onUnmounted(() => gsapCtx.value.revert())
</script>

<template>
	<header
		ref="headerWrap"
		:class="[isScrolled ? 'scrolled' : 'opaque']"
		class="fixed z-[9999] top-0 left-0 right-0 bg-transparent border-0 border-transparent"
	>
		<div
			class="flex items-center justify-between px-12 py-3.5 md:py-[calc(var(--vw)*1.75)] lg:py-[calc(var(--vw)*0.9)] relative z-[6]"
		>
			<div class="overflow-hidden">
				<NuxtLink to="/" exact-active-class="&nbsp;" active-class="&nbsp;">
					<Branding class="wordmark" role="img" aria-label="Kuroji Fusky" />
				</NuxtLink>
			</div>
			<button
				type="button"
				class="px-2 py-1"
				@click="
					() => {
						toggleTls()
            navStore.toggleNavbar()
					}
				"
				aria-label="Toggle dropdown"
			>
				<svg
					aria-hidden="false"
					role="img"
					focusable="false"
					width="40"
					height="40"
					viewBox="0 0 256 256"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<!-- prettier-ignore -->
					<g>
            <line id="Burger" y1="65.5" x2="256" y2="65.5" stroke="white" stroke-width="8"/>
            <line id="Burger" y1="121.5" x2="256" y2="121.5" stroke="white" stroke-width="8"/>
            <line id="Burger" y1="177.5" x2="256" y2="177.5" stroke="white" stroke-width="8"/>
            <line id="Close" x1="5.40381" y1="261.305" x2="261.306" y2="5.40324" stroke="white" stroke-width="13"/>
            <line id="Close" x1="14.6941" y1="5.50226" x2="270.596" y2="261.404" stroke="white" stroke-width="13"/>
					</g>
				</svg>
			</button>
		</div>
		<div class="nav-items-wrapper" :aria-hidden="isNavCurtainOpen">
			<div class="nav-items-list"></div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	transition-property: border, background;
	transition-duration: 300ms;
}

.scrolled {
	@apply bg-borahae-dark bg-opacity-75 backdrop-blur-md border-b border-neutral-100;
}

.wordmark {
	width: 16.5rem;

	@media (min-width: 768px) {
		width: calc(var(--vw) * var(--wordmark-size));
		--wordmark-size: 28;
	}

	@media (min-width: 1024px) {
		width: calc(var(--vw) * var(--wordmark-size));
		--wordmark-size: 17;
	}
}

.nav-items-wrapper {
	@apply h-[0%] fixed top-0 left-0 right-0 bg-opacity-75 bg-sona-borahaealt-900 z-[5] overflow-hidden;
}
</style>
