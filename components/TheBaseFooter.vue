<script setup lang="ts">
const currentYear = new Date().getFullYear()
const copyright = `© 2013-${currentYear} Kerby Keith Aquino`

const footerLinks = [
	{
		link: "https://ko-fi.com/kuroji_fusky",
		text: "Support my broke ass",
		external: true,
	},
	{
		link: "https://github.com/kuroji-fusky/kurofusky.xyz",
		text: "View this website's source code",
		external: true,
	},
]
</script>

<template>
	<footer class="flex gap-3.5 px-10 py-12 font-inter">
		<ul class="w-full grid grid-flow-col gap-6">
			<li
				class="border-r border-r-sona-borahaealt-500 text-opacity-75 text-sona-borahaealt-50"
			>
				<p>
					{{ copyright }}<br />
					All rights reserved.
				</p>
			</li>
			<li>
				<p>
					Reach me out directly:<br>
					<NuxtLink
						class="text-sona-borahaealt-100 hover:text-opacity-100 text-opacity-75 transition-colors"
						to="mailto:hello@kurofusky.xyz"
						>hello@kurofusky.xyz</NuxtLink
					>
				</p>
			</li>
			<li v-for="item in footerLinks">
				<NuxtLink
					class="text-sona-borahaealt-100 hover:text-opacity-100 text-opacity-75 transition-colors"
					:to="item.link"
					:target="`${!item.external ? '' : '_blank'}`"
					:rel="`${!item.external ? undefined : 'noreferrer'}`"
				>
					{{ item.text }}
				</NuxtLink>
			</li>
		</ul>
	</footer>
</template>

<style lang="scss"></style>
