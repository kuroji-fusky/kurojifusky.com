<script setup lang="ts">
interface FixedMedia {
	xl: number
	lg: number
	md?: string
}

interface BiroStyleAttributes {
	// Padding
	px: FixedMedia
	py: FixedMedia
	pt: FixedMedia
	pr: FixedMedia
	pb: FixedMedia
	pl: FixedMedia

	// Margin
	mx: FixedMedia
	my: FixedMedia
	mt: FixedMedia
	mr: FixedMedia
	mb: FixedMedia
	ml: FixedMedia

	// Flexbox/Grid
	gap: FixedMedia
	"gap-x": FixedMedia
	"gap-y": FixedMedia

	// size
	w: FixedMedia
	h: FixedMedia
	size: FixedMedia
}

const props = defineProps<{
	tag?: keyof HTMLElementTagNameMap
	options?: Partial<BiroStyleAttributes>
}>()

let classListRaw: string[] = []

for (const keyProperty of Object.keys(props.options as BiroStyleAttributes)) {
	const isGap =
		keyProperty === "gap-x" || keyProperty === "gap-y" || keyProperty === "gap"
	const isSizes =
		keyProperty === "w" || keyProperty === "h" || keyProperty === "sizes"

	const isPadding =
		keyProperty === "px" ||
		keyProperty === "py" ||
		keyProperty === "pt" ||
		keyProperty === "pr" ||
		keyProperty === "pb" ||
		keyProperty === "pl"

	const isMargin =
		keyProperty == "mx" ||
		keyProperty == "my" ||
		keyProperty == "mt" ||
		keyProperty == "mr" ||
		keyProperty == "mb" ||
		keyProperty == "ml"

	classListRaw.push(
		...[
			isGap ? "bui-gap" : "",
			isPadding ? "bui-padding" : "",
			isMargin ? "bui-margin" : "",
			isSizes ? "bui-sizes" : "",
		]
	)
}

const styleParsed = ref<string[]>([])
const classParsed = ref(Array.from(new Set(classListRaw)))

console.log(Object.keys(props.options as BiroStyleAttributes))

for (const [id, fixedMedia] of Object.entries(
	props.options as BiroStyleAttributes
)) {
	for (const [screen, val] of Object.entries(fixedMedia as FixedMedia)) {
		styleParsed.value.push(`--bui-${id}-${screen}:${val};`)
	}
}
</script>

<template>
	<component :is="tag ?? 'div'" :class="classParsed ?? ''" :style="styleParsed">
		<slot />
	</component>
</template>

<style lang="scss"></style>
