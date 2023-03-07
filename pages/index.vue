<script setup lang="ts">
import Lenis from "@studio-freight/lenis"

usePageMeta({
	title: "Kuroji Fusky: Building abominations since 2013",
	description:
		"A terrible website with mind-blowing visuals, created by a furry btw lol",
})

onMounted(() => {
	const lenis = new Lenis({
		duration: 1.125,
		direction: "vertical",
		gestureDirection: "vertical",
		smooth: true,
		mouseMultiplier: 1,
		smoothTouch: false,
		touchMultiplier: 2,
		infinite: false,
	})

	const raf = (time: any) => {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
})
</script>

<template>
	<div class="min-h-screen">
		<LandingHero />
		<LandingProficency />
		<LandingProjects />
		<pre><code class="language-python">def main():
  print("Don't mind me, just testing this thing out lol")

if __name__ == "__main__":
  main()</code></pre>
	</div>
</template>

<style>
pre[class*="language-"] {
	@apply m-0;
}

code[class*="language-"] {
	@apply font-jetbrains-mono;
}
</style>
