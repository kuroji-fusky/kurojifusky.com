<script setup lang="ts">
const ART_CREDIT = "MintyChipMocha"
</script>

<template>
	<section class="flex px-12 mx-auto my-16 gap-x-20 flow-col max-w-screen-2xl">
		<div class="flex flex-col w-full gap-y-16">
			<h2 class="font-inter font-extrabold text-[calc(var(--vw)*2.5)] mt-14">
				Here's a little rundown on what I can do
			</h2>
			<LandingProficencyItem />
			<LandingProficencyItem />
			<LandingProficencyItem />
			<LandingProficencyItem />
			<LandingProficencyItem />
		</div>
		<figure class="sticky self-start py-[8vh] top-20">
			<LazyNuxtImg
				format="webp"
				provider="cloudinary"
				role="presentation"
				class="overflow-hidden rounded-lg aspect-[12/16]"
				src="/fursonas/comms/MintyChipMocha_orig.png"
				:alt="`Art piece drawn by ${ART_CREDIT}`"
				sizes="lg:660px"
				quality="69"
				loading="lazy"
			/>
			<figcaption class="my-4">Artwork drawn by {{ ART_CREDIT }}</figcaption>
		</figure>
	</section>
</template>

<style lang="scss"></style>
