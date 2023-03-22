<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

useHTMLViewport()
</script>

<template>
	<div class="responsive-text">
		<TheBaseNavbar />
		<main>
			<NuxtPage />
		</main>
		<TheBaseFooter />
	</div>
</template>

<style lang="scss">
html {
	--vw: 6.4;

	@media (min-width: 768px) {
		--vw: 7.68px;
	}

	@media (min-width: 1024px) {
		--vw: 10.24px;
	}

	@media (min-width: 1280px) {
		--vw: 12.8px;
	}

	@media (min-width: 1366px) {
		--vw: 13.66px;
	}

	@media (min-width: 1536px) {
		--vw: 15.3px;
	}

	@media (min-width: 1640px) {
		--vw: 16.4px;
	}

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-track {
		@apply border-8 border-red-500;
	}

	&::-webkit-scrollbar-thumb {
		@apply bg-sona-borahaealt-700 rounded-xl border-8 border-red-500;
	}
}

body {
	@apply selection:bg-sona-borahaealt-600;
}

:is(h1, h2, h3, p) {
	@apply selection:text-white #{!important};
}

.responsive-text {
	--m-sub-p: 1.85;
	--m-p: 1rem;
	--m-h1: 1.9rem;
	--m-h2: 1.75rem;
	--m-h3: 1.55rem;

	--d-lg-sub-p: 1.5;
	--d-lg-p: 2;
	--d-lg-h1: 3.5;
	--d-lg-h2: 4;
	--d-lg-h3: 2.15;

	--d-xl-sub-p: 0.9;
	--d-xl-p: 1.2;
	--d-xl-h1: 3.5;
	--d-xl-h2: 3;
	--d-xl-h3: 2.15;
}
</style>
