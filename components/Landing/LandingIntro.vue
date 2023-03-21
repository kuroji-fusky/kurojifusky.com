<template>
	<section class="grid px-8 sm:px-12 gap-y-10 md:gap-y-[calc(var(--vw)*4.5)]">
		<figure
			class="flex flex-col items-center gap-4 md:gap-[calc(var(--vw)*1.25)]"
		>
			<NuxtImg
				provider="cloudinary"
				role="presentation"
				format="webp"
				src="/fursonas/comms/MCM_headshot-comm.png"
				sizes="md:200 lg:350 xl:420"
				class="rounded-md md:w-[calc(var(--vw)*27)] lg:w-[calc(var(--vw)*18.5)]"
				quality="90"
				draggable="false"
				preload
			/>
			<figcaption
				class="text-[calc(var(--m-sub-p)] md:text-[calc(var(--vw)*var(--d-lg-sub-p))] lg:text-[calc(var(--vw)*var(--d-xl-sub-p))]"
			>
				<span class="opacity-50">Art by </span>
				<NuxtLink
					to="https://www.youtube.com/@MintyChipMocha"
					external
					target="_blank"
					class="link-underline"
					>@MintyChipMocha</NuxtLink
				>
			</figcaption>
		</figure>
		<article
			class="grid text-center place-items-center prose-h2:uppercase prose-h2:font-unbounded prose-p:mb-4 md:prose-p:mb-[calc(var(--vw)*1.25)] prose-p:text-[calc(var(--m-p))] md:prose-p:w-11/12 md:prose-p:text-[calc(var(--vw)*var(--d-lg-p))] lg:prose-p:w-9/12 lg:prose-p:text-[calc(var(--vw)*var(--d-xl-p))]"
		>
			<h2
				class="mb-[calc(var(--vw)*2)] text-[calc(var(--m-h2))] md:text-[calc(var(--vw)*var(--d-lg-h2))] lg:text-[calc(var(--vw)*var(--d-xl-h2))]"
				aria-label="Just a nerd floof dreaming of big things"
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
			</h2>
			<p>
				I'm a 21-year-old independent and self-taught individual from the
				Philippines—I usually work and handle everything on my own accord just
				for the fun of it. Sometimes, I work on other projects for other people!
			</p>
			<p>
				Despite not having a job, and I am by no means expert on the stuff I do
				daily—I do have an aptitude for a wide range of skills entirely
				self-taught ranging from writing <em>bad</em> code and making overedited
				videos on YouTube as a hobby!
			</p>
		</article>
	</section>
</template>

<style lang="scss">
.big-things-hl {
	$dur: 12.5s;
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

	color: hsla(0, 0%, 100%, 0.5);
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
