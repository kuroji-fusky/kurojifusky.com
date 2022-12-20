<script lang="ts">
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let navItems = [
		{ name: 'Creative Works', route: '/works' },
		{ name: 'Portfolio', route: '/portfolio' },
		{ name: 'About', route: '/about' }
	];
</script>

<header>
	<div class="logo"><a href="/">Kuroji Fusky</a></div>
	<button title="Expand/collapse menu" aria-label="Expand/collapse menu" class="mobile-menu">
		<Fa icon={faBars} />
	</button>
	<nav class="links-row">
		{#each navItems as { name, route }}
			<a href={route}>{name}</a>
		{/each}
	</nav>
</header>

<style lang="scss" scoped>
	$font-dynamic-small: 1.85rem;
	$nav-link-size: 0.85rem;
	$font-dynamic-base: 2.35vw;

	header {
		@apply px-10 py-4 flex justify-between items-center;
	}

	.logo {
		@apply font-inter font-extrabold uppercase italic select-none;
		font-size: max($font-dynamic-small, $font-dynamic-base);
	}

	.mobile-menu {
		@apply block md:hidden border p-4 rounded;
	}

	.links-row {
		$font-dynamic-base: 1.5vw;
		font-size: max(
			calc($font-dynamic-small - $nav-link-size),
			calc($font-dynamic-base - $nav-link-size + 0.25rem)
		);
		gap: 2.5vw;

		@apply flex gap-x-3 md:relative absolute border rounded
		mt-[3.5rem] md:mt-0 
		p-4 md:p-0 
		top-2.5 md:top-0
		right-10 md:right-0
		flex-col md:flex-row;

		a {
			@apply px-4 py-2 border rounded-md;
		}
	}
</style>
