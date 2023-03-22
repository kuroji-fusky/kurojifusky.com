<script setup lang="ts">
const p = defineProps<{
	tag?: keyof HTMLElementTagNameMap

	// Responsive Proses
	/////////////////////////
	buiProseSubP?: boolean
	buiProseP?: boolean
	buiProseH1?: boolean
	buiProseH2?: boolean
	buiProseH3?: boolean

	// Responsive Text
	/////////////////////////
	buiSubP?: boolean
	buiP?: boolean
	buiH1?: boolean
	buiH2?: boolean
	buiH3?: boolean

	buiMbMobile?: string
	buiMbLg?: string
	buiMbXl?: string
}>()

const buiResponsiveProses = [
	p.buiProseSubP ? "bui-prose-r-sub-p" : "",
	p.buiProseP ? "bui-prose-r-p" : "",
	p.buiProseH1 ? "bui-prose-r-h1" : "",
	p.buiProseH2 ? "bui-prose-r-h2" : "",
	p.buiProseH3 ? "bui-prose-r-h3" : "",
]

const buiTextResponsive = [
	p.buiSubP ? "bui-r-sub-p" : "",
	p.buiP ? "bui-r-p" : "",
	p.buiH1 ? "bui-r-h1" : "",
	p.buiH2 ? "bui-r-h2" : "",
	p.buiH3 ? "bui-r-h3" : "",
]

const buiMargins = [p.buiMbMobile || p.buiMbLg || p.buiMbXl ? "bui-r-mb" : ""]
</script>

<template>
	<component
		:is="tag ?? 'div'"
		:class="[...buiResponsiveProses, ...buiTextResponsive, ...buiMargins]"
		:style="[
			buiMbMobile ? `--bui-mb-mobile: ${buiMbMobile}` : '',
			buiMbLg ? `--bui-mb-lg: ${buiMbLg}` : '',
			buiMbXl ? `--bui-mb-xl: ${buiMbXl}` : '',
		]"
	>
		<slot />
	</component>
</template>

<style lang="scss">
@mixin bui-responsive($identifier, $rule) {
	.bui-r-#{$identifier} {
		#{$rule}: var(--bui-#{$identifier}-mobile, 0);

		@media (min-width: 768px) {
			#{$rule}: calc(var(--vw) * var(--bui-#{$identifier}-lg, 0));
		}

		@media (min-width: 1024px) {
			#{$rule}: calc(var(--vw) * var(--bui-#{$identifier}-xl, 0));
		}
	}
}

@include bui-responsive("mb", "margin-bottom");
@include bui-responsive("mt", "margin-top");

@mixin tw-rs-packed($prose: false) {
	&-sub-p {
		@if $prose {
			@apply prose-p:text-[calc(var(--m-sub-p))] 
      md:prose-p:text-[calc(var(--vw)*var(--d-lg-sub-p))]
      lg:prose-p:text-[calc(var(--vw)*var(--d-xl-sub-p))];
		} @else {
			@apply text-[calc(var(--m-sub-p))] 
      md:text-[calc(var(--vw)*var(--d-lg-sub-p))]
      lg:text-[calc(var(--vw)*var(--d-xl-sub-p))];
		}
	}

	&-p {
		@if $prose {
			@apply prose-p:text-[calc(var(--m-p))] 
      md:prose-p:text-[calc(var(--vw)*var(--d-lg-p))]
      lg:prose-p:text-[calc(var(--vw)*var(--d-xl-p))];
		} @else {
			@apply text-[calc(var(--m-p))] 
      md:text-[calc(var(--vw)*var(--d-lg-p))]
      lg:text-[calc(var(--vw)*var(--d-xl-p))];
		}
	}

	&-h2 {
		@if $prose {
			@apply prose-h2:text-[calc(var(--m-h2))]
      md:prose-h2:text-[calc(var(--vw)*var(--d-lg-h2))]
      lg:prose-h2:text-[calc(var(--vw)*var(--d-xl-h2))];
		} @else {
			@apply text-[calc(var(--m-h2))]
      md:text-[calc(var(--vw)*var(--d-lg-h2))]
      lg:text-[calc(var(--vw)*var(--d-xl-h2))];
		}
	}

	&-h3 {
		@if $prose {
			@apply prose-h3:text-[calc(var(--m-h3))]
      md:prose-h3:text-[calc(var(--vw)*var(--d-lg-h3))]
      lg:prose-h3:text-[calc(var(--vw)*var(--d-xl-h3))];
		} @else {
			@apply text-[calc(var(--m-h3))]
      md:text-[calc(var(--vw)*var(--d-lg-h3))]
      lg:text-[calc(var(--vw)*var(--d-xl-h3))];
		}
	}
}

.bui-prose-r {
	@include tw-rs-packed($prose: true);
}

.bui-r {
	@include tw-rs-packed($prose: false);
}
</style>
