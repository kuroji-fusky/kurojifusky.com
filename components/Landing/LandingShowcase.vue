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
			<li class="h-[120vh] bg-blue-700">
				<BiroResponsive
					tag="article"
					class="sticky p-12 top-20 prose-h3:font-inter prose-h3:font-semibold"
					bui-prose-h3
				>
					<h3>AFKJHSDFGKJHDSFGKJH</h3>
					<p>Bigger than your mom</p>
				</BiroResponsive>
			</li>
			<li class="h-[120vh] bg-green-700">
				<BiroResponsive
					tag="article"
					class="sticky p-12 top-20 prose-h3:font-inter prose-h3:font-semibold"
					bui-prose-h3
				>
					<h3>MySona</h3>
					<p>Bigger than your mom</p></BiroResponsive
				>
			</li>
		</ul>
	</BiroResponsive>
</template>
