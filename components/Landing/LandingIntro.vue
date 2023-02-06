<template>
	<section class="px-12">
		<article
			class="space-y-2 prose-responsive prose-p:font-medium prose-p:font-inter"
		>
			<h2 class="font-bold uppercase opacity-50 font-jetbrains-mono">
				About Me
			</h2>
			<p>
				I'm a 20-year-old independent hobbyist with a diverse and wide range of
				skills and interests; I work on projects on my own, mostly maintaining
				open source projects on GitHub, occasionally producing overedited
				ADHD-driven videos, and much more!
			</p>
		</article>
	</section>
</template>

<style lang="scss">
.prose-responsive {
	--h2-mult: 1.45;
	--p-mult: 1.75;

	h2 {
		font-size: calc(var(--vw) * var(--h2-mult));
		line-height: calc(var(--vw) * var(--h2-mult) + 0.25);
	}

	p {
		font-size: calc(var(--vw) * var(--p-mult));
		line-height: calc(var(--vw) * var(--p-mult) + 0.25);
	}
}
</style>
