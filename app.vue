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
		<main>
			<NuxtPage />
		</main>
		<TheBaseFooter />
	</div>
	<Teleport to="body">
		<div id="preloader"></div>
	</Teleport>
</template>

<style lang="scss">
@use "/assets/css/mixins" as *;

$screens: (768, 1024, 1280, 1366, 1536, 1640, 1920);

html {
	@include vwCalc(640, $mq: false);

	@each $_ds in $screens {
		@include vwCalc($_ds);
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
