<script setup lang="ts"></script>

<template>
	<BiroResponsive
		tag="section"
		class="grid content-center"
		bui-gap-mobile="1rem"
		bui-gap-lg="1.25"
	>
		<BiroResponsive
			tag="h2"
			bui-h2
			class="px-12 text-center uppercase font-unbounded"
			>Showcase</BiroResponsive
		>
		<ul>
      <LandingShowcaseItem />
      <LandingShowcaseItem />
		</ul>
	</BiroResponsive>
</template>
