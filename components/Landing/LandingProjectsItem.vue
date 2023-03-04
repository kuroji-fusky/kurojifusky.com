<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next"
import { IconGithub } from "@iconify-prerendered/vue-fa6-brands"

interface ProjectItemProps {
	reversed?: boolean
	name: string
	description: string
	product?: string
	sourceCode: string
	projectType?: string
	gradientStart?: string
	gradientEnd?: string
}

defineProps<ProjectItemProps>()
</script>

<template>
	<div
		class="grid grid-flow-col md:grid-flow-row grid-rows-2 md:grid-rows-1 grid-cols-8 gap-8"
	>
		<aside
			class="bg-red-900 col-span-8 md:col-span-3 lg:col-span-2 grid place-items-center text-center h-[16.5rem]"
			:class="[!reversed ? 'order-1' : 'order-1 md:order-2']"
		>
			image
		</aside>
		<article
			class="col-span-8 md:col-span-5 lg:col-span-6 flex flex-col justify-center gap-y-3"
			:class="[!reversed ? 'order-2' : 'order-2 md:order-1']"
		>
			<h2 class="font-inter font-bold text-4xl">{{ name }}</h2>
			<p>{{ description }}</p>
			<p
				class="flex gap-x-2 uppercase"
				:aria-label="`Project type: ${projectType}`"
			>
				<span class="text-sona-borahae-50 text-opacity-75">Type</span>
				<span class="text-sona-borahae-50">{{ projectType }}</span>
			</p>
			<ul class="flex gap-4 flex-wrap">
				<li v-if="product">
					<BiroLink
						:href="product"
						external
						class="flex gap-x-1.5 items-center"
					>
						<span>View project</span>
						<ExternalLink :size="17" />
					</BiroLink>
				</li>
				<li>
					<BiroLink
						:href="`https://github.com/${sourceCode}`"
						external
						class="flex gap-x-1.5 items-center"
					>
						<IconGithub />
						<span>View source code</span>
						<ExternalLink :size="17" />
					</BiroLink>
				</li>
			</ul>
		</article>
	</div>
</template>

<style lang="scss"></style>
