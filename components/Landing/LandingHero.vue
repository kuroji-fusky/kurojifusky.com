<template>
	<section class="hero-section">
		<div
			class="flex flex-col-reverse justify-center h-screen max-w-screen-xl gap-10 px-12 mx-auto md:flex-row md:justify-between 2xl:max-w-screen-2xl place-items-center"
		>
			<div class="flex flex-col gap-y-6">
				<article class="flex flex-col text-center gap-y-5 md:text-left">
					<h2 class="gradient-hl">Kuroji Fusky</h2>
					<p>Building abominations since 2015</p>
				</article>
			</div>
			<aside class="">
				<NuxtImg
					preload
					provider="cloudinary"
					src="/fursonas/MintyChipMocha_orig.png"
					alt="Artwork by @MintyChipMocha on Etsy"
					fit="inside"
					class="aspect-[12/16] relative z-[1]"
					quality="90"
					loading="lazy"
					sizes="md:50vw lg:450px"
				/>
			</aside>
		</div>
	</section>
</template>

<style lang="scss">
.hero-section {
	--gradient-deg: 17;
	background: linear-gradient(
			calc(-1deg * var(--gradient-deg)),
			#0000 60%,
			rgba(4, 109, 128, 0.75) 100%
		),
		linear-gradient(calc(1deg * var(--gradient-deg)), #0000 48%, rgba(168, 0, 168, 0.75) 100%);
}

article {
	h2 {
		@apply font-inter font-semibold text-4xl lg:text-5xl;
	}
	p {
		@apply text-base lg:text-xl w-4/5;
	}
}

.gradient-hl {
	@apply bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600 bg-clip-text text-transparent;
}
</style>
