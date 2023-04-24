<script setup lang="ts">
const props = defineProps<{
	tag?: keyof HTMLElementTagNameMap
	proseP?: boolean
	proseH1?: boolean
	proseH2?: boolean
	proseH3?: boolean
}>()
</script>

<template>
	<component
		:is="tag ?? 'article'"
		:class="[
			props.proseH1 ? 'bui-prose-h1' : '',
			props.proseH2 ? 'bui-prose-h2' : '',
			props.proseH3 ? 'bui-prose-h3' : '',
			props.proseP ? 'bui-prose-p' : '',
		]"
    data-biro-ui-component="article"
	>
		<slot />
	</component>
</template>
