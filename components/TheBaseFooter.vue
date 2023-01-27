<template>
	<footer>
		<div>
			<ul class="grid grid-cols-4 gap-4">
				<li>
					<article>
						<p>Some stupid description about myself</p>
						<NuxtLink to="/about"> More </NuxtLink>
					</article>
					<div id="socials">
						<FooterSocial
							link="https://youtube.com/@kurojifusky"
							name="YouTube"
						>
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
						<FooterSocial
							link="https://youtube.com/@kurojifusky"
							name="Spotify"
						>
							<IconSpotify />
						</FooterSocial>
						<FooterSocial link="https://youtube.com/@kurojifusky" name="iTunes">
							<IconItunesNote />
						</FooterSocial>
					</div>
				</li>
				<li>
					<h2 class="mb-1 text-2xl font-bold font-inter">Heading</h2>
					<ul>
						<li>text</li>
						<li>text</li>
						<li>text</li>
						<li>text</li>
					</ul>
				</li>
			</ul>
			<div id="lower-third">
				<span id="copyright">
					&copy; 2014-{{ currentYear }} Kerby Keith Aquino</span
				>
                <NuxtLink to="https://github.com/kuroji-fusky/kurofusky.xyz">
                    Website source code
                </NuxtLink>
			</div>
		</div>
	</footer>
</template>

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

<style lang="scss" scoped>
#socials {
	@apply flex gap-4;
}

#lower-third {
    @apply flex justify-between;
}
</style>
