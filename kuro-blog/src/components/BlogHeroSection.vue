<template>
	<section class="flex gap-5 px-8 mx-auto max-w-screen-2xl">
		<BlogItem large class="w-1/2" />
		<div class="flex flex-col w-1/2 gap-y-5">
			<BlogItem />
			<BlogItem />
			<BlogItem />
		</div>
	</section>
</template>

<script setup lang="ts">
import BlogItem from "./BlogItem.vue"
</script>
