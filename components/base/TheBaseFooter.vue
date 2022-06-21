<script setup lang="ts">
const socials = [
  {
    icon: "youtube",
    url: "https://youtube.com/skepfusky97",
  },
  {
    icon: "twitter",
    url: "https://twitter.com/skepfuskyjs",
  },
  {
    icon: "instagram",
    url: "https://instagram.com/skepfuskyjs",
  },
  {
    icon: "github",
    url: "https://github.com/skepfusky",
  },
  {
    icon: "soundcloud",
    url: "https://soundcloud.com/kokoro-husky-mixtapes",
  },
  {
    icon: "spotify",
    url: "https://open.spotify.com/artist/3fouosCOFa1ykd6j9DZkWl",
  },
  {
    icon: "itunes-note",
    url: "https://itunes.apple.com/us/artist/kokoro-husky/1521326000",
  },
];
</script>

<template>
  <footer>
    <div id="wrapper">
      <div class="heading">
        <span>&copy; 2014-{{ new Date().getFullYear() }} Fusky & Co., LLC</span>
        <span
          >If you're curious, my website's source code is available 
          <NuxtLink
            to="https://github.com/skepfusky/skepfusky.xyz"
            class="text-sona-borahaealt-300 underline"
            >right here!</NuxtLink
          ></span
        >
      </div>
      <div class="social">
        <NuxtLink
          v-for="social in socials"
          :key="social.icon"
          :to="social.url"
          target="_blank"
          rel="noopener"
        >
          <fa-icon :icon="['fab', social.icon]" size="lg" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply bg-gradient-to-t from-sona-borahae-700;
}

#wrapper {
  @apply p-10 text-sm;
}

.heading {
  @apply flex flex-col items-center text-center gap-y-1;
}

.social {
  @apply flex justify-center gap-x-6 mt-2;
}
</style>
