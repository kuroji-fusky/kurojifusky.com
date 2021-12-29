<template>
  <div id="latest-music">
    <div id="lm-wrapper">
      <img
        :src="`./src/img/album-covers/${cover}`"
        :alt="`Album Cover for ${title}`"
        :aria-label="`Album Cover for ${title}`"
      />
      <div id="lm-details">
        <div id="lm-id-wrapper">
          <span id="lm-id">LATEST&nbsp;RELEASE</span>
        </div>
        <h1>{{ title }}</h1>
        <p>Release date: <span>{{ date }}</span></p>
        <p>Total length: <span>{{ length }}</span></p>
        <p>Genre: <span>{{ genre }}</span></p>
        <div id="lm-platforms">
          <a href="#" v-if="onSpotify"><i class="fab fa-spotify"></i><small>Spotify</small></a>
          <div v-else></div>
          <a href="#" v-if="onSoundCloud"><i class="fab fa-soundcloud"></i><small>SoundCloud</small></a>
          <div v-else></div>
          <a href="#" v-if="onAppleMusic"><i class="fab fa-itunes-note"></i><small>Apple&nbsp;Music</small></a>
          <div v-else></div>
        </div>
        <p style="font-size: 88%; margin-top: 10px; opacity: .65">&copy; &copysr; {{ year }} {{ label }}</p>
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
    length: { type: String, default: "Length", required: true },
    year: { type: Number, default: new Date().getFullYear(), required: true },
    genre: { type: String, default: "Pop", required: true },
    label: { type: String, default: "Fusky & Co.", required: true },

    onSpotify: {type: Boolean, default: true},
    onSoundCloud: {type: Boolean, default: true},
    onAppleMusic: {type: Boolean, default: true},
  },
};
</script>

<style lang="scss">
#latest-music {
  margin-top: 1.25rem;
  padding: 1.35rem;
  border-radius: 8px;
  border: 2px solid orange;
  @include flexy();
}

#lm {
  &-wrapper {
    @include flexy-dir();
    column-gap: 2rem;
    row-gap: 0;
    margin: 0 auto;

    @include md-laptop-devices {
      @include flexy(center, center, column);
      row-gap: 2rem;
    }

    img {
      width: 15rem;
      box-shadow: 5px 5px 0 orange;
    }

    * {
      cursor: default;
    }
  }

  &-id-wrapper {
    display: flex;
  }

  &-id {
    padding: 0.15rem 0.45rem;
    font-size: 85%;
    border: 2px solid white;
    border-radius: 6px;
  }

  &-details {
    @include flexy(center, unset, column);

    @include md-laptop-devices {
      @include flexy(center, center, column);
    }

    p {
      display: flex;
      column-gap: 4px;
    }
    span {
      font-weight: 700;
    }
  }

  &-platforms {
    @include flexy-dir();
    column-gap: .45rem;
    margin-top: 10px;

    a {
      @include flexy-dir();
      column-gap: 4px;
      padding: .35rem .55rem;
      border-radius: 6px;
      background: black;
    }

    a, small {
      cursor: pointer;
    }
  }
}
</style>