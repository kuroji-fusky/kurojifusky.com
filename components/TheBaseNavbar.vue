<script setup lang="ts">
import gsap from "gsap"
import { useNavbarOpenStore } from "~~/stores"
import { headingLinks } from "./Constants"
import { storeToRefs } from "pinia"

const ctx = ref(),
	contentsTl = ref(),
	navTl = ref(),
	headerWrap = ref<HTMLElement>()

const { isScrolled } = useNavbarScroll()
const navStore = useNavbarOpenStore()

const { isNavbarOpen } = storeToRefs(navStore)

function toggleNavs() {
	navStore.toggleNavbar()

	// gsap crap
	const curtainVal = contentsTl.value
	const navVal = navTl.value

	isNavbarOpen.value = !!curtainVal.reversed()

	curtainVal.reversed(!curtainVal.reversed())
	navVal.reversed(!navVal.reversed())
}

onMounted(() => {
	ctx.value = gsap.context((self) => {
		const curtainTop = self.selector!("#nav-slider-top"),
			curtainBtm = self.selector!("#nav-slider-bottom"),
			curtainItems = self.selector!("#nav-list-container"),
			svgBurger = self.selector!("#Burger"),
			svgClose = self.selector!("#Close")

		const menuDuration = { duration: "3" },
			burgerTw: gsap.TweenVars = {
				...menuDuration,
				ease: "expo.inOut",
				x: -460,
			},
			closeTw: gsap.TweenVars = {
				...menuDuration,
				x: 400,
			},
			curtainTw: gsap.TweenVars = {
				duration: "25",
				ease: "expo.inOut",
			}

		// Button animation
		navTl.value = gsap
			.timeline()
			.reverse()
			.to(svgBurger, { ...burgerTw, stagger: -0.9 }, "<-=8%")
			.from(svgClose[0], { ...closeTw, y: -400 }, ">-=21%")
			.from(svgClose[1], { ...closeTw, y: 400 }, "<")
			.duration(0.65)
		// Button animation

		// Nav items animation
		contentsTl.value = gsap
			.timeline()
			.reverse()
			.fromTo(curtainTop, { top: "-40.11%" }, { ...curtainTw, top: "0%" })
			.fromTo(
				curtainBtm,
				{ bottom: "-60.11%" },
				{ ...curtainTw, bottom: "0%" },
				"<"
			)
			.fromTo(
				curtainItems,
				{ y: 550 },
				{ stagger: -5, ...curtainTw, y: 0 },
				"-2"
			)
			.duration(1)
	}, headerWrap.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<header
		ref="headerWrap"
		class="fixed z-20 top-0 left-0 right-0 border-0 border-transparent duration-300 transition-[border,background-color]"
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
				@click="toggleNavs"
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
		<div
			id="nav-slider-wrapper"
			class="bui-desktop-only"
			:aria-hidden="!isNavbarOpen"
		>
			<div
				id="nav-slider-top"
				class="-top-[40%] h-[40%] fixed left-0 right-0 bg-kuro-lavender-900 grid"
			></div>
			<div
				id="nav-slider-bottom"
				class="fixed -bottom-[60%] left-0 right-0 h-[60%] bg-kuro-lavender-900"
			>
				<div class="absolute inset-0 flex flex-col w-full pt-8">
					<BuiRes
						tag="nav"
						:options="{
							px: { xl: 4, lg: 6 },
							'gap-x': { xl: 2, lg: 7.5 },
						}"
						class="grid h-full grid-cols-3 gap-x-5"
					>
						<NavbarWrapperItem
							v-for="(containerItem, index) of headingLinks"
							:key="index"
							:heading="containerItem.heading"
						>
							<div v-if="containerItem.bypassListRender">
								<NavbarMoreWrapper />
							</div>
							<ul>
								<li
									v-for="(listItem, index) of containerItem.contents"
									:key="index"
									class="bui-text-p"
								>
									{{ listItem.text }}
								</li>
							</ul>
						</NavbarWrapperItem>
					</BuiRes>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
#nav-slider-wrapper [aria-hidden="true"] {
	@apply pointer-events-none;
}

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
