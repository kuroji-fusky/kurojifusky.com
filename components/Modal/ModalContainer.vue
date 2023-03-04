<script setup lang="ts">
import { VNode } from "vue"
import { useModalStateStore } from "~~/stores"
const store = useModalStateStore()

defineProps<{ modal?: VNode }>()
</script>

<template>
	<div id="__kuro-modal-container">
		<div v-if="modal">
			<component :is="modal" />
		</div>
		<div
			:class="[
				store.isModalOpen
					? 'bg-opacity-50 backdrop-blur-md'
					: 'bg-opacity-0 backdrop-blur-0',
			]"
			class="pointer-events-none fixed z-[69420] inset-0 bg-black transition-all duration-200"
			aria-hidden="true"
		></div>
	</div>
</template>

<style lang="scss">
#__kuro-modal-container {
	@apply fixed z-[69421] top-0;
}
</style>
