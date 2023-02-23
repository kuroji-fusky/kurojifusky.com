<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

useCalcViewport()
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style lang="scss">
html {
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
