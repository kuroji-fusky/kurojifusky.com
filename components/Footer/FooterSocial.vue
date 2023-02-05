<script setup lang="ts">
const props = defineProps<{ name?: string; link?: string }>()
</script>

<template>
	<NuxtLink
		:to="props.link"
		target="_blank"
		class="social-link"
    external
		:aria-label="`${props.name} logo`"
		:title="props.name"
	>
		<slot />
	</NuxtLink>
</template>

<style lang="scss"></style>
