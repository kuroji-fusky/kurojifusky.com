<script setup lang="ts">
defineProps<{
	src: string
	alt?: string
}>()
</script>

<template>
	<img :src="src" :alt="alt" decoding="async" loading="lazy" />
</template>
