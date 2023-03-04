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
	<section class="h-[80vh] grid place-items-center content-center">
		<article class="text-center prose-p:text-[calc(var(--vw)*1.15)]">
			<div
				class="mb-12 flex justify-center mx-auto aspect-square h-[250px] w-[250px]"
			>
				<div>
					<NuxtImg
						provider="cloudinary"
						src="/fursonas/self-sketches/kuroji_2023.png"
						class="rounded-full select-none"
						sizes=" lg:250px"
						alt="A cutie"
					/>
					<p class="my-3 !text-[calc(var(--vw)*0.95)] opacity-50">Art by me</p>
				</div>
				<div aria-hidden="true"></div>
			</div>
			<p>
				Hello! I'm a 20-year-old independent self-taught individual hobbyist
				from the Philippines!<br />
				I usually work and handle everything on my own and rely on other
				external sources to improve.
			</p>
		</article>
	</section>
</template>

<style lang="scss" scoped></style>
