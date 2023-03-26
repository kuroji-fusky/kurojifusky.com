<template>
	<div
		id="nav-list-container"
		class="p-4 border border-b-0 rounded-tl-lg rounded-tr-lg"
	>
		<h2>{{ heading }}</h2>
		<slot />
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ heading?: string }>(), {
	heading: "You're gay lmao",
})
</script>
