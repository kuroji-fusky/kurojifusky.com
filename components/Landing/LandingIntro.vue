<script setup lang="ts">
import { gsap } from "gsap"

const artAuthor = "@MintyChipMocha",
	sectionRef = ref(),
	changeArtworkHoverRef = ref(),
	avatarRef = ref(),
	ctx = ref(),
	calcRectBounds = ref({
		x: 0,
		y: 0,
	})

onMounted(() => {
	// GSAP stuff
	ctx.value = gsap.context((self) => {
		const avatar = self.selector!(".avatar-stagnate"),
			wrapper = self.selector!("section")

		useGsapMobileLimit(() => {
			gsap.to(avatar, {
				scrollTrigger: {
					trigger: wrapper,
					start: "20% 96%",
					end: "+=2000",
					scrub: 0.45,
				},
				ease: "linear",
				y: 210,
			})
		})
	}, sectionRef.value)

	gsap.set("#aw-tooltip", { x: 0, y: 0 })

	// Avatar hover stuff
	const figureElement: HTMLDivElement = sectionRef.value

	// Get bounding rect from root section
	const getDemRektsBaby = () => {
		const rect = figureElement.getBoundingClientRect()
		calcRectBounds.value.x = rect.left
		calcRectBounds.value.y = rect.top
	}

	getDemRektsBaby()

	// TODO optimize this using IntersectionObserver
	const rectEventListeners = ["resize", "scroll", "load"]
	rectEventListeners.map((ev) => window.addEventListener(ev, getDemRektsBaby))

	const avatarElement: HTMLImageElement = avatarRef.value.$el,
		hoverTooltip: HTMLDivElement = changeArtworkHoverRef.value

	const hoverRect = hoverTooltip.getBoundingClientRect(),
		hoverRectWidth = hoverRect.width,
		hoverRectHeight = hoverRect.height

	const coordEasings = { duration: 0.33, ease: "power2" },
		scaleEasings = { duration: 0.15, ease: "ease" }

	let xSet = gsap.quickTo(hoverTooltip, "x", coordEasings),
		ySet = gsap.quickTo(hoverTooltip, "y", coordEasings),
		scaleXSet = gsap.quickTo(hoverTooltip, "scaleX", scaleEasings),
		scaleYSet = gsap.quickTo(hoverTooltip, "scaleY", scaleEasings)

	// Set initial value so it will reappear when hovered
	scaleXSet(0)
	scaleYSet(0)

	figureElement.onmousemove = (e) => {
		const isAvatarHovered = e!.target === avatarElement

		const tooltip = {
			x: e!.x - calcRectBounds.value.x - hoverRectWidth / 2,
			y: e!.y - calcRectBounds.value.y - hoverRectHeight / 2,
			scale: !isAvatarHovered ? 0 : 1,
		}

		xSet(tooltip.x)
		ySet(tooltip.y)
		scaleXSet(tooltip.scale)
		scaleYSet(tooltip.scale)
	}
})

onUnmounted(() => ctx.value.revert())

const gapAll = {
	xl: 1.25,
	lg: 1.25,
	md: "1rem",
}
</script>

<template>
	<section
		ref="sectionRef"
		class="grid relative px-8 sm:px-12 gap-y-10 md:gap-y-[calc(var(--vw)*8.5)] mb-32"
		bui-gap-y-mobile="2.5rem"
		bui-gap-y-lg="4.5"
	>
		<div
			id="aw-tooltip"
			class="absolute top-0 left-0 z-10 px-5 py-3 uppercase border-2 rounded-md pointer-events-none select-none bg-kuro-dark border-kuro-lavender-300 w-max"
			aria-hidden="true"
			ref="changeArtworkHoverRef"
		>
			Click for random artwork
		</div>
		<BuiRes
			tag="figure"
			class="avatar-stagnate flex flex-col items-center gap-4 md:gap-[calc(var(--vw)*0.5)]"
			:options="{
				'gap-x': gapAll,
				'gap-y': gapAll,
			}"
		>
			<div bui-w-md="27" bui-w-lg="18.5" class="group">
				<NuxtImg
					provider="cloudinary"
					ref="avatarRef"
					format="webp"
					src="/fursonas/comms/MCM_headshot-comm.png"
					sizes="md:300 lg:350 xl:600"
					class="aspect-square rounded-md md:w-[calc(var(--vw)*27)] lg:w-[calc(var(--vw)*25)] hover:cursor-pointer"
					quality="80"
					:alt="`Artwork drawn by ${artAuthor}`"
					draggable="false"
					preload
				/>
			</div>
			<BuiText tag="figcaption" overrides="sub-p">
				<BuiLink href="https://www.youtube.com/@MintyChipMocha" external>{{
					artAuthor
				}}</BuiLink>
			</BuiText>
		</BuiRes>
		<LandingIntroArticle />
	</section>
</template>

<style lang="scss">
.big-things-hl {
	$dur: 15s;
	$cool-gradient: linear-gradient(
		160deg,
		rgba(181, 49, 252, 1) 0%,
		rgba(255, 139, 0, 1) 14%,
		rgba(255, 0, 105, 1) 28%,
		rgba(250, 0, 255, 1) 42%,
		rgba(0, 208, 255, 1) 57%,
		rgba(255, 255, 0, 1) 71%,
		rgba(181, 49, 252, 1) 85%,
		rgba(255, 139, 0, 1) 100%
	);

	position: relative;
	background: $cool-gradient;
	color: hsla(0, 0%, 100%, 0.1);
	background-clip: text;
	background-size: 700% 700%;
	animation: gradient-scroll $dur infinite linear;

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: $cool-gradient;
		background-size: 700% 700%;
		animation: gradient-scroll $dur infinite linear;
		opacity: 0.2;
		filter: blur(25px);
		z-index: -1;
	}
}

@keyframes gradient-scroll {
	from {
		background-position: top left;
	}

	to {
		background-position: bottom right;
	}
}
</style>
