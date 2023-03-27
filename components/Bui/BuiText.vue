<script setup lang="ts">
const props = defineProps<{
	tag?: keyof HTMLElementTagNameMap | "sub-p"
	overrides?: keyof HTMLElementTagNameMap | "sub-p"
}>()

const classFont = {
	p: "bui-text-p",
	"sub-p": "bui-text-sub-p",
}
</script>

<template>
	<component
		:is="tag ?? 'p'"
		:class="[
			// @ts-ignore
			overrides ? classFont[overrides] : '',
		]"
	>
		<slot />
	</component>
</template>
