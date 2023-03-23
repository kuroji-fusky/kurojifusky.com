<script setup lang="ts">
import { gsap } from "gsap"

const ctx = ref()
const imgParallaxRoot = ref()

onMounted(() => {
	ctx.value = gsap.context((self) => {
		const imgParallax = self.selector!(".gsap-latch")

		gsap.to(imgParallax, {
			scrollTrigger: {
				trigger: imgParallax,
				start: "2% bottom",
				end: "+=1170 top",
				scrub: 0.45,
			},
			objectPosition: "0% 2%",
		})
	}, imgParallaxRoot.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<li
		class="h-[120vh] bg-blue-700 flex gsap-latch-wrapper"
		ref="imgParallaxRoot"
	>
		<BiroResponsive
			tag="article"
			class="sticky self-start p-12 top-16 prose-h3:font-inter prose-h3:font-semibold w-[35%] flex-shrink-0"
			bui-prose-h3
		>
			<h3>A cool title lol</h3>
			<p>
				Some description here to make your mom proud that you made a really
				flashy website lmao
			</p>
		</BiroResponsive>
		<aside class="grid grid-cols-2 grid-rows-6">
			<NuxtImg
				class="object-cover w-full h-full col-span-2 row-span-4 gsap-latch"
				src="https://images.unsplash.com/photo-1678338712030-6b529c30bd41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60"
				quality="75"
				draggable="false"
        loading="lazy"
			/>
			<NuxtImg
				class="object-cover w-full h-full row-span-5 gsap-latch"
				src="https://images.unsplash.com/photo-1678891527680-7bb2a6155cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
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
