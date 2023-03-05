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
		<div class="grid max-w-screen-xl py-20 mx-auto px-14 gap-y-28">
			<LandingProjectsItem
				v-for="(item, index) in featuredProjects"
        :key="index"
				:reversed="!!(index % 2)"
				:name="item.name"
				:description="item.description"
				:product="item.product"
				:project-type="item.type"
				:source-code="item.sourceCode"
				:gradient-start="item.cStart"
				:gradient-end="item.cEnd"
			/>
		</div>
	</section>
</template>
