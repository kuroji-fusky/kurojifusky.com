<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faGithub,
		faYoutube,
		faTwitter,
		faSpotify,
		faItunesNote,
		faSoundcloud
	} from '@fortawesome/free-brands-svg-icons';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons/index.es';
	const year = new Date().getFullYear();

	interface FooterItems {
		heading: string;
		external?: boolean;
		links: Array<{
			name: string;
			link: string;
			icon?: IconDefinition;
		}>;
	}

	const footerItems: FooterItems[] = [
		{
			heading: 'Creative Works',
			external: false,
			links: [
				{ name: 'Portfolio', link: '/portfolio' },
				{ name: 'Discography', link: '/discography' },
				{ name: 'Filmography', link: '/film' },
				{ name: 'Blog Posts', link: '/blog' }
			]
		},
		{
			heading: 'Open-Source Projects',
			external: true,
			links: [
				{ name: 'Searchpets!', link: 'https://searchpets.xyz/' },
				{ name: 'The Foxington Vault', link: 'https://www.foxingtonvault.com/' },
				{ name: 'Biro UI', link: 'https://biro-ui.kurofusky.xyz/' }
			]
		},
		{
			heading: "I'm in these places",
			external: true,
			links: [
				{ name: 'Kuroji Fusky', link: '#', icon: faYoutube },
				{ name: 'Kuroji Fusky PLUS', link: '#', icon: faYoutube },
				{ name: 'Twitter', link: '#', icon: faTwitter },
				{ name: 'GitHub', link: '#', icon: faGithub },
				{ name: 'SoundCloud', link: '#', icon: faSoundcloud },
				{ name: 'Spotify', link: '#', icon: faSpotify },
				{ name: 'Apple Music', link: '#', icon: faItunesNote }
			]
		}
	];
</script>

<footer class="wrapper">
	<div class="grid-container">
		{#each footerItems as root, index (index)}
			<div class="item-wrapper">
				<h2>{root.heading}</h2>
				<div class="link-container">
					{#each root.links as items, index (index)}
						<a
							href={items.link}
							data-external={root.external}
							target={root.external ? '_blank' : undefined}
							rel={root.external ? 'noopener noreferrer' : undefined}
						>
							{#if items.icon}
								<Fa icon={items.icon} fw />
							{/if}
							{items.name}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<span id="copyright">
		{`Copyright © ${year} Kerby Keith Aquino d/b/a Fusky & Co., LLC. All rights reserved.`}
	</span>
</footer>
<div class="loop-container" aria-hidden="true">
	<div class="wordmark-strip">
		{#each Array(12) as _, index (index)}
			<span class="wordmark-outline">Kuroji Fusky</span>
		{/each}
	</div>
</div>

<style lang="scss" scoped>
	$font-dynamic-small: 1.85rem;
	$nav-link-size: 0.875rem;
	$font-dynamic-base: 2.15vw;

	*:not(a) {
		@apply cursor-default;
	}

	.wrapper {
		@apply px-10 py-[2rem] flex flex-col gap-y-8;
	}

	h2 {
		font-size: max($font-dynamic-small, $font-dynamic-base);
		line-height: calc(max($font-dynamic-small, $font-dynamic-base) + 0.44rem);
	}

	.grid-container {
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3;
	}

	.item-wrapper {
		h2 {
			@apply font-bold mb-2.5 bg-clip-text bg-gradient-to-tr text-transparent from-sona-borahae-600 to-sona-skycyan-500 w-fit;
		}

		a {
			@apply w-fit flex items-center gap-x-1.5;
		}
	}

	.item-wrapper a,
	#copyright {
		$font-dynamic-base: 1.5vw;
		font-size: max(
			calc($font-dynamic-small - $nav-link-size),
			calc($font-dynamic-base - $nav-link-size + 0.25rem)
		);
	}

	.link-container {
		@apply grid grid-cols-2 gap-1;
	}

	#copyright {
		@apply lg:text-left text-center;
	}

	.loop-container {
		--strip-color: theme('colors.sona-yellow.500');
		background-color: var(--strip-color);
		@apply select-none overflow-hidden;
	}

	.wordmark-strip {
		@apply grid grid-flow-col gap-3.5 items-center overflow-x-visible;

		--dynamic-size: 4rem;
		font-size: var(--dynamic-size);

		--transform-anim-loop: calc(var(--dynamic-size) * -7.575);
		animation: strip-scroll 4.5s linear infinite;
	}

	@keyframes strip-scroll {
		to {
			transform: translateX(var(--transform-anim-loop));
		}
	}

	.wordmark-outline {
		@apply block w-max font-inter font-extrabold italic uppercase;

		color: var(--strip-color);
		line-height: calc(var(--dynamic-size) - 0.5rem);

		--offset: 1.5px;
		--offset-opposite: calc(var(--offset) * -1);

		text-shadow: 0 var(--offset) 0 theme('colors.neutral.900'),
			0 var(--offset-opposite) 0 theme('colors.neutral.900'),
			var(--offset-opposite) 0 0 theme('colors.neutral.900'),
			var(--offset) 0 0 theme('colors.neutral.900');
	}
</style>
