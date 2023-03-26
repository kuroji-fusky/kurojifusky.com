<script setup lang="ts">
import { Globe, Coffee } from "lucide-vue-next"
import { socialLinks, copyright } from "./Constants"

const footerLinks = [
	{
		icon: Coffee,
		text: "Support me on Ko-fi",
		shortText: "Ko-Fi",
		link: "https://ko-fi.com/kuroji_fusky",
	},
	{
		icon: Globe,
		text: "Website source code",
		shortText: "Source code",
		link: "https://github.com/kuroji-fusky/kurofusky.xyz",
	},
]

const MoreSocials = () => {
	alert("There's supposed to be something there, but I'm lazy as usual lol")
}
</script>

<template>
	<footer
		class="flex justify-between gap-3.5 px-8 gap-y-6 md:px-16 py-6 md:py-14 font-inter text-left md:text-center flex-col-reverse md:flex-row"
	>
		<p v-once>{{ copyright }}</p>
		<div class="flex flex-col items-start md:items-center md:flex-row gap-y-5">
			<ul
				class="flex flex-col items-center pr-0 border-r-0 md:pr-6 md:border-r gap-y-5 md:flex-row gap-x-6 border-r-sona-borahaealt-500"
			>
				<li v-for="item in footerLinks">
					<BuiLink
						external
						class="flex items-center gap-x-2"
						:href="item.link"
						:title="item.text"
						:aria-label="item.text"
					>
						<component :is="item.icon" class="w-[1.2rem] h-[1.2rem]" />
						<span class="normal-text">
							{{ item.text }}
						</span>
						<span class="shortened-text">
							{{ item.shortText }}
						</span>
					</BuiLink>
				</li>
			</ul>
			<ul
				class="flex flex-col items-start pl-0 md:items-center md:pl-6 gap-y-5 gap-x-6 md:flex-row"
			>
				<li v-for="social in socialLinks">
					<template v-if="!social.button">
						<BuiLink
							external
							class="flex gap-x-1"
							:href="social.link"
							:title="social.text"
							:aria-label="`${social.text} logo`"
						>
							<component
								:is="social.icon"
								class="w-[1.2rem] h-[1.2rem] mr-1 md:mr-0"
							/>
							<span class="block md:hidden">
								{{ social.text }}
							</span>
						</BuiLink>
					</template>
					<template v-else>
						<button
							class="flex items-center text-opacity-75 transition-colors text-sona-borahaealt-100 hover:text-opacity-100"
							@click="MoreSocials"
							title="More"
							aria-label="More social medias"
						>
							<component
								:is="social.icon"
								class="w-[1.2rem] h-[1.2rem] mr-2 md:mr-0"
							/>
							<span class="block md:hidden">
								{{ social.text }}
							</span>
						</button>
					</template>
				</li>
			</ul>
		</div>
	</footer>
</template>

<style lang="scss">
.normal-text {
	@media (max-width: 1068px) and (min-width: 768px) {
		@apply hidden;
	}
}

.shortened-text {
	@media (max-width: 1068px) and (min-width: 894px) {
		@apply block;
	}

	@apply hidden;
}
</style>
