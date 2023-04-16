<script setup lang="ts">
const { page } = useContent()

usePageMeta({
	title: page.value.title,
	description: page.value.description,
})
</script>

<template>
	<ContentDoc v-slot="{ doc }">
		<section class="mt-20">
			<div class="border px-6 py-9 rounded-xl grid grid-cols-3">
				<BuiHeading :level="1" class="font-bold">{{ doc.title }}</BuiHeading>
				<div>Type {{ doc.type }}</div>
			</div>
		</section>
		<ContentRenderer
			class="bui-prose-text-p px-12 pt-10 pb-6 mx-auto w-2/3 prose-p:pb-4"
			tag="article"
			:value="doc"
		/>
	</ContentDoc>
</template>
