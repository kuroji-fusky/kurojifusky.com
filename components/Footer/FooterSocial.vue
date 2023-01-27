<template>
	<NuxtLink
		:to="props.link"
		rel="noopener noreferrer"
		target="_blank"
		class="social-link"
        :aria-label="props.name"
        :title="props.name"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ name?: string; link?: string }>()
</script>

<style lang="scss">
</style>
