<script setup lang="ts">
import { gsap } from "gsap"

const isLoaded = ref(false)

onMounted(() => {
	isLoaded.value = true
})
</script>

<template>
	<div
		id="preloader"
		aria-hidden="true"
		:class="[!isLoaded ? 'h-screen' : 'h-0']"
		class="bg-[#07070b] z-50  duration-500  transition-all fixed inset-0"
	>
		<div id="square"></div>
	</div>
</template>

<style scoped></style>
