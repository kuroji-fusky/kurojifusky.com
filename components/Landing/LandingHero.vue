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
	<section class="grid content-center h-screen place-items-center">
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
					sizes="lg:320px"
					quality="90"
					loading="lazy"
					preload
				/>
			</div>

			<h2 class="my-5 font-bold font-inter">
				Hi, I'm
				<span
					class="text-transparent bg-gradient-to-tr from-sona-royalblue-400 to-sona-borahae-400 bg-clip-text"
					>Kuroji Fusky</span
				>!
			</h2>
			<p>
				I'm a 20-year-old independent and self-taught hobbyist from the
				Philippines!<br />
				I usually work and handle everything on my own and rely on other
				external sources to improve.
			</p>
			<p class="my-3 !text-[calc(var(--vw)*0.95)] opacity-50">
				Artwork drawn by {{ artworkCredit }}
			</p>
		</article>
		<!-- TODO: Rewrite this crap into it's <canvas> element for performance concerns -->
		<div
			aria-hidden="true"
			class="absolute left-[calc(50%-17rem)] top-[calc(50%-15rem)] opacity-60 blur-[60px] scale-[1.5]"
		>
			<div
				class="full-rotate-anim h-[10rem] w-[21rem] absolute -left-[8rem] top-[4rem] bg-gradient-to-tr from-sona-borahaealt-200 to-sona-yellow-500 rounded-full"
			/>
			<div
				class="full-rotate-anim rotate-6 h-[12rem] w-[20rem] absolute -right-[21rem] top-[4rem] bg-gradient-to-tr from-sona-royalblue-400 to-sona-borahae-800"
			/>
			<div
				class="full-rotate-anim rotate-6 h-[12rem] w-[10rem] absolute -right-[18rem] -top-[5rem] bg-gradient-to-tr from-pink-400 to-sona-skycyan-500"
			/>
		</div>
	</section>
</template>

<style lang="scss">
$offsets: (1 -1 (50px -50px), 2 0.1 (309px -100px), 3 0.4 (-259px, -1255px));

.full-rotate-anim {
	animation: speen 60s linear infinite alternate-reverse;

	@each $i, $offsets, $transform in $offsets {
		&:nth-child(#{$i}) {
			--blob-offset: #{$offsets};
			--blob-transform: #{$transform};
		}
	}
}

@keyframes speen {
	0% {
		rotate: calc(720deg * var(--blob-offset));
		translate: -150px 75px;
	}
	50% {
		rotate: calc(0deg * var(--blob-offset));
		translate: var(--blob-transform);
	}
	100% {
		rotate: calc(720deg * var(--blob-offset));
		translate: 50px -10px;
	}
}
</style>
