<script setup lang="ts">
defineProps<{ href?: string; external?: boolean }>()
</script>

<template>
	<NuxtLink
		class="bui-link text-kuro-lavender-200 inline-block relative w-fit hover:text-kuro-lavender-300 before:content-[''] before:bg-kuro-lavender-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px]"
		:to="href"
		:target="`${!external ? '' : '_blank'}`"
		:rel="`${!external ? '' : 'noreferrer'}`"
	>
		<slot />
	</NuxtLink>
</template>

<style lang="scss" scoped>
.bui-link {
	&::before {
		transform: scaleX(0);
		transform-origin: bottom left;
		transition: transform 250ms ease-out;
	}

	&:hover::before {
		transform: scaleX(1);
	}
}
</style>
