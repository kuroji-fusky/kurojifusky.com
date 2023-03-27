<script setup lang="ts">
import { MOBILE_SCREEN } from "../Constants"
import { gsap } from "gsap"
import { AlertTriangle } from "lucide-vue-next"

defineProps<{
	name?: string
	desc?: string
}>()

const ctx = ref(),
	imgParallaxRoot = ref(),
	projDetailsRoot = ref()

onMounted(() => {
	const mm = gsap.matchMedia()

	ctx.value = gsap.context((self) => {
		const imgParallax = self.selector!(".gsap-latch")

		mm.add(MOBILE_SCREEN, () => {
			gsap.to(imgParallax, {
				scrollTrigger: {
					trigger: imgParallax,
					start: "2% bottom",
					end: "+=1170 top",
					scrub: 0.45,
				},
				objectPosition: "0% 2%",
			})
		})
	}, imgParallaxRoot.value)

	ctx.value = gsap.context((self) => {
		const articleEl = self.selector!("article")

		mm.add(MOBILE_SCREEN, () => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: articleEl,
						scrub: 0.75,
						start: "-60% bottom",
						end: "100% center",
					},
				})
				.from(articleEl, { y: 175 })
		})
	}, projDetailsRoot.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<li class="h-[130vh] flex gap-x-4" ref="imgParallaxRoot">
		<div
			ref="projDetailsRoot"
			class="relative w-[35%] flex-shrink-0 rounded-xl"
		>
			<BuiResponsive
				tag="article"
				class="sticky self-start p-12 top-16 prose-h3:font-unbounded prose-h3:font-semibold"
				bui-prose-h3
				bui-prose-p
				bui-gap-y-mobile="2.5rem"
				bui-gap-y-lg="4"
				bui-gap-y-xl="6"
			>
				<BuiHeading :level="3" tag="h3">{{ name }}</BuiHeading>
				<p>
					{{ desc }}
				</p>
				<div id="wip" class="flex px-4 py-2.5 rounded-md flex-nowrap gap-x-2.5">
					<AlertTriangle />
					<span>Project is currently work in progress</span>
				</div>
			</BuiResponsive>
		</div>
		<aside
			class="grid w-full grid-cols-2 grid-rows-6 overflow-hidden rounded-2xl"
		>
			<NuxtImg
				class="object-cover w-full h-full col-span-2 row-span-4 gsap-latch"
				src="https://images.unsplash.com/photo-1678338712030-6b529c30bd41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60"
				quality="75"
				draggable="false"
				loading="lazy"
			/>
			<NuxtImg
				class="object-cover w-full h-full row-span-5 gsap-latch"
				src="https://images.unsplash.com/photo-1678737176644-99fdb97795cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
				quality="75"
				draggable="false"
				loading="lazy"
			/>
			<NuxtImg
				class="object-cover w-full h-full col-span-1 row-span-5 gsap-latch"
				src="https://images.unsplash.com/photo-1678719510338-f37390296951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
				quality="75"
				draggable="false"
				loading="lazy"
			/>
		</aside>
	</li>
</template>

<style scoped>
#wip {
	background-image: linear-gradient(
		145deg,
		theme("colors.yellow.800") 25%,
		theme("colors.yellow.700") 25%,
		theme("colors.yellow.700") 50%,
		theme("colors.yellow.800") 50%,
		theme("colors.yellow.800") 75%,
		theme("colors.yellow.700") 75%,
		theme("colors.yellow.700") 100%
	);
	background-size: 111.58px 78.13px;
}

img {
	@apply select-none;
}
</style>
