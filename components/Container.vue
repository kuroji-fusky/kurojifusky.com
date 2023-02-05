<script setup lang="ts">
const props = defineProps<{ title: string; description?: string }>()

const router = useRoute()
const fullUrl = `https://kurofusky.xyz${router.fullPath}`

useHead({
	title: props.title,
	link: [{ rel: "canonical", href: fullUrl }],
	meta: [
		{ name: "description", content: props.description },
		{ name: "twitter:title", content: props.title },
		{ name: "twitter:description", content: props.description },
		{ name: "twitter:site", content: "@kurojifusky" },
		{ name: "twitter:creator", content: "@kurojifusky" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:url", content: fullUrl },
		{ property: "og:url", content: fullUrl },
		{ property: "og:description", content: props.description },
		{ property: "og:site_name", content: "Kuroji Dump" },
		{ property: "og:type", content: "website" },
	],
})
</script>

<template>
	<main>
		<slot />
	</main>
</template>

<style scoped></style>