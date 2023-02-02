<script setup lang="ts">
</script>

<template>
	<section class="hero-section">
		<div class="flex flex-col gap-y-6">
			<article class="flex flex-col gap-y-5 text-center md:text-left">
				<h2>Hello, I'm <span class="gradient-hl">Kuroji Fusky</span>!</h2>
				<p>
					I'm just a dumb idiot who nerds about stuff about programming and
					among other things!
				</p>
			</article>
			<div class="flex gap-x-5">
				<LandingHeroButton title="Projects" link="/project" />
				<LandingHeroButton title="Discography" link="/discography" />
			</div>
		</div>
		<aside class="relative -z-[1]">
			<NuxtImg
				preload
				provider="cloudinary"
				src="/fursonas/MintyChipMocha_orig.png"
				alt="Artwork by @MintyChipMocha on Etsy"
				fit="inside"
				class="aspect-[12/16]"
				quality="80"
				sizes="md:50vw lg:450px"
			/>
		</aside>
	</section>
</template>

<style lang="scss">
.hero-section {
	@apply flex flex-col-reverse md:flex-row justify-center md:justify-between gap-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto place-items-center h-[90vh] px-12;
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
	@apply bg-gradient-to-tr from-sona-borahaealt-600 to-sona-skycyan-600 bg-clip-text text-transparent;
}
</style>
