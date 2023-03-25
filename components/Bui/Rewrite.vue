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

let classListRaw: string[] = []

for (const keyIdentifier of Object.keys(props.options as BiroStyleAttributes)) {
	const isGap =
		keyIdentifier === "gap-x" ||
		keyIdentifier === "gap-y" ||
		keyIdentifier === "gap"

	const isPadding =
		keyIdentifier === "px" ||
		keyIdentifier === "py" ||
		keyIdentifier === "pt" ||
		keyIdentifier === "pb"

	const isMargin =
		keyIdentifier == "mx" ||
		keyIdentifier == "my" ||
		keyIdentifier == "mt" ||
		keyIdentifier == "mb"

	classListRaw.push(
		...[
			isGap ? "bui-gap" : "",
			isPadding ? "bui-padding" : "",
			isMargin ? "bui-maegin" : "",
		]
	)
}

const styleParsed = ref<string[]>([])
const classParsed = Array.from(new Set(classListRaw))

for (const [id, fixedMedia] of Object.entries(
	props.options as BiroStyleAttributes
)) {
	for (const [screen, val] of Object.entries(fixedMedia as FixedMedia)) {
		styleParsed.value.push(`--bui-${id}-${screen}:${val};`)
	}
}
</script>

<template>
	<component data-bui-wrapper  :is="tag ?? 'div'" :class="classParsed" :style="styleParsed">
		<slot />
	</component>
</template>

<style lang="scss"></style>
