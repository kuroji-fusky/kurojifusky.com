<script setup lang="ts">
import {
	IconYoutube,
	IconTwitter,
	IconGithub,
	IconSoundcloud,
	IconSpotify,
	IconItunesNote,
} from "@iconify-prerendered/vue-fa6-brands"

const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="grid-container">
		<div class="g-socials">
			<FooterSocial link="https://youtube.com/@kurojifusky" name="YouTube">
				<IconYoutube />
			</FooterSocial>
			<FooterSocial link="https://twitter.com/kurojifusky" name="Twitter">
				<IconTwitter />
			</FooterSocial>
			<FooterSocial link="https://github.com/kuroji-fusky" name="Github">
				<IconGithub />
			</FooterSocial>
			<FooterSocial
				link="https://soundcloud.com/kuroji-fusky"
				name="SoundCloud"
			>
				<IconSoundcloud />
			</FooterSocial>
			<FooterSocial link="https://youtube.com/@kurojifusky" name="Spotify">
				<IconSpotify />
			</FooterSocial>
			<FooterSocial link="https://youtube.com/@kurojifusky" name="iTunes">
				<IconItunesNote />
			</FooterSocial>
		</div>
		<div class="g-links">
			<NuxtLink to="https://ko-fi.com/kuroji_fusky" target="_blank" external
				>Support my broke ass</NuxtLink
			>
			<NuxtLink
				to="https://github.com/kuroji-fusky/kurofusky.xyz"
				target="_blank"
				external
			>
				Website source code
			</NuxtLink>
		</div>
		<span id="copyright" class="g-copyright">
			&copy; 2014-{{ currentYear }} Kerby Keith Aquino</span
		>
	</footer>
</template>

<style lang="scss" scoped>
.grid-container {
	@apply grid grid-cols-2 grid-rows-2 gap-3.5 px-12;

	grid-template-areas:
		"socials links"
		"socials copyright";
}

.g {
	&-socials {
		@apply flex text-xl gap-8 items-center;
		grid-area: socials;
	}

	&-copyright {
		grid-area: copyright;
	}

	&-links {
		grid-area: links;
	}

	&-links,
	&-copyright {
		@apply text-sm flex justify-end gap-3;
	}
}
</style>
