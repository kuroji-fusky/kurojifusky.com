<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

useHTMLViewport()

const loader = ref<HTMLDivElement>()
const name = "Kuroji Fusky"

onMounted(() => {
	const loaderEl = loader.value
	loaderEl?.classList.remove("hydrating")
	loaderEl?.classList.add("hydrated")
	// setTimeout(() => {
	// 	loaderEl?.setAttribute("style", "display: none")
	// }, 1000)
})
</script>

<template>
	<Teleport to="body">
		<div ref="loader" id="__kuro-loader" class="hydrating" aria-hidden="true">
			<div class="relative transition-all duration-700 select-none loader-text">
				<span
					class="uppercase font-inter text-[calc(var(--vw)*5)] font-extrabold absolute top-0 bordered-text bordered-text text-borahae-dark clip-path-anim z-[5]"
					>{{ name }}</span
				>
				<span
					class="uppercase font-inter text-[calc(var(--vw)*5)] font-extrabold bordered-text"
					>{{ name }}</span
				>
			</div>
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

#__kuro-loader {
	@apply fixed inset-0 bg-borahae-dark z-[99999] grid place-items-center transition-all duration-500 delay-150;

  --loader-play-state: running;

	&.hydrating {
		@apply bg-opacity-100;
	}

	&.hydrated {
		@apply pointer-events-none bg-opacity-0;

		.loader-text {
      --loader-play-state: paused;
			@apply opacity-0 scale-0;
		}
	}
}

.clip-path-anim {
	animation: loading-anim 1s cubic-bezier(0.86, 0, 0.07, 1) infinite alternate-reverse;
  animation-play-state: var(--loader-play-state);
}

@keyframes loading-anim {
	0% {
		clip-path: polygon(0 0, 12% 0, 12% 100%, 0 100%);
	}

	50% {
		clip-path: polygon(20% 0, 80% 0, 80% 100%, 20% 100%);
	}
	100% {
		clip-path: polygon(92% 0, 100% 0, 100% 100%, 92% 100%);
	}
}

.bordered-text {
	text-shadow: 0 1px 0 white, 1px 0 0 white, 1px 1px 0 white, -1px -1px 0 white,
		0 -1px 0 white, -1px 0 0 white;
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
