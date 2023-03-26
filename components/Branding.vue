<template>
	<div v-if="icon" v-html="icon" />
</template>

<script setup lang="ts">
const props = defineProps<{
	name?: string
}>()

const icons = Object.fromEntries(
	Object.entries(import.meta.glob("~/assets/*.svg", { as: "raw" })).map(
		([key, value]) => {
			const filename = key.split("/").pop()!.split(".").shift()
			return [filename, value]
		}
	)
)

const icon = props.name && (await icons?.[props.name]?.())
</script>
