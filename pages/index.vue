<template>
  <MetaTags
    title="skepfusky"
    description="I'm a 20-year-old self-taught hobbyist as a video editor, web developer, designer, and music producer from the Philippines!"
  />
  <main class="grid place-items-center w-screen h-screen">
    <section id="wrapper">
      <img :src="i" alt="skepfusky" class="fursona" />
      <div class="lower-third">
        <h2 class="flex items-center">
          <span class="text-4xl lg:text-5xl">&lt;</span>
          <span class="main-wordmark">skepfusky</span>
          <span class="text-4xl lg:text-5xl">&sol;&gt;</span>
        </h2>
        <p>lmao son</p>
        <div class="flex gap-3 justify-center">
          <NuxtLink class="link-button" to="https://ko-fi.com/skepfusky"
            >Ko-Fi</NuxtLink
          >
          <NuxtLink class="link-button" to="/projects">Projects</NuxtLink>
          <NuxtLink class="link-button" to="/fursona">Fursona</NuxtLink>
          <NuxtLink class="link-button" to="/about">About me</NuxtLink>
        </div>
      </div>
    </section>
    <client-only>
      <div
        aria-hidden="true"
        class="gradient-point scale-[2] mix-blend-overlay -top-10 -left-5 w-[50%] h-[12%] -rotate-12 bg-sona-royalblue-100"
      ></div>
      <div
        aria-hidden="true"
        class="gradient-point scale-[2] mix-blend-overlay -top-10 -right-5 w-[50%] h-[12%] rotate-12 bg-sona-borahae-100"
      ></div>
      <div
        aria-hidden="true"
        class="gradient-point -bottom-[2rem] right-[15%] h-[7%] w-[50%] bg-sona-borahaealt-600"
      ></div>
    </client-only>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home"
})

let i =
  "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_1000/v1662975456/comm_for_davey_g2_i3nmhp.png"
</script>

<style scoped>
#wrapper {
  @apply z-50 grid gap-2 place-items-center lg:pl-10 lg:pr-16 px-1 mx-auto;
}

.gradient-point {
  @apply blur-[100px] fixed rounded-full;
}

.fursona {
  @apply 2xl:w-[620px] 2xl:h-[650px] xl:w-[520px] xl:h-[560px] md:w-[450px] md:h-[475px] sm:w-[400px] sm:h-[450px] w-[375px] h-[400px] select-none pointer-events-none;
}

.main-wordmark {
  @apply md:h-[auto] h-[4.5rem] translate-y-3 md:translate-y-1 font-inter text-5xl lg:text-6xl font-bold text-center lg:text-left bg-gradient-to-r bg-clip-text text-transparent from-sona-borahae-500 to-sona-skycyan-600;
}

.lower-third {
  @apply relative -top-12 flex flex-col justify-center text-center gap-y-5;
}

.link-button {
  @apply px-4 py-2 rounded-md bg-slate-500;
}
</style>
