<script setup lang="ts">
import { copyright } from "~/constants"
import Lenis from "@studio-freight/lenis"
import { storeToRefs } from "pinia"
import { useNavbarOpenStore } from "./stores"
import { MailIcon } from "lucide-vue-next"

useHTMLViewport()

const { isNavbarOpen } = storeToRefs(useNavbarOpenStore())

onMounted(() => {
	const lenis = new Lenis({
		duration: 1.125,
		orientation: "vertical",
		smoothWheel: true,
		wheelMultiplier: 1.6,
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
})

const config = useRuntimeConfig().public

useHead({
	script: [
		!config.dev
			? {
					src: "https://analytics.umami.is/script.js",
					async: true,
					"data-website-id": config.umami,
			  }
			: {},
	],
})
</script>

<template>
	<main>
		<NuxtPage />
	</main>
	<footer class="flex flex-col items-center gap-y-3">
		<BuiText>
			<BuiLink href="mailto:hello@kurojifusky.com">
				<BuiText sub-p class="flex items-center gap-x-2">
					<MailIcon class="w-[calc(var(--vw)*1.25)] h-[calc(var(--vw)*1.25)]" />
					<span>hello@kurojifusky.com</span>
				</BuiText>
			</BuiLink>
		</BuiText>
		<BuiText sub-p>{{ copyright }}</BuiText>
	</footer>
</template>
