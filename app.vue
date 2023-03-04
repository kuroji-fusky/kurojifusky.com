<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

useCalcViewport()

const loader = ref<HTMLDivElement>()

onMounted(() => {
	const redundancy = loader.value
	redundancy?.classList.remove("bg-opacity-100")
	redundancy?.classList.add("!pointer-events-none", "!bg-opacity-0")

	setTimeout(() => {
		redundancy?.classList.add("!hidden")
	}, 1000)
})
</script>

<template>
	<Teleport to="body">
		<div ref="loader" id="__kuro-initial-loader" class="bg-opacity-100">
			<div>Logo here</div>
		</div>
	</Teleport>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
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

#__kuro-initial-loader {
	@apply fixed inset-0 bg-borahae-dark z-[99999] grid place-items-center transition-all duration-500;
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
