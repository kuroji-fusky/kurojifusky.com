<script setup lang="ts">
import { featuredProjects } from "../Constants"
</script>

<template>
	<BuiRes BuiRes class="grid content-center" :options="{}">
		<BuiHeading
			tag="h2"
			bui-h2
			:options="{ py: { xl: 3, lg: 3.5, md: '1.5rem' } }"
			class="px-12 text-center uppercase font-unbounded"
			>Showcase</BuiHeading
		>
		<BuiRes
			tag="ul"
			class="grid px-10 gap-y-10"
			:options="{ 'gap-y': { xl: 2.5, lg: 3, md: '1.75rem' } }"
		>
			<LandingShowcaseItem
				v-for="(project, index) in featuredProjects"
				:key="index"
				:name="project.name"
				:desc="project.description"
			/>
		</BuiRes>
	</BuiRes>
</template>

<style lang="scss" scoped>
li:nth-child(even) {
	@apply flex-row-reverse;
}
</style>
