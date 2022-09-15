<template>
  <main class="flex items-center w-screen h-screen">
    <section
      class="z-50 flex gap-2 justify-center items-center lg:flex-row flex-col lg:pl-10 lg:pr-16 px-1 mx-auto"
    >
      <img
        :src="i"
        alt="skepfusky"
        class="xl:w-[600px] xl:h-[650px] lg:w-[450px] lg:h-[500px] md:w-[400px] md:h-[450px] w-[275px] h-[300px] select-none"
      />
      <Bio />
    </section>
    <div
      aria-hidden="true"
      class="blur-[1050px] fixed rounded-full scale-[2] mix-blend-overlay -top-10 -left-5 w-[50%] h-[12%] -rotate-12 bg-sona-royalblue-100"
    ></div>
    <div
      aria-hidden="true"
      class="blur-[1050px] fixed rounded-full scale-[2] mix-blend-overlay -top-10 -right-5 w-[50%] h-[12%] rotate-12 bg-sona-borahae-100"
    ></div>
    <div
      aria-hidden="true"
      class="blur-[1000px] fixed rounded-full -bottom-[2rem] right-[15%] h-[7%] w-[45%] bg-sona-borahaealt-600"
    ></div>
  </main>
</template>

<script setup lang="ts">
let t = "skepfusky";
let d =
  "I'm a 20-year-old self-taught hobbyist as a video editor, web developer, designer, and music producer from the Philippines!";
let u = "https://skepfusky.xyz/";
let i =
  "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_700/v1662975456/comm_for_davey_g2_i3nmhp.png";

useHead({
  title: t,
  meta: [
    { name: "description", content: d },
    // prettier-ignore
    { name: "keywords", content: ["skepfusky", "skepfuskyjs" ,"Kokoro Husky", "furry", "YTP", "fusky", "kokorohusky"].join(", ") },
    { property: "og:title", content: t },
    { property: "og:description", content: d },
    { property: "og:url", content: u },
    { property: "og:image", content: i },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: t },
    { name: "twitter:description", content: d },
    { name: "twitter:image", content: i },
    { name: "twitter:url", content: u },
    { name: "twitter:creator", content: `@${t}js` },
    { name: "twitter:site", content: `@${t}js` },
  ],
  link: [{ rel: "canonical", href: u }],
});
</script>

<style>
body {
  @apply overflow-x-hidden bg-gradient-to-tr from-sona-royalblue-900 to-sona-borahae-900 text-neutral-50;
}
</style>