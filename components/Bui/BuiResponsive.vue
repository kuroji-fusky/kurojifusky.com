<script setup lang="ts">
const p = defineProps<{
	tag?: keyof HTMLElementTagNameMap

	// Responsive Proses
	buiProseSubP?: boolean
	buiProseP?: boolean
	buiProseH1?: boolean
	buiProseH2?: boolean
	buiProseH3?: boolean

	// Responsive Text
	buiSubP?: boolean
	buiP?: boolean
	buiH1?: boolean
	buiH2?: boolean
	buiH3?: boolean

	buiMbMobile?: string
	buiMbLg?: string
	buiMbXl?: string
}>()

const classTextProses = [
	p.buiProseSubP ? "bui-prose-r-sub-p" : "",
	p.buiProseP ? "bui-prose-r-p" : "",
	p.buiProseH1 ? "bui-prose-r-h1" : "",
	p.buiProseH2 ? "bui-prose-r-h2" : "",
	p.buiProseH3 ? "bui-prose-r-h3" : "",
]

const classTextResponsive = [
	p.buiSubP ? "bui-text-sub-p" : "",
	p.buiP ? "bui-text-p" : "",
	p.buiH1 ? "bui-text-h1" : "",
	p.buiH2 ? "bui-text-h2" : "",
	p.buiH3 ? "bui-text-h3" : "",
]

const buiMargins = [p.buiMbMobile || p.buiMbLg || p.buiMbXl ? "bui-text-mb" : ""]
</script>

<template>
	<component
		:is="tag ?? 'div'"
		:class="[...classTextProses, ...classTextResponsive, ...buiMargins]"
		:style="[
			buiMbMobile ? `--bui-mb-mobile: ${buiMbMobile}` : '',
			buiMbLg ? `--bui-mb-lg: ${buiMbLg}` : '',
			buiMbXl ? `--bui-mb-xl: ${buiMbXl}` : '',
		]"
	>
		<slot />
	</component>
</template>
