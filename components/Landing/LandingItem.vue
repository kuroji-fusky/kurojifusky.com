

<template>
	<div
		itemscope
		itemtype="http://schema.org/CreativeWork"
		class="project-item"
		role="listitem"
	>
		<meta itemtype="creator" content="Kuroji Fusky" />
		<span class="sr-only">Project title</span>
		<article class="prose-h2:text-3xl prose-p:text-lg space-y-1">
			<h2 itemprop="name">Project title</h2>
			<p itemprop="description">Project description</p>
			<div class="flex gap-3">
				<NuxtLink itemprop="url" to="#">Link source</NuxtLink>
				<NuxtLink itemprop="url" to="#">Link project</NuxtLink>
			</div>
		</article>
	</div>
</template>

<style lang="scss">
.project-item {
	@apply p-5 border rounded-md;

  &:first-child {
    grid-column: 1 / span 2;
  }
}
</style>
