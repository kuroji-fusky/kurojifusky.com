<script setup lang="ts">
interface _Props {
	tag?: keyof HTMLElementTagNameMap
	subP?: boolean
}

const props = defineProps<_Props>()
</script>

<template>
	<component
		:is="tag ?? 'p'"
		:class="[!props.subP ? 'bui-p' : 'bui-sub-p']"
		data-biro-ui-component="text-container"
	>
		<slot />
	</component>
</template>
