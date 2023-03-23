<script setup lang="ts">
import { gsap } from "gsap"

const sectionRef = ref()
const ctx = ref()

onMounted(() => {
	ctx.value = gsap.context((self) => {
		const avatar = self.selector!(".avatar-stagnate")
		const wrapper = self.selector!("section")

		gsap.to(avatar, {
			scrollTrigger: {
				trigger: wrapper,
				start: "13.5% 90%",
				end: "+=1650",
				scrub: 0.45,
			},
			ease: "linear",
			y: 250,
		})
	}, sectionRef.value)
})

onUnmounted(() => ctx.value.revert())
</script>

<template>
	<section
		ref="sectionRef"
		class="grid px-8 sm:px-12 gap-y-10 md:gap-y-[calc(var(--vw)*8.5)] mb-32"
		bui-gap-y-mobile="2.5rem"
		bui-gap-y-lg="4.5"
	>
		<figure
			ref="wow"
			class="avatar-stagnate flex flex-col items-center gap-4 md:gap-[calc(var(--vw)*0.5)]"
			bui-gap-mobile="1rem"
			bui-gap-lg="1.25"
		>
			<BiroResponsive bui-w-md="27" bui-w-lg="18.5" class="relative">
				<NuxtImg
					provider="cloudinary"
					role="presentation"
					format="webp"
					src="/fursonas/comms/MCM_headshot-comm.png"
					sizes="md:200 lg:350 xl:420"
					class="aspect-square rounded-md md:w-[calc(var(--vw)*27)] lg:w-[calc(var(--vw)*18.5)]"
					quality="95"
					draggable="false"
					preload
				/>
			</BiroResponsive>

			<BiroResponsive tag="figcaption" bui-sub-p>
				<span class="opacity-50">{{ "Credits: " }}</span>
				<BiroLink href="https://www.youtube.com/@MintyChipMocha" external>{{
					"@MintyChipMocha"
				}}</BiroLink>
			</BiroResponsive>
		</figure>
		<BiroResponsive
			tag="article"
			bui-prose-p
			bui-prose-h2
			class="grid text-center place-items-center prose-h2:uppercase prose-h2:font-unbounded prose-p:mb-4 md:prose-p:mb-[calc(var(--vw)*1.25)] md:prose-p:w-11/12 lg:prose-p:w-9/12"
		>
			<BiroResponsive
				tag="h2"
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
			</BiroResponsive>
			<p>
				I'm Kerby Keith Aquino, a 21-year-old independent and self-taught
				individual from the Philippines—I usually work and handle everything on
				my own accord just for the fun of it. Sometimes, I work on other
				projects for other people!
			</p>
			<p>
				Despite currently not having a job, or work experience, or by no means
				expert on the stuff I do whatsoever, I have an aptitude and passion for
				wide range of skills entirely self-taught ranging from writing
				<em>bad</em> code and making overedited videos on YouTube as a hobby!
			</p>
		</BiroResponsive>
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
	animation: smooth-like-butter $dur infinite linear;

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: $cool-gradient;
		background-size: 700% 700%;
		animation: smooth-like-butter $dur infinite linear;
		opacity: 0.2;
		filter: blur(25px);
		z-index: -1;
	}
}

@keyframes smooth-like-butter {
	from {
		background-position: top left;
	}

	to {
		background-position: bottom right;
	}
}
</style>
