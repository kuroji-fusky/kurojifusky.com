<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

useHTMLViewport()
</script>

<template>
	<NuxtLoadingIndicator />
	<!-- prettier-ignore -->
	<div class="responsive-text selection:bg-sona-borahaealt-600">
		<TheBaseNavbar />
    <NuxtPage />
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

* {
  @apply selection:text-white;
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

	--d-xl-sub-p: 1;
	--d-xl-p: 1.2;
	--d-xl-h1: 3.5;
	--d-xl-h2: 3;
	--d-xl-h3: 2.15;
}

.link-underline {
	@apply text-sona-borahaealt-200 inline-block relative w-fit
				hover:text-sona-borahaealt-300
				before:content-[''] before:bg-sona-borahaealt-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px];

	&::before {
		transform: scaleX(0);
		transform-origin: bottom left;
		transition: transform 150ms ease-out;
	}

	&:hover::before {
		transform: scaleX(1);
	}
}
</style>
