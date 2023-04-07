<script setup lang="ts">
// usePageMeta({
// 	title: page.title,
// 	description: page.description,
// })
</script>

<template>
	<Container>
		<ContentDoc tag="article" v-slot="{ doc }">
			<ContentRenderer :value="doc" />
		</ContentDoc>
	</Container>
</template>
