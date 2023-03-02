<script setup lang="ts">
const sectRoot = ref<HTMLElement | null>()

onMounted(() => {
	window.onresize = () => {
		let gridCols = Math.floor(document.body.clientWidth / 69)
		let gridRows = Math.floor(document.body.clientHeight / 69)

		sectRoot.value?.style.setProperty("--c-rows", gridRows.toString())
		sectRoot.value?.style.setProperty("--c-cols", gridCols.toString())
	}
})
</script>

<template>
	<section class="grid h-screen place-items-center" ref="sectRoot">
		<div class="flex flex-col justify-center text-center select-none">
			<h2 class="font-extrabold font-inter" aria-label="Kuroji Fusky">
				<span class="relative z-[1] text-green-300">Kuroji Fusky</span>
			</h2>
			<p>This hero banner looking basic as shit</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
section {
	--hero-h2: 5.75;
	--hero-p: 1.125;
}

h2 {
	font-size: calc(var(--vw) * var(--hero-h2));

	&::before {
		content: "Kuroji Fusky";
		@apply absolute;
	}
}

p {
	font-size: calc(var(--vw) * var(--hero-p));
}
</style>
