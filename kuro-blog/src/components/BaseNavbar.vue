<script setup lang="ts">
import { ref } from "vue"
import { MenuIcon, XIcon } from "lucide-vue-next"
import NavbarLink from "./NavbarLink.vue"

const isOpen = ref(false)

type NavLinkItem = {
	text?: string
	slug?: string
}[]

interface NavLinks {
	root: NavLinkItem
	[subMenu: string]: NavLinkItem
}

const navLinks: NavLinks = {
	root: [{ text: "Thoughts" }, { text: "Updates" }],
	Engineering: [
		{ text: "UI/UX Design", slug: "engineering/ui-ux-design" },
		{ text: "Web development", slug: "engineering/web-dev" },
	],
	Tutorials: [
		{ text: "Web Technologies", slug: "tutorials/web-dev" },
		{ text: "DevOps" },
		{ text: "Music production" },
		{
			text: "Film and VFX",
		},
	],
	More: [
		{ text: "Productivity" },
		{ text: "Experiences" },
		{ text: "Dream Journal" },
		{ text: "About Me" },
	],
}
</script>

<template>
	<div
		class="flex items-center justify-between px-10 py-5 lg:py-3.5 mx-auto max-w-screen-2xl"
	>
		<div class="flex items-center gap-x-5" aria-label="Kuroji Fusky Blog">
			<a
				href="https://kurojifusky.com"
				class="text-5xl font-semibold font-unbounded"
				>{{ "K" }}</a
			>
			<span class="text-3xl opacity-50 select-none" aria-hidden="true">/</span>
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
							class="absolute right-0 pt-4 opacity-0 pointer-events-none top-10 group-hover:pointer-events-auto group-hover:opacity-100"
						>
							<ul
								class="flex flex-col text-lg border rounded-md w-max bg-kuro-lavender-900 border-kuro-lavender-500"
							>
								<li v-for="(items, index) in rootItems[1]">
									<NavbarLink
										class="block px-5 py-3 hover:bg-kuro-lavender-500 hover:bg-opacity-30"
										:text="items.text"
										:slug="items.slug"
										:key="index"
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</ul>
		</nav>
	</div>
</template>

<style>
ul :is(#dropdown-label, #nav-main-item > a) {
	@apply px-1 py-2 text-base lg:text-lg lg:px-4 lg:py-2 rounded-md block hover:bg-kuro-violet-400 hover:bg-opacity-50 w-max;
}
</style>
