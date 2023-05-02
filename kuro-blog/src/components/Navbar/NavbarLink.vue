<script setup lang="ts">
defineProps<{
	text?: string
	slug?: string
	description?: string
}>()
</script>

<template>
	<a
		:href="!slug ? `/${text!.replace(' ', '-').toLowerCase()}` : `/${slug}`"
		class="nav-link"
	>
		<span>{{ text }}</span>
		<span v-if="description">{{ description }}</span>
	</a>
</template>
