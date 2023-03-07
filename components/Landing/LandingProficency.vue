<script setup lang="ts">
const ART_CREDIT = "MintyChipMocha"

const skillsRef = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
	const el = skillsRef.value

	const io = new IntersectionObserver(
		(cutie) => {
			cutie.forEach(({ isIntersecting }) => {
				if (!isIntersecting) {
					isVisible.value = false
				} else {
					isVisible.value = true
				}
			})
		},
		{ rootMargin: "25% 0% -40% 0%" }
	)

	io.observe(el!)
})
</script>

<template>
	<section
		ref="skillsRef"
		class="flex px-12 mx-auto my-16 gap-x-20 flow-col max-w-screen-2xl"
	>
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
		<figure
			:class="[!isVisible ? 'opacity-0 translate-y-12' : 'opacity-100']"
			class="sticky self-start py-[8vh] top-20 duration-[420ms] ease-out"
			style="transition-property: opacity, transform"
		>
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
