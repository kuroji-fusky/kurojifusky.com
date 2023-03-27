<script setup lang="ts">
const props = defineProps<{
	tag?: any
	level?: 1 | 2 | 3
}>()
</script>

<template>
	<component :is="tag ?? 'h2'" :class="[`bui-text-h${level ?? 2}`]">
		<slot />
	</component>
</template>
