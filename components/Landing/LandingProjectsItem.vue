<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next"
import { IconGithub } from "@iconify-prerendered/vue-fa6-brands"
import { FeaturedProjects } from "../Interfaces"

interface ProjectItemProps extends FeaturedProjects {
	reversed?: boolean
	name: string
	description: string
	projectType: "Extension" | "Website" | "Library"
	img: string
	wip?: boolean
	product?: string
	sourceCode: string
	gradientStart: string
	gradientEnd: string
	bgColor?: string
}

defineProps<ProjectItemProps>()
</script>

<template>
	<div
		class="grid grid-flow-col grid-cols-8 grid-rows-2 gap-12 md:grid-flow-row md:grid-rows-1"
	>
		<aside
			class="col-span-8 md:col-span-3 lg:col-span-2 grid place-items-center text-center h-[17.5rem] relative"
			:class="[!reversed ? 'order-1' : 'order-1 md:order-2']"
		>
			<div
				:class="[bgColor && 'bg-sona-borahaealt-800']"
				class="relative z-[1] rounded-xl aspect-square w-[calc(var(--vw)*13.5)] h-[calc(var(--vw)*13.5)] my-0"
			>
				<NuxtImg
					loading="lazy"
					format="webp"
					:src="img"
					class="rounded-[inherit] aspect-square"
					quality="80"
				/>
			</div>
			<div
				aria-hidden="true"
				class="absolute w-[32rem] h-[8rem] blur-[75px]"
				:class="[
					!reversed
						? 'rotate-[32deg] bg-gradient-to-r'
						: '-rotate-[32deg] bg-gradient-to-br',
					,
					gradientStart ?? 'from-red-500',
					gradientEnd ?? 'to-blue-500',
				]"
			/>
		</aside>
		<article
			class="relative z-[2] col-span-8 md:col-span-5 lg:col-span-6 flex flex-col justify-center"
			:class="[!reversed ? 'order-2' : 'order-2 md:order-1']"
		>
			<p
				class="flex uppercase gap-x-2 text-sona-borahae-50 text-opacity-70"
				:aria-label="`Project type: ${projectType}`"
			>
				{{ projectType }}
			</p>
			<h2 class="py-4 text-4xl font-bold font-inter">{{ name }}</h2>
			<p>{{ description }}</p>
			<ul class="flex flex-wrap gap-6 py-5">
				<li v-if="product">
					<BiroLink
						:href="product"
						external
						class="flex gap-x-1.5 items-center"
						:title="
							projectType !== 'Extension'
								? 'View project'
								: 'View in Visual Studio Marketplace'
						"
					>
						<ExternalLink :size="17" />
						<span v-if="projectType !== 'Extension'">View project</span>
						<span v-else>View in Visual Studio Marketplace</span>
					</BiroLink>
				</li>
				<li>
					<BiroLink
						:href="`https://github.com/${sourceCode}`"
						external
						class="flex gap-x-1.5 items-center"
						title="Source code"
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
