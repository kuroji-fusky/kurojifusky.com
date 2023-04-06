<script setup lang="ts">
import { MOBILE_SCREEN } from "../Constants"
import { gsap } from "gsap"

const sectionRef = ref(),
	changeArtworkHoverRef = ref(),
	avatarRef = ref(),
	ctx = ref(),
	artAuthor = "@MintyChipMocha",
	calcRectBounds = ref({
		x: 0,
		y: 0,
	})

onMounted(() => {
	// GSAP stuff
	const mm = gsap.matchMedia()

	ctx.value = gsap.context((self) => {
		const avatar = self.selector!(".avatar-stagnate"),
			wrapper = self.selector!("section")

		mm.add(MOBILE_SCREEN, () => {
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

	const rectEventListeners = ["resize", "scroll"]

	rectEventListeners.map((ev) => {
		window.addEventListener(ev, getDemRektsBaby)
	})

	const avatarElement: HTMLImageElement = avatarRef.value.$el,
		hoverTooltip: HTMLDivElement = changeArtworkHoverRef.value

	const hoverRect = hoverTooltip.getBoundingClientRect(),
		hoverRectWidth = hoverRect.width,
		hoverRectHeight = hoverRect.height

	const coordEasings = { duration: 0.5, ease: "power3" },
		scaleEasings = { duration: 0.25, ease: "power1" }

	let xSet = gsap.quickTo(hoverTooltip, "x", coordEasings),
		ySet = gsap.quickTo(hoverTooltip, "y", coordEasings),
		scaleXSet = gsap.quickTo(hoverTooltip, "scaleX", scaleEasings),
		scaleYSet = gsap.quickTo(hoverTooltip, "scaleY", scaleEasings)

	figureElement.onmousemove = (e) => {
		const isAvatarHovered = e.target === avatarElement

		const pp = {
			x: e.x - calcRectBounds.value.x - hoverRectWidth / 2,
			y: e.y - calcRectBounds.value.y - hoverRectHeight / 2,
			scale: isAvatarHovered ? 1 : 0,
		}

		xSet(pp.x)
		ySet(pp.y)
		scaleXSet(pp.scale)
		scaleYSet(pp.scale)
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
			class="absolute top-0 left-0 z-10 px-5 py-3 uppercase border-4 rounded-md pointer-events-none select-none bg-kuro-dark border-kuro-lavender-800 w-max"
			aria-hidden="true"
			ref="changeArtworkHoverRef"
		>
			Randomize artwork
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
					class="aspect-square rounded-md md:w-[calc(var(--vw)*27)] lg:w-[calc(var(--vw)*25)]"
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
		<BuiArticle
			prose-p
			class="grid text-center place-items-center prose-h2:uppercase prose-h2:font-unbounded prose-p:mb-4 md:prose-p:mb-[calc(var(--vw)*1.25)] md:prose-p:w-11/12 lg:prose-p:w-9/12"
		>
			<BuiHeading
				:level="2"
				bui-mb-xl="3.15"
				bui-mb-lg="3.5"
				bui-mb-mobile="1.75rem"
				aria-label="Just a nerd floof dreaming of big things"
				class="mix-blend-difference"
			>
				<div class="hidden scale-125 md:block" aria-hidden="true">
					Just a nerd floof
				</div>
				<div class="hidden scale-125 md:block" aria-hidden="true">
					dreaming of <span class="big-things-hl">big things</span>
				</div>
				<span class="block md:hidden">
					Just a nerd floof dreaming of
					<span class="big-things-hl">big things</span>
				</span>
			</BuiHeading>
			<p>
				I'm Kerby Keith Aquino, but I usually go by my alias <b>Kuroji</b> or
				just <b>Kuro</b>. I'm a 21-year-old independent and self-taught
				individual from the Philippines—I usually work and handle everything on
				my own just for the fun of it; but sometimes, I work on external
				projects for other people!
			</p>
			<p>
				Despite currently not having a job, or work experience, or by no means
				expert on the stuff I do whatsoever, I have an aptitude and passion for
				wide range of skills entirely self-taught ranging from writing
				<em>bad</em> code and making overedited videos on YouTube as a hobby!
			</p>
		</BuiArticle>
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
