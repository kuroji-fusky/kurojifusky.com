<script setup lang="tsx">
import gsap from "gsap"
import { useNavbarOpenStore } from "~~/stores"
import { headingLinks } from "./Constants"

const ctx = ref(),
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
	ctx.value = gsap.context((self) => {
		const curtainTop = self.selector!("#nav-drawer-top"),
			curtainBtm = self.selector!("#nav-drawer-bottom")

		const svgBurger = self.selector!("#Burger"),
			svgClose = self.selector!("#Close")

		const burgerTweens: gsap.TweenVars = {
				duration: "3",
				ease: "expo.inOut",
				x: -460,
			},
			closeTweens: gsap.TweenVars = {
				duration: "3",
				x: 400,
			},
			curtainTweens: gsap.TweenVars = {
				duration: "50",
				ease: "expo.inOut",
			}

		// Button animation
		navTl.value = gsap
			.timeline()
			.reverse()
			.to(svgBurger[0], burgerTweens, "<-=8%")
			.to(svgBurger[1], burgerTweens, "<-=20%")
			.from(svgClose[0], { ...closeTweens, y: -400 }, ">-=21%")
			.from(svgClose[1], { ...closeTweens, y: 400 }, "<")
			.duration(0.5)

    // Nav items animation
		contentsTl.value = gsap
			.timeline()
			.reverse()
			.fromTo(curtainTop, { top: "-40.11%" }, { ...curtainTweens, top: "0%" })
			.fromTo(
				curtainBtm,
				{ bottom: "-60.11%" },
				{ ...curtainTweens, bottom: "0%" },
				"<"
			)
			.duration(0.8)
	}, headerWrap.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<header
		ref="headerWrap"
		:class="[
			isScrolled
				? 'bg-borahae-dark border-b border-neutral-100'
				: 'bg-transparent',
		]"
		class="fixed z-[9999] top-0 left-0 right-0 border-0 border-transparent duration-300 transition-[border,background-color]"
	>
		<div
			class="flex items-center justify-between px-12 py-3.5 md:py-[calc(var(--vw)*1.75)] lg:py-[calc(var(--vw)*0.9)] relative z-[6]"
		>
			<div class="overflow-hidden">
				<NuxtLink to="/" exact-active-class="&nbsp;" active-class="&nbsp;">
					<Branding
						name="branding"
						class="wordmark"
						role="img"
						aria-label="Kuroji Fusky"
					/>
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
            <line id="Burger" y1="177.5" x2="256" y2="177.5" stroke="white" stroke-width="8"/>
            <line id="Close" x1="5.40381" y1="261.305" x2="261.306" y2="5.40324" stroke="white" stroke-width="9"/>
            <line id="Close" x1="14.6941" y1="5.50226" x2="270.596" y2="261.404" stroke="white" stroke-width="9"/>
					</g>
				</svg>
			</button>
		</div>
		<div :aria-hidden="isNavCurtainOpen">
			<div
				id="nav-drawer-top"
				class="h-[40%] fixed top-0 left-0 right-0 bg-sona-borahae-800 z-[5] overflow-hidden"
			></div>
			<div
				id="nav-drawer-bottom"
				class="fixed -bottom-[60%] left-0 right-0 h-[60%] bg-sona-borahae-800"
			>
				<div class="absolute inset-0 flex flex-col w-full pt-8">
					<nav class="grid h-full grid-cols-3 px-12 gap-x-5">
						<NavbarWrapperItem
							v-for="(OwO, index) of headingLinks"
							:key="index"
							:heading="OwO.heading"
						>
							<div v-if="OwO.bypassListRender">Hey contact my ass</div>
						</NavbarWrapperItem>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.wordmark {
	width: 16.5rem;

	@media (min-width: 768px) {
		width: calc(var(--vw) * var(--wordmark-size));
		--wordmark-size: 28;
	}

	@media (min-width: 1024px) {
		--wordmark-size: 17.5;
	}
}
</style>
