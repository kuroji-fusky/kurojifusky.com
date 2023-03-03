<script setup lang="ts">
defineProps<{ href?: string; external?: boolean }>()
</script>

<template>
	<NuxtLink
		class="text-opacity-75 transition-colors text-sona-borahaealt-100 hover:text-opacity-100"
		:to="href"
		:target="`${!external ? '' : '_blank'}`"
		:rel="`${!external ? '' : 'noreferrer'}`"
	>
		<slot />
	</NuxtLink>
</template>

<style scoped></style>
