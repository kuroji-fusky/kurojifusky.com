<script setup lang="ts">
import { MailIcon } from "lucide-vue-next"
import {
	IconYoutube,
	IconGithub,
	IconMastodon,
	IconTwitter,
} from "@iconify-prerendered/vue-fa6-brands"

const currentYear = new Date().getFullYear()
const copyright = `© 2013-${currentYear} Kerby Keith Aquino`

const socialIcons = [
	{
		text: "YouTube",
		link: "https://www.youtube.com/@kurojifusky",
		icon: IconYoutube,
	},
	{
		text: "GitHub",
		link: "https://github.com/kurojifusky",
		icon: IconGithub,
	},
	{
		text: "Mastodon",
		link: "https://furry.engineer/@kurojifusky",
		icon: IconMastodon,
	},
	{
		text: "Twitter",
		link: "https://twitter.com/kurojifusky",
		icon: IconTwitter,
	},
]
</script>

<template>
	<footer class="flex justify-between py-10 mx-auto max-w-screen-2xl px-9">
		<span id="copyright">{{ copyright }}</span>
		<ul class="flex gap-5">
			<li v-for="(social, index) in socialIcons" :key="index">
				<a :href="social.link" :aria-label="social.text" :title="social.text">
					<component :is="social.icon" class="w-5 h-[1.2rem]" />
				</a>
			</li>
			<a
				id="email"
				class="flex items-center gap-1"
				href="mailto:hello@kurojifusky.com"
			>
				<MailIcon :size="20" /> hello@kurojifusky.com
			</a>
		</ul>
	</footer>
</template>
