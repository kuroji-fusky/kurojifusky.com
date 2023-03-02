<script setup lang="ts">
interface FooterIconsProp {
	name?: string
	link?: string
	icon?: VNode
}

defineProps<FooterIconsProp>()
</script>

<template>
	<NuxtLink
		:to="link"
		target="_blank"
		class="social-link"
		external
		:aria-label="`${name} logo`"
		:title="name"
	>
		<component :is="icon" />
	</NuxtLink>
</template>

<style lang="scss"></style>
