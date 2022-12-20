<script>
	import { PUBLIC_UMAMI_ID } from '$env/static/public';
	import '../app.scss';
	import '@fontsource/inter';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/open-sans';
	import '@fontsource/jetbrains-mono';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<script
		async
		defer
		src="https://umami.kurofusky.xyz/umami.js"
		data-website-id={PUBLIC_UMAMI_ID}
		data-domains="kurofusky.xyz"
	></script>
</svelte:head>

<Navbar />
<slot />
