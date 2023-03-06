<script setup lang="ts">
interface ProficencyItemProps {
	skillName?: string
	description?: string
	technologies?: any
}

withDefaults(defineProps<ProficencyItemProps>(), {
	skillName: "Your mom skill",
	description: "Some description here",
	technologies: "technology stuff here",
})

</script>

<template>
	<article
		class="prose-h2:text-[calc(var(--vw)*2.15)] prose-headings:font-bold prose-headings:font-inter"
	>
		<h2>{{ skillName }}</h2>
		<p>{{ description }}</p>
		<div>{{ technologies }}</div>
	</article>
</template>

<style lang="scss"></style>
