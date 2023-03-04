<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';

const currentYear = new Date().getFullYear()
const copyright = `© 2013-${currentYear} Kerby Keith Aquino`

const footerLinks = [
	{
		link: "https://ko-fi.com/kuroji_fusky",
		text: "Support my broke ass on Ko-fi",
		external: true,
	},
	{
		link: "https://github.com/kuroji-fusky/kurofusky.xyz",
		text: "Website source code",
		external: true,
	},
]
</script>

<template>
	<footer class="flex gap-3.5 px-10 py-12 font-inter">
		<ul class="grid w-full grid-flow-col gap-6">
			<li
				class="text-opacity-75 border-r border-r-sona-borahaealt-500 text-sona-borahaealt-50"
			>
				<p>
					{{ copyright }}<br />
					All rights reserved.
				</p>
			</li>
			<li>
				<p>
					Reach me out directly:<br />
					<BiroLink href="mailto:hello@kurofusky.xyz"
						>hello@kurofusky.xyz</BiroLink
					>
				</p>
			</li>
			<li v-for="item in footerLinks">
				<BiroLink :to="item.link" :external="!item.external" class="flex items-center gap-x-1">
					{{ item.text }}
          <ExternalLink :size="16" />
				</BiroLink>
			</li>
		</ul>
	</footer>
</template>

<style lang="scss"></style>
