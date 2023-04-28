<script setup lang="ts">
import { MailIcon, CoffeeIcon } from "lucide-vue-next"
import {
	IconYoutube,
	IconGithub,
	IconMastodon,
	IconTwitter,
} from "@iconify-prerendered/vue-fa6-brands"

const copyright = `© Kerby Keith Aquino`

const socialIcons = [
	{
		text: "Ko-fi",
		link: "https://ko-fi.com/kurojifusky",
		icon: CoffeeIcon,
	},
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
	<footer
		class="flex flex-col items-center py-10 mx-auto max-w-screen-2xl px-9 gap-y-5"
	>
		<ul class="flex gap-3.5">
			<li v-for="(social, index) in socialIcons" :key="index">
				<a
					:href="social.link"
					:aria-label="social.text"
					:title="social.text"
					class="block p-1.5"
					target="_blank"
					rel="noreferrer noopenner"
				>
					<component :is="social.icon" class="w-5 h-[1.2rem]" />
				</a>
			</li>
		</ul>
		<div class="flex flex-wrap justify-center gap-5">
			<a
				id="email"
				class="flex items-center gap-1"
				href="mailto:hello@kurojifusky.com"
			>
				<MailIcon :size="20" /> hello@kurojifusky.com
			</a>
			<span id="copyright">{{ copyright }}</span>
		</div>
	</footer>
</template>
