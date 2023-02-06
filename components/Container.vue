<script setup lang="ts">
import { UseSeoMetaInput } from "@unhead/vue"

const props = defineProps<{ title: string; description?: string }>()
const router = useRoute()
const fullUrl = `https://kurofusky.xyz${router.fullPath}`

const runtime = useRuntimeConfig().public

useHead({
	link: [{ rel: "canonical", href: fullUrl }],
})

const metaTags: UseSeoMetaInput = {
	title: props.title,
	description: props.description,
	ogTitle: props.title,
	ogDescription: props.description,
	ogSiteName: "Kuroji Dump",
	ogType: "website",
	ogUrl: fullUrl,
	twitterTitle: props.title,
	twitterDescription: props.description,
	twitterCard: "summary",
	twitterSite: "@kurojifusky",
	twitterCreator: "@kurojifusky",
}

runtime.dev ? useSeoMeta(metaTags) : useServerSeoMeta(metaTags)
</script>

<template>
	<main>
		<slot />
	</main>
</template>
