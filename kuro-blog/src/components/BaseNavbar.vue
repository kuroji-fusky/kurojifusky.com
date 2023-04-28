<script setup lang="ts">
import { ref } from "vue"
import { MenuIcon, XIcon } from "lucide-vue-next"

const isOpen = ref(false)

const navLinks: { link?: string; text: string }[] = [
	{ text: "Dream Journal" },
	{ text: "Updates", link: "/project-updates" },
	{ text: "The Archives", link: "/archives" },
	{ text: "Others" },
	{ text: "About Me", link: "https://kurojifusky.com/about" },
]
</script>

<template>
	<div
		class="border-0 border-b border-x-kuro-lavender-400 fixed inset-0 bottom-[unset] bg-kuro-dark1"
	>
		<div
			class="flex items-center justify-between px-10 py-5 mx-auto max-w-screen-2xl"
		>
			<div class="flex items-center gap-x-5" aria-label="Kuroji Fusky Blog">
				<a
					href="https://kurojifusky.com"
					class="text-5xl font-semibold font-unbounded"
					>{{ "K" }}</a
				>
				<span class="text-3xl opacity-50 select-none">/</span>
				<a href="/" class="text-4xl font-bold font-inter">Blog</a>
			</div>
			<nav class="relative flex">
				<button
					class="block px-5 py-3 md:hidden relative z-[5]"
					aria-label="Toggle menu"
					@click="isOpen = !isOpen"
				>
					<MenuIcon v-if="!isOpen" />
					<XIcon v-else />
				</button>
				<ul
					role="navigation"
					:class="[!isOpen ? 'opacity-0 pointer-events-none' : '']"
					class="absolute right-0 flex flex-col items-start gap-1 p-4 border rounded-md bg-kuro-lavender-900 md:pointer-events-auto md:opacity-100 md:p-0 md:bg-transparent top-14 md:top-0 w-max md:flex-row md:relative md:border-0"
				>
					<li v-for="(item, index) in navLinks" :key="index">
						<a
							class="px-2 py-2.5 text-md lg:text-lg lg:p-4 block w-full"
							:href="
								!item.link
									? `/${item.text.replace(' ', '-').toLowerCase()}`
									: item.link
							"
							:target="
								!item.link?.startsWith('https://') ? undefined : '_blank'
							"
							:rel="
								!item.link?.startsWith('https://')
									? undefined
									: 'noopenner noreferrer'
							"
							>{{ item.text }}</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>
