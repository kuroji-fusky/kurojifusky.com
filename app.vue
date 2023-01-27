<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) =>
		titleChunk === "Kuroji Fusky" ? titleChunk : `${titleChunk} - Kuroji Fusky`,
})
</script>
