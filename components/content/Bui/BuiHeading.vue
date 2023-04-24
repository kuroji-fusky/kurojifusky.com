<script setup lang="ts">
defineProps<{
	tag?: keyof HTMLElementTagNameMap
	level?: 1 | 2 | 3
}>()
</script>

<template>
	<component
		:is="tag ?? `h${level ?? 2}`"
		:class="[`bui-h${level ?? 2}`]"
		data-biro-ui-component="heading"
	>
		<slot />
	</component>
</template>
