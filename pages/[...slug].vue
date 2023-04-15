<script setup lang="ts">
// usePageMeta({
// 	title: page.title,
// 	description: page.description,
// })
</script>

<template>
	<ContentDoc tag="article" class="lol" v-slot="{ doc }">
		<ContentRenderer :value="doc" />
	</ContentDoc>
</template>
