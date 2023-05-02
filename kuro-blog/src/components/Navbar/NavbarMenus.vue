<script setup lang="ts">
import NavbarLink from "./NavbarLink.vue"

import { ref } from "vue"

const isOpen = ref(false)
import { MenuIcon, XIcon, SearchIcon, SunIcon } from "lucide-vue-next"

interface NavLinkItem {
	text?: string
	slug?: string
	description?: string
}

interface NavLinks {
	root: Omit<NavLinkItem, "description">[]
	[subMenu: string]: NavLinkItem[]
}

const navLinks: NavLinks = {
	root: [{ text: "Thoughts" }, { text: "Updates" }],
	Engineering: [
		{ text: "UI/UX Design", slug: "engineering/ui-ux-design" },
		{ text: "Web development", slug: "engineering/web-dev" },
	],
	Tutorials: [
		{
			text: "Web Technologies",
			slug: "tutorials/web-dev",
			description: "Frameworks, and shit idk",
		},
		{ text: "Back-end and DevOps", description: "I'm too dumb for this lmao" },
		{ text: "Music production", description: "Making unbearable music" },
		{
			text: "Film and VFX",
			description: "Share that shit visually",
		},
	],
	More: [
		{ text: "Productivity" },
		{ text: "Experiences" },
		{ text: "Dream Journal" },
		{ text: "About Me" },
	],
}

const lazy = () => {
	alert(
		"Please understand that building a website from scratch with code is hard ;w;"
	)
}
</script>

<template>
	<nav class="relative flex gap-x-1">
		<button
			class="block px-5 py-3 md:hidden relative z-[5]"
			aria-label="Toggle menu"
			@click="isOpen = !isOpen"
		>
			<MenuIcon v-if="!isOpen" />
			<XIcon v-else />
		</button>
		<ul
			:class="[!isOpen ? 'opacity-0 pointer-events-none' : undefined]"
			class="absolute right-0 flex flex-col items-center gap-1 p-4 border rounded-md bg-kuro-lavender-900 md:pointer-events-auto md:opacity-100 md:p-0 md:bg-transparent top-14 md:top-0 w-max md:flex-row md:relative md:border-0 font-inter"
		>
			<div
				v-for="(rootItems, index) in Object.entries(navLinks)"
				:key="index"
				:class="[
					rootItems[0] === 'root'
						? 'contents'
						: 'relative cursor-default dropdown group',
				]"
				:aria-labelledby="
					rootItems[0] === 'root' ? undefined : 'dropdown-label'
				"
			>
				<li
					v-if="rootItems[0] === 'root'"
					id="nav-main-item"
					v-for="(lonks, index) in rootItems[1]"
				>
					<NavbarLink :key="index" :text="lonks.text" />
				</li>
				<div class="contents" v-else>
					<span id="dropdown-label">
						{{ rootItems[0] }}
					</span>
					<div
						class="absolute right-0 pt-4 opacity-0 pointer-events-none top-10 group-hover:pointer-events-auto group-hover:opacity-100 transition-all"
					>
						<ul
							class="flex flex-col text-lg border rounded-md w-max bg-kuro-lavender-900 border-kuro-lavender-500"
						>
							<li v-for="(items, index) in rootItems[1]">
								<NavbarLink
									class="block px-5 py-3 hover:bg-kuro-lavender-500 hover:bg-opacity-30"
									:key="index"
									:text="items.text"
									:slug="items.slug"
									:description="items.description"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</ul>
		<button aria-label="Toggle theme" @click="lazy">
			<SunIcon />
		</button>
		<button aria-label="Search" @click="lazy">
			<SearchIcon />
		</button>
	</nav>
</template>

<style scoped>
ul :is(#dropdown-label, #nav-main-item > a),
ul ~ button {
	@apply px-1 py-2 text-base lg:text-lg lg:px-4 lg:py-2 rounded-md block hover:bg-kuro-violet-400 hover:bg-opacity-20 w-max;
}

ul ~ button {
	@apply px-3 py-2;
}
</style>
