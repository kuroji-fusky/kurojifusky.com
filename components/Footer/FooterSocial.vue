<script setup lang="ts">
interface FooterIconsProp {
	name?: string
	link?: string
	icon?: VNode
}

defineProps<FooterIconsProp>()
</script>

<template>
	<BiroLink :href="link" external :aria-label="`${name} logo`" :title="name">
		<component :is="icon" />
	</BiroLink>
</template>

<style lang="scss"></style>
