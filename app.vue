<script setup lang="ts">
useCalcViewport()

useHead({
	titleTemplate: (titleChunk) =>
		titleChunk === "Kuroji Fusky" ? titleChunk : `${titleChunk} - Kuroji Fusky`,
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
