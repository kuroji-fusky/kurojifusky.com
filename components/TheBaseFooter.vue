<script setup lang="ts">
import { footerLinks } from "./Socials"
const currentYear = new Date().getFullYear()
const copyright = `© 2013-${currentYear} Kerby Keith Aquino`
</script>

<template>
	<footer>
		<ul class="socials">
			<li v-for="(item, index) in footerLinks" :key="index">
				<FooterSocial :name="item.name" :link="item.link" :icon="item.icon" />
			</li>
		</ul>
		<div class="links">
			<NuxtLink
				class="link-underline"
				to="https://ko-fi.com/kuroji_fusky"
				target="_blank"
				external
				>Support my broke ass
			</NuxtLink>
			<NuxtLink
				class="link-underline"
				to="https://github.com/kuroji-fusky/kurofusky.xyz"
				target="_blank"
				external
			>
				Website source code
			</NuxtLink>
		</div>
		<span id="copyright"> {{ copyright }}</span>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	@apply grid grid-cols-2 grid-rows-2 gap-3.5 px-12 py-8;

	grid-template-areas:
		"socials links"
		"socials copyright";
}

.socials {
	@apply flex text-xl gap-8 items-center;
	grid-area: socials;
}

#copyright {
	grid-area: copyright;
	@apply gap-1 #{!important};
}

.links {
	grid-area: links;
	@apply font-jetbrains-mono;
}

:is(.links, #copyright) {
	@apply text-sm flex justify-end gap-3;
}
</style>
