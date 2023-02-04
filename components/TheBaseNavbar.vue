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

const isScrolled = ref(false)

function handleNavScroll() {
	isScrolled.value = window.scrollY < 30 ? false : true
}
onBeforeMount(() => window.addEventListener("scroll", handleNavScroll))
onMounted(() => window.addEventListener("scroll", handleNavScroll))
onUnmounted(() => window.removeEventListener("scroll", handleNavScroll))
</script>

<template>
	<header
		:class="[
			'fixed top-0 left-0 right-0 transition-colors duration-300',
			isScrolled ? 'bg-red-500' : 'bg-transparent',
		]"
	>
		<div class="top-nav-wrapper">
			<NuxtLink to="/" id="logo" role="img" aria-label="Kuroji Fusky"
				>Kuroji Fusky</NuxtLink
			>
			<button
				class="px-4 py-1.5 border border-gray-200 rounded-md"
				@click="isNavOpen = !isNavOpen"
			>
				{{ isNavOpen ? "open" : "close" }}
			</button>
		</div>
		<div class="nav-items-container"></div>
	</header>
</template>

<style lang="scss" scoped>
.top-nav-wrapper {
	@apply flex items-center justify-between px-12 py-4 relative z-[6];
}

#logo {
	@apply font-inter uppercase font-extrabold select-none z-[5];
	font-size: calc(var(--vw) * var(--wordmark-size));

	--wordmark-size: 5;

	@media (min-width: 768px) {
		--wordmark-size: 4.5;
	}

	@media (min-width: 1280px) {
		--wordmark-size: 2.15;
	}
}

.nav-items-container {
	@apply h-[0%] fixed top-0 left-0 right-0 bg-red-700 transition-all duration-300 z-[5];
}
</style>
