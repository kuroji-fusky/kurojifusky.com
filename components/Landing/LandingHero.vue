<script setup lang="ts">
const artworkCredit = "me"

const gridContainer = ref<HTMLElement | null>()

onMounted(() => {
	window.onresize = () => {
		let gridCols = Math.floor(document.body.clientWidth / 69)
		let gridRows = Math.floor(document.body.clientHeight / 69)

		gridContainer.value?.style.setProperty("--c-rows", gridRows.toString())
		gridContainer.value?.style.setProperty("--c-cols", gridCols.toString())
	}
})
</script>

<template>
	<section class="h-screen grid place-items-center content-center">
		<article
			class="text-center prose-h2:text-[calc(var(--vw)*2.45)] prose-p:text-[calc(var(--vw)*1.15)] relative z-[1]"
		>
			<div
				class="relative grid place-items-center mx-auto aspect-square h-[300px] w-[300px] rounded-full overflow-hidden"
			>
				<NuxtImg
					provider="cloudinary"
					src="/fursonas/self-sketches/kuroji_2023.png"
					:alt="`Artwork drawn by ${artworkCredit}`"
					class="rounded-full select-none relative z-[1] h-[250px] w-[250px]"
					format="webp"
					sizes="lg:400px"
					quality="80"
					loading="lazy"
					preload
				/>
			</div>

			<h2 class="my-5 font-inter font-bold">
				Hi, I'm
				<span
					class="bg-gradient-to-tr from-sona-royalblue-400 to-sona-borahae-400 bg-clip-text text-transparent"
					>Kuroji Fusky</span
				>!
			</h2>
			<p>
				I'm a 20-year-old independent self-taught individual hobbyist from the
				Philippines!<br />
				I usually work and handle everything on my own and rely on other
				external sources to improve.
			</p>
			<p class="my-3 !text-[calc(var(--vw)*0.95)] opacity-50">
				Artwork drawn by {{ artworkCredit }}
			</p>
		</article>
		<div
			aria-hidden="true"
			class="absolute left-[calc(50%-17rem)] top-[calc(50%-15rem)] opacity-60 blur-[75px] scale-[1.5]"
		>
			<div
				class="full-rotate-anim h-[10rem] w-[35rem] absolute -left-[8rem] top-[4rem] bg-gradient-to-tr from-sona-borahaealt-200 to-sona-yellow-500 rounded-full"
				style="--offset: 1.3"
			/>
			<div
				class="full-rotate-anim rotate-6 h-[12rem] w-[20rem] absolute -right-[18rem] top-[4rem] bg-gradient-to-tr from-sona-royalblue-400 to-sona-borahae-800"
				style="--offset: 5"
			/>
			<div
				class="full-rotate-anim rotate-6 h-[12rem] w-[10rem] absolute -right-[18rem] -top-[5rem] bg-gradient-to-tr from-pink-400 to-sona-skycyan-500"
				style="--offset: 2.7"
			/>
		</div>
	</section>
</template>

<style lang="scss">
.full-rotate-anim {
	animation: speen 69s linear infinite alternate-reverse;
}

@keyframes speen {
	0% {
		rotate: calc(720deg * var(--offset));
	}
	0% {
		rotate: calc(0deg * var(--offset));
	}
	100% {
		rotate: calc(720deg * var(--offset));
	}
}
</style>
