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
      bui-py-mobile="1.5rem"
      bui-py-lg="3.5"
      bui-py-xl="3"
			class="px-12 text-center uppercase font-unbounded"
			>Showcase</BiroResponsive
		>
		<BiroResponsive tag="ul" class="px-10" bui-gap-y-mobile="1.75rem" bui-gap-y-xl="2.5" bui-gap-y-lg="3">
			<LandingShowcaseItem
				v-for="(project, index) in featuredProjects"
				:key="index"
				:name="project.name"
				:desc="project.description"
			/>
		</BiroResponsive>
	</BiroResponsive>
</template>

<style lang="scss" scoped>
li:nth-child(even) {
	@apply flex-row-reverse;
}
</style>
