<script setup lang="ts"></script>

<template>
	<section class="border-kuro-lavender-300 bg-kuro-dark border-t-2 relative">
		<BuiHeading
			tag="h2"
			bui-h2
			:options="{ py: { xl: 3, lg: 3.5, md: '1.5rem' } }"
			class="px-12 text-center uppercase font-unbounded"
			>Skills</BuiHeading
		>
		<div class="grid grid-cols-8 px-12 gap-3">
			<div id="left-content" class="col-span-5">
				<ul class="grid grid-cols-2 w-full gap-2.5">
					<li v-for="_ in Array(6)" class="p-2 border rounded-md">bangtan</li>
				</ul>
			</div>
			<div
				id="right-content"
				class="rounded-md bg-kuro-royalblue-500 h-full w-full col-span-3"
			>
				
			</div>
		</div>
	</section>
</template>
