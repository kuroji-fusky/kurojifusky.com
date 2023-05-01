<script setup lang="ts">
interface BlogProps {
	large?: boolean
	img?: string
	title?: string
	excerpt?: string
	date?: string
}

withDefaults(defineProps<BlogProps>(), {
	large: false,
	title: "A blog title",
	img: "https://lh3.googleusercontent.com/0WLiqvslMkF0huOyg7oq6lZfzadJbm-7KQ-KVR1Y27AoThTEs69rav1A_UV4WWljrgnOR7Vh0YuPKIRNpJiNfsV9GeE9Lbfs-Q",
	excerpt:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus nam aperiam neque. Quibusdam dicta corrupti fugiat eaque odio aspernatur odit.",
	date: new Date("2020-03-15").toLocaleDateString(),
})
</script>

<template>
	<div
		id="blog-posts"
		class="flex gap-6"
		:class="[large ? 'flex-col' : 'border-0 border-b pb-6 border-neutral-400']"
	>
		<a
			href="#"
			id="img-container"
			class="flex-shrink-0 overflow-hidden rounded-md bg-kuro-lavender-900 aspect-video"
			:class="[large ? 'h-[28rem]' : ' h-[10.5rem] w-[12rem]']"
		>
			<img
				:src="img"
				:alt="`Image cover for ${title}`"
				class="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
				draggable="false"
			/>
		</a>
		<article class="flex flex-col w-full" :class="[large ? 'gap-4' : 'gap-3']">
			<div id="category-container" class="flex flex-wrap gap-2.5">
				<span class="mr-auto font-bold text-kuro-royalblue-300 font-inter"
					>Category</span
				>
			</div>
			<h2
				class="font-bold font-inter"
				:class="[large ? 'text-5xl' : 'text-3xl']"
			>
				<a class="hover:underline hover:text-kuro-lavender-200" href="#">{{
					title
				}}</a>
			</h2>
			<p class="text-neutral-100">{{ excerpt }}</p>
			<span class="text-sm font-jetbrains-mono">{{ date }}</span>
		</article>
	</div>
</template>
