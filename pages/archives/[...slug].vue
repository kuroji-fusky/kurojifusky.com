<script setup lang="ts">
const { page } = useContent()
</script>

<template>
	<Container :title="page.title" :description="page.description">
		<ContentDoc tag="article"/>
	</Container>
</template>
