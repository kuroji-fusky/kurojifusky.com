<script setup lang="ts">
defineProps(["error"])
</script>

<template>
	<div>
		<TheBaseNavbar />
		<main class="min-h-screen"> {{ error.statusCode }} YO WE CAN'T FIND THIS DAMN PAGE SON</main>
		<TheBaseFooter />
	</div>
</template>
