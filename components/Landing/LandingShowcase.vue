<script setup lang="ts">
import { featuredProjects } from "../Constants"
</script>

<template>
	<BiroResponsive
		tag="section"
		class="grid content-center"
		bui-gap-mobile="1rem"
		bui-gap-lg="1.25"
	>
		<BiroResponsive
			tag="h2"
			bui-h2
			class="px-12 text-center uppercase font-unbounded"
			>Showcase</BiroResponsive
		>
		<ul class="px-10">
			<LandingShowcaseItem
				v-for="(project, index) in featuredProjects"
				:key="index"
				:name="project.name"
        :desc="project.description"
			/>
		</ul>
	</BiroResponsive>
</template>

<style lang="scss" scoped>
li:nth-child(even) {
  @apply flex-row-reverse;
}
</style>