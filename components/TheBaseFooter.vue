<script setup lang="ts">
import { Globe, Coffee } from "lucide-vue-next"
import { socialLinks } from "./Constants"

const currentYear = new Date().getFullYear()
const copyright = `© 2013-${currentYear} Kerby Keith Aquino`

const footerLinks = [
	{
		icon: Coffee,
		text: "Support me on Ko-fi",
		link: "https://ko-fi.com/kuroji_fusky",
	},
	{
		icon: Globe,
		text: "Website source code",
		link: "https://github.com/kuroji-fusky/kurofusky.xyz",
	},
]

const MoreSocials = () => {
	alert("There's supposed to be something there, but I'm lazy as usual lol")
}
</script>

<template>
	<Teleport to="body">
		<ModalContainer />
	</Teleport>
	<footer class="flex justify-between gap-3.5 px-20 py-14 font-inter">
		<p>{{ copyright }}</p>
		<div class="flex items-center">
			<ul
				class="flex gap-x-6 items-center border-r border-r-sona-borahaealt-500 pr-6"
			>
				<li v-for="item in footerLinks">
					<BiroLink
						:href="item.link"
						external
						class="flex items-center gap-x-2"
					>
						<component :is="item.icon" class="w-[1.2rem] h-[1.2rem]" />
						{{ item.text }}
					</BiroLink>
				</li>
			</ul>
			<ul class="flex gap-x-6 items-center pl-6">
				<li v-for="social in socialLinks">
					<template v-if="!social.button">
						<BiroLink
							external
							:href="social.link"
							:title="social.text"
							:aria-label="`${social.text} logo`"
						>
							<component :is="social.icon" class="w-[1.2rem] h-[1.2rem]" />
						</BiroLink>
					</template>
					<template v-else>
						<button
							class="text-opacity-75 transition-colors text-sona-borahaealt-100 hover:text-opacity-100 flex items-center"
							@click="MoreSocials"
							title="More"
							aria-label="More social medias"
						>
							<component :is="social.icon" class="w-[1.2rem] h-[1.2rem]" />
						</button>
					</template>
				</li>
			</ul>
		</div>
	</footer>
</template>

<style lang="scss"></style>
