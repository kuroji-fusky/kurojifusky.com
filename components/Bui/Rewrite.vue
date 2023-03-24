<script setup lang="ts">
interface FixedMedia {
	xl: number
	lg: number
	md: string
}

interface BiroStyleAttributes {
	// Padding
	px: FixedMedia
	py: FixedMedia
	pt: FixedMedia
	pb: FixedMedia

	// Margin
	mx: FixedMedia
	my: FixedMedia
	mt: FixedMedia
	mb: FixedMedia

	// Flexbox/Grid
	gap: FixedMedia
	"gap-x": FixedMedia
	"gap-y": FixedMedia
}

const props = defineProps<{
  tag?: keyof HTMLElementTagNameMap
	options?: Partial<BiroStyleAttributes>
}>()

const styleParsed = ref<string[]>([])
const classParsed = ref<string[]>([])

for (const [identifier, fixedMedia] of Object.entries(
	props.options as BiroStyleAttributes
)) {
	const isGap =
		identifier == "gap" || identifier == "gap-x" || identifier == "gap-y"

	const isPadding =
		identifier == "px" ||
		identifier == "py" ||
		identifier == "pt" ||
		identifier == "pb"

	const isMargin =
		identifier == "mx" ||
		identifier == "my" ||
		identifier == "mt" ||
		identifier == "mb"

	classParsed.value.push([
		isMargin ? "bui-margin" : undefined,
		isPadding ? "bui-padding" : undefined,
		isGap ? "bui-gap" : undefined,
	] as any)

	for (const [screen, val] of Object.entries(fixedMedia as FixedMedia)) {
		styleParsed.value.push(`--bui-${identifier}-${screen}: ${val};`)
	}
}
</script>

<template>
	<component :is="tag ?? 'div'" :class="classParsed" :style="styleParsed">
    <slot />
  </component>
</template>

<style lang="scss"></style>
