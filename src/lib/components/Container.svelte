<script lang="ts">
	import { page } from '$app/stores';
	import Footer from './Footer.svelte';

	export let title = 'Kuroji Fusky';
	export let description = 'Yes';
	export let hideFooterLanding = false;
	let URL: string = $page.url.origin + $page.url.pathname;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={URL} />
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={URL} />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={URL} />
</svelte:head>

<main>
	<slot />
</main>
{#if !hideFooterLanding}
	<Footer />
{/if}
