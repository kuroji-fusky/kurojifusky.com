<template>
	<header class="fixed top-0 left-0 right-0">
		<div class="top-nav-wrapper">
			<NuxtLink to="/" id="logo" role="img" aria-label="Kuroji Fusky"
				>Kuroji Fusky</NuxtLink
			>
			<button
				class="px-4 py-1.5 border border-gray-500 rounded-md"
				@click="isNavOpen = !isNavOpen"
			>
				Clicc
			</button>
		</div>
		<div class="nav-items-container"></div>
	</header>
</template>

<script setup lang="ts">
const isNavOpen = ref(false)

const navItems = [
	{
		link: "#",
		text: "Creative works",
		dropdown: [
			{ link: "#", text: "Discography" },
			{ link: "#", text: "Filmography" },
			{ link: "#", text: "Archives" },
		],
	},
	{ link: "#", text: "Projects" },
	{ link: "#", text: "Blogs" },
	{ link: "#", text: "About" },
]

function woot() {
	console.log("lmao")
}
</script>

<style lang="scss" scoped>
.top-nav-wrapper {
	@apply flex items-center justify-between px-12 py-4 relative z-[6];
}

#logo {
	@apply font-inter text-3xl uppercase font-extrabold select-none z-[5];
}

.nav-items-container {
	@apply h-[0%] fixed top-0 left-0 right-0 bg-red-700 transition-all duration-300 z-[5];
}
</style>
