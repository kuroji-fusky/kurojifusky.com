<template>
	<div
		class="flex items-center gap-x-3 lg:gap-x-5"
		aria-label="Kuroji Fusky Blog"
	>
		<a
			href="https://kurojifusky.com"
			class="text-4xl font-bold lg:text-5xl font-unbounded"
			>{{ "K" }}</a
		>
		<span
			class="text-2xl opacity-50 select-none lg:text-3xl"
			aria-hidden="true"
			>{{ "/" }}</span
		>
		<a href="/" class="flex items-center gap-x-3.5">
			<img
				src="/icon_144x144.png"
				class="w-8 rounded-full aspect-square"
				alt="Me"
				fetchpriority="high"
				loading="lazy"
			/>
			<span class="text-3xl font-bold font-inter">Blog</span>
		</a>
	</div>
</template>
