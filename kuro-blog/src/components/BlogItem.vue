<template>
	<div id="blog-posts" class="flex gap-7" :class="[large ? 'flex-col' : '']">
		<div
			id="img-container"
			class="flex-shrink-0 rounded-md bg-kuro-lavender-900"
			:class="[large ? 'h-[23.5rem]' : 'w-1/2 h-[12rem]']"
		></div>
		<div class="flex flex-col w-full gap-1.5">
			<h2 class="text-3xl font-bold font-inter">{{ title }}</h2>
			<p>{{ excerpt }}</p>
			<span>{{ date }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
interface BlogProps {
	large?: boolean
	title?: string
	excerpt?: string
	date?: string
}

withDefaults(defineProps<BlogProps>(), {
	large: false,
	title: "A blog title",
	excerpt: "Gurl I'm your candy",
	date: new Date("2020-01-01").toLocaleDateString(),
})
</script>
