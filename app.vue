<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavbarOpenStore } from "./stores"
import { storeToRefs } from "pinia"

gsap.registerPlugin(ScrollTrigger)

useHTMLViewport()

const { isNavbarOpen } = storeToRefs(useNavbarOpenStore())

onMounted(() => {
	const lenis = new Lenis({
		duration: 1.125,
		orientation: "vertical",
		smoothWheel: true,
		wheelMultiplier: 1,
		smoothTouch: false,
		infinite: false,
	})

	watch(isNavbarOpen, (navOpen) => {
		if (!navOpen) {
			lenis.start()
		} else {
			lenis.stop()
		}
	})

	const raf = (time: any) => {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	lenis.on("scroll", ScrollTrigger.update)

	gsap.ticker.add((t) => {
		lenis.raf(t * 1000)
	})
})
</script>

<template>
	<div>
		<TheBaseNavbar />
		<main class="min-h-screen">
			<NuxtPage />
		</main>
		<TheBaseFooter />
	</div>
</template>

<style lang="scss">
@use "/assets/css/mixins" as *;

$screens: (768, 1024, 1280, 1366, 1536, 1640, 1920);

html {
	@include fallback-viewport(640, $mq: false);

	@each $_ds in $screens {
		@include fallback-viewport($_ds);
	}
}

// Biro UI stuff
@include responsive-text("mb", "margin-bottom");
@include responsive-text("mt", "margin-top");

.bui {
	&-padding {
		@include shorthands("padding", "p");
	}

	&-margin {
		@include shorthands("margin", "p");
	}

	&-sizes {
		@include size-shorthands;
	}

	&-gap {
		@include gap-shorthands;
	}

	&-prose-text {
		@include tw-rs-packed($prose: true);
	}

	&-text {
		@include tw-rs-packed($prose: false);
	}
}

*,
::before,
::after {
	--desktop-xl-sub-p: 0.9;
	--desktop-xl-p: 1.2;
	--desktop-xl-h1: 4;
	--desktop-xl-h2: 3.25;
	--desktop-xl-h3: 2.85;

	--desktop-lg-sub-p: 1.5;
	--desktop-lg-p: 2;
	--desktop-lg-h1: 3.5;
	--desktop-lg-h2: 2.95;
	--desktop-lg-h3: 2.15;

	--mobile-sub-p: 1.85;
	--mobile-p: 1rem;
	--mobile-h1: 1.9rem;
	--mobile-h2: 1.75rem;
	--mobile-h3: 1.55rem;
}

.bui-desktop-only {
	@media (max-width: 767px) {
		display: none;
	}
}

.bui-mobile-only {
	@include mq-lg {
		display: none;
	}
}
// Biro UI stuff

body {
	@apply selection:bg-kuro-lavender-600;
}

:is(h1, h2, h3, p) {
	@apply selection:text-white #{!important};
}
</style>
