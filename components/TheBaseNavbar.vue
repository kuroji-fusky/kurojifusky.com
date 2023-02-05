<script setup lang="ts">
import gsap from "gsap"

const ctx = ref()
const tl = ref()
const headerWrap = ref<HTMLElement>()

const { isScrolled } = useNavbarScroll()

function toggleTl() {
	tl.value.reversed(!tl.value.reversed())

	let htmlRoot = document.documentElement

	!tl.value.reversed()
		? (htmlRoot.style.overflow = "hidden")
		: (htmlRoot.style.overflow = "auto")
}

onMounted(() => {
	ctx.value = gsap.context((self) => {
		const curtain = self.selector!(".nav-items-wrapper")

		tl.value = gsap
			.timeline()
			// .reverse()
			.to(curtain, { height: "100vh" }, "<")
			.duration(0.15)
	}, headerWrap.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<header
		ref="headerWrap"
		:class="[
			'fixed top-0 left-0 right-0 transition-colors duration-300',
			isScrolled ? 'bg-red-500' : 'bg-transparent',
		]"
	>
		<div class="top-nav-wrapper">
			<NuxtLink to="/" id="logo" role="img" aria-label="Kuroji Fusky"
				>Kuroji Fusky</NuxtLink
			>
			<button
				id="curtain-toggle"
				class="px-4 py-1.5 border border-gray-200 rounded-md"
				@click="toggleTl"
			>
				heehee
			</button>
		</div>
		<div class="nav-items-wrapper">
      <div class="nav-items-list"></div>
    </div>
	</header>
</template>

<style lang="scss" scoped>
.top-nav-wrapper {
	@apply flex items-center justify-between px-12 py-4 relative z-[6];
}

#logo {
	@apply font-inter uppercase font-extrabold select-none z-[5];
	font-size: calc(var(--vw) * var(--wordmark-size));

	--wordmark-size: 5;

	@media (min-width: 768px) {
		--wordmark-size: 3.75;
	}

	@media (min-width: 1280px) {
		--wordmark-size: 2.15;
	}
}

.nav-items-wrapper {
	@apply h-[0%] fixed top-0 left-0 right-0 bg-sona-borahaealt-900 transition-all duration-300 z-[5] overflow-hidden;
}
</style>
