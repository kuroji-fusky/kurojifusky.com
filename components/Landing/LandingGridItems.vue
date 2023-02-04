<script setup lang="ts">
const props = defineProps<{
  items?: {
    name: string
    description: string
    linkSource: string
    linkProject: string
  }[]
}>()
</script>

<template>
	<div class="table-wrapper" role="list">
		<LandingItem />
		<LandingItem />
		<LandingItem />
		<LandingItem />
		<LandingItem />
		<LandingItem />
	</div>
</template>

<style lang="scss">
.table-wrapper {
	@apply grid grid-cols-2 gap-6 max-w-screen-xl mx-auto;
}
</style>
