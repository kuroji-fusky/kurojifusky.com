<script setup lang="ts">
const artworkCredit = "me"

const canvasRef = ref<HTMLElement | null>()

const handleCanvasResize = () => {
	let canvasWidth = window.innerWidth
	let canvasHeight = window.innerHeight

	canvasRef.value!.setAttribute("width", canvasWidth.toString())
	canvasRef.value!.setAttribute("height", canvasHeight.toString())
}

onMounted(() => {
	handleCanvasResize()
	window.onresize = handleCanvasResize
})
</script>

<template>
	<section class="grid content-center h-screen place-items-center">
		<canvas ref="canvasRef"></canvas>
	</section>
</template>

<style lang="scss"></style>
