<script setup lang="ts">
import { featuredProjects } from "../Constants"
</script>

<template>
	<section>
		<div
			class="text-center my-8 font-inter text-[calc(var(--vw)*3.5)] font-extrabold"
		>
			<h1>Featured Projects</h1>
		</div>
		<div class="px-14 grid gap-y-20 mx-auto max-w-screen-2xl">
			<LandingProjectsItem
				v-for="(item, index) in featuredProjects"
				:reversed="!!(index % 2)"
				:name="item.name"
				:description="item.description"
				:product="item.product"
				:project-type="item.type"
				:source-code="item.sourceCode"
			/>
		</div>
	</section>
</template>
