<script setup lang="ts">
import { UseSeoMetaInput } from "@unhead/vue"

const props = defineProps<{ title: string; description?: string }>()
const router = useRoute()
const fullUrl = `https://kurofusky.xyz${router.fullPath}`

const runtimeEnv = useRuntimeConfig().public

useHead({
	link: [{ rel: "canonical", href: fullUrl }],
})

const SITE_NAME = "Kuroji Fusky"

const parseTitle =
	router.fullPath !== "/" ? `${props.title}  - ${SITE_NAME}` : props.title

const metaTags: UseSeoMetaInput = {
	title: parseTitle,
	description: props.description,
	ogTitle: props.title,
	ogDescription: props.description,
	ogType: "website",
	ogUrl: fullUrl,
	twitterTitle: props.title,
	twitterDescription: props.description,
	twitterCard: "summary",
	twitterSite: "@kurojifusky",
	twitterCreator: "@kurojifusky",
}

runtimeEnv.dev ? useSeoMeta(metaTags) : useServerSeoMeta(metaTags)
</script>

<template>
	<main>
		<slot />
	</main>
</template>
