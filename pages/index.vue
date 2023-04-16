<script setup lang="ts">
usePageMeta({
	title: "Kuroji Fusky: Building abominations since 2013",
	description:
		"Kuroji is a blue fox-husky guy on the internet that makes cool things lol",
})

// definePageMeta({
// 	pageTransition: {
// 		name: "shutter",
// 		mode: "out-in",
// 	},
// 	onBeforeEnter: (el: string) => {
// 		console.log("before enter...", el)
// 	},
// 	onEnter: (el: string, done: string) => {
// 		console.log("entered", el, done)
// 	},
// 	onAfterEnter: (el: string) => {
// 		console.log("after enter fired", el)
// 	},
// })
</script>

<template>
	<GridBackdrop />
	<LandingHero />
	<LandingIntro />
	<LandingSkills />
	<LandingShowcase />
</template>
