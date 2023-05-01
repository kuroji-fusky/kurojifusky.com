<script setup lang="ts">
defineProps<{
	text?: string
	slug?: string
}>()
</script>

<template>
	<a
		:href="!slug ? `/${text!.replace(' ', '-').toLowerCase()}` : `/${slug}`"
		class="nav-link"
	>
		{{ text }}
	</a>
</template>
