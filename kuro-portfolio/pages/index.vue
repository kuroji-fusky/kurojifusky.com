<script setup lang="ts">
usePageMeta({
	title: "UNDER CONSTRUCTION",
	description:
		"Kuroji is a curious blue fox-husky guy on the internet that makes cool things!",
})
</script>

<template>
	<BuiLayout
		class="grid text-center"
		:options="{
			mt: { xl: 5, lg: 3.5, md: '1rem' },
			mb: { xl: 2, lg: 2.5, md: '0.6rem' },
			px: { xl: 10, lg: 5, md: '1.5rem' },
			'gap-y': { xl: 2, lg: 3, md: '2rem' },
		}"
	>
		<BuiArticle prose-h2 prose-p tag="div">
			<ContentDoc tag="article" class="prose-p:mb-4 prose-h2:mb-10" />
		</BuiArticle>
	</BuiLayout>
</template>
