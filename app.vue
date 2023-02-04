<script setup lang="ts">
useCalcViewport()

useHead({
	titleTemplate: (titleChunk) =>
		titleChunk === "Kuroji Fusky" ? titleChunk : `${titleChunk} - Kuroji Fusky`,
})

onBeforeMount(() => {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("source is your mom")
  })
})

</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
