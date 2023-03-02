<script setup lang="ts">
import gsap from "gsap"

const gsapCtx = ref(),
	sectionRoot = ref<HTMLElement>(),
	textMask = ref<HTMLSpanElement>()

onMounted(() => {
	gsapCtx.value = gsap.context(() => {

	}, sectionRoot.value)
})
onUnmounted(() => gsapCtx.value.revert())
</script>

<template>
	<section ref="sectionRoot" class="fixed inset-0">

	</section>
</template>

<style lang="scss" scoped>
:root {
	--size: 15.5vw;
	--responsive-heading: 5.75;
	--responsive-paragraph: 1.125;
}

h1 {
	font-size: calc(var(--vw) * var(--responsive-heading));
}

p {
	font-size: calc(var(--vw) * var(--responsive-paragraph));
}

.kuro-wordmark {
	@apply bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600 bg-clip-text text-transparent;
}

</style>
