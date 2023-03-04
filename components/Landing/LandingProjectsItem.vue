<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next"
import { IconGithub } from "@iconify-prerendered/vue-fa6-brands"

interface ProjectItemProps {
	reversed?: boolean
	name: string
	description: string
	product?: string
	svg?: VNode
	img?: string
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
			class="col-span-8 md:col-span-3 lg:col-span-2 grid place-items-center text-center h-[16.5rem] relative"
			:class="[!reversed ? 'order-1' : 'order-1 md:order-2']"
		>
			<component v-if="svg" :is="svg" />
			<div
				class="absolute w-[32rem] h-[8rem] bg-red-600 blur-[127px]"
				:class="[!reversed ? 'rotate-[32deg]' : '-rotate-[32deg]']"
				aria-hidden="true"
			/>
		</aside>
		<article
			class="relative z-[2] col-span-8 md:col-span-5 lg:col-span-6 flex flex-col justify-center"
			:class="[!reversed ? 'order-2' : 'order-2 md:order-1']"
		>
			<p
				class="flex gap-x-2 uppercase text-sona-borahae-50 text-opacity-70"
				:aria-label="`Project type: ${projectType}`"
			>
				{{ projectType }}
			</p>
			<h2 class="font-inter font-bold text-4xl py-4">{{ name }}</h2>
			<p>{{ description }}</p>
			<ul class="flex gap-6 flex-wrap py-5">
				<li v-if="product">
					<BiroLink
						:href="product"
						external
						class="flex gap-x-1.5 items-center"
					>
						<ExternalLink :size="17" />
						<span>View project</span>
					</BiroLink>
				</li>
				<li>
					<BiroLink
						:href="`https://github.com/${sourceCode}`"
						external
						class="flex gap-x-1.5 items-center"
					>
						<IconGithub />
						<span>Source code</span>
					</BiroLink>
				</li>
			</ul>
		</article>
	</div>
</template>

<style lang="scss"></style>
