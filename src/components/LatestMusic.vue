<template>
  <div id="latest-music">
    <div class="lm-wrapper">
      <div class="lm-cover">
        <img
          :src="`./src/img/album-covers/${cover}`"
          :alt="`Album Cover for ${title}`"
          :aria-label="`Album Cover for ${title}`"
        />
      </div>
      <div class="lm-details">
        <h1>{{ title }}</h1>
        <span class="mobile-release-label">LATEST RELEASE</span>
        <p>Release date: <span>{{ date }}</span></p>
        <p>Total length: <span>{{ length }}</span></p>
        <p>Genre: <span>{{ genre }}</span></p>
        <div class="lm-platforms">
          <strong style="font-size: 88%; margin-top: -6px; opacity: 0.65;">AVAILABLE ON</strong>
          <div class="lm-platforms_row">
            <a v-if="onSpotify" href="#" class="lm-spotify"><i class="fab fa-spotify"></i><small>Spotify</small></a>
            <div v-else></div>
            <a v-if="onSoundCloud" href="#" class="lm-soundcloud"><i class="fab fa-soundcloud"></i><small>SoundCloud</small></a>
            <div v-else></div>
            <a v-if="onAppleMusic" href="#" class="lm-apple-music"><i class="fab fa-itunes-note"></i><small>Apple&nbsp;Music</small></a>
            <div v-else></div>
            <a v-if="onBandcamp" href="#" class="lm-bandcamp"><i class="fab fa-bandcamp"></i><small>Bandcamp</small></a>
            <div v-else></div>
            <a v-if="onDeezer" href="#" class="lm-deezer"><i class="fab fa-deezer"></i><small>Deezer</small></a>
            <div v-else></div>
          </div>
        </div>
        <p style="font-size: 88%; margin-top: 10px; opacity: .65; word-break: break-word; width: 24rem">
          &copy; &copysr; {{ year }} {{ label }}, all rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover: {type: String, default: 'anl final copy 3.png', required: true},
    title: { type: String, default: "Album Title", required: true },
    date: { type: Date, required: true },
    length: { type: String, default: "69:69", required: true },
    year: { type: Number, default: new Date().getFullYear(), required: true },
    genre: { type: String, default: "Pop", required: true },
    label: { type: String, default: "Fusky & Co.", required: true },

    onSpotify: {type: Boolean, default: true},
    onSoundCloud: {type: Boolean, default: true},
    onAppleMusic: {type: Boolean, default: true},
    onBandcamp: {type: Boolean, default: true},
    onDeezer: {type: Boolean, default: true},
  },
};
</script>