<script setup lang="ts">
import { useModalStateStore } from "~~/stores"
const store = useModalStateStore()
</script>

<template>
	<div id="__kuro-modal-container">
		<slot></slot>
		<div
			class="pointer-events-none fixed z-[69420] inset-0 bg-opacity-0 bg-black"
		></div>
	</div>
</template>

<style lang="scss">
#__kuro-modal-container {
	@apply fixed z-[99999];
}
</style>
