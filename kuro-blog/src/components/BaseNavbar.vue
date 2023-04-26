<script setup lang="ts">
const navLinks: { link?: string; text: string }[] = [
	{ text: "Dream Journal" },
	{ text: "Updates" },
]
</script>

<template>
	<header
		class="border-0 border-b border-x-kuro-lavender-200 fixed inset-0 bottom-[unset] bg-kuro-dark1"
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
				<span class="text-3xl opacity-50">/</span>
				<a href="/" class="text-4xl font-bold font-inter">Blog</a>
			</div>
			<ul role="navigation" class="flex items-center gap-9">
				<li v-for="(item, index) in navLinks" :key="index">
					<a href="#">{{ item.text }}</a>
				</li>
			</ul>
		</div>
	</header>
	<div class="py-14" aria-hidden="true"></div>
</template>
