<script setup lang="ts">
interface YTVideoProps {
	id?: string
	centered?: boolean
}

const props = withDefaults(defineProps<YTVideoProps>(), {
	id: "VxrSdC_yugQ",
	centered: false,
})
</script>

<template>
	<div id="embed-video" :class="[!props.centered ?? 'flex justify-center']">
		<iframe
			:src="`https://www.youtube.com/embed/${props.id}`"
			frameborder="0"
			class="overflow-hidden rounded-md"
			allow="encrypted-media; web-share"
		/>
	</div>
</template>

<style scoped>
#embed-video iframe {
	@apply aspect-video;

	height: calc(var(--vw) * 30);
}
</style>
