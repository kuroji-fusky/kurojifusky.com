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

<style lang="scss">
#latest-music {
  margin-top: 1.25rem;
  padding: 1.35rem;
  border-radius: 8px;
  @include flexy();
}

$cover-large-desktops: 24rem;
$cover-global: 20rem;
$cover-phones: 16rem;

:root {
  --lm-h1: white;
  --lm-platforms: black;
}

.lm {
  &-wrapper {
    @include flexy-dir();
    column-gap: 2rem;
    row-gap: 0;
    margin: 0 auto;

    @include md-laptop-devices {
      @include flexy(center, center, column);
      row-gap: 1rem;
    }

    h1::after {
      content: 'LATEST RELEASE';
      padding: 0.13rem 0.35rem;
      font-size: 40%;
      border: 2px solid var(--lm-h1);
      color: var(--lm-h1);
      border-radius: 3px;
      opacity: .75;
      position: relative;
      top: -8px;
      left: 8px;

      @include md-tablet-devices {
        display: none;
      }
    }

    @at-root #mobile-release-label {
      display: none;

      @include md-tablet-devices {
        display: block;
        padding: 0.13rem 0.35rem;
        font-size: 75%;
        margin-top: 3px;
        margin-bottom: 7px;
        border: 2px solid white;
        border-radius: 6px;
        opacity: .75;
      }
    }

    * {
      cursor: default;
    }
  }

  &-cover {
    @include flexy();
    position: relative;

    &::after {
      @include pseudo-block();
      @include pos-a(12px, unset, 12px);
      @media only screen and (min-width: $large-desktop-w) {
        width: $cover-large-desktops;
        height: $cover-large-desktops;
      }

      width: $cover-global;
      height: $cover-global;

      @include md-phone-devices {
        width: $cover-phones;
        height: $cover-phones;
      }

      background: linear-gradient(12deg, var(--sf-borahae-dark-200), var(--sf-blue-dark-100));
      z-index: -1;
    }

    img {
      @media only screen and (min-width: $large-desktop-w) {
        width: $cover-large-desktops;
      }

      width: $cover-global;

      @include md-phone-devices {
        width: $cover-phones;
      }
    }
  }

  &-details {
    @include flexy(center, unset, column);

    @include md-laptop-devices {
      @include flexy(center, center, column);
    }

    p {
      display: flex;
      column-gap: 5px;
    }

    span {
      font-weight: 700;
    }
  }

  &-platforms {
    @include flexy-dir(column);
    margin-top: 10px;

    @include md-laptop-devices {
      @include flexy(center, center, column);
      text-align: center;
    }

    &_row {
      @include flexy(unset, unset);
      column-gap: .45rem;
      max-width: 25rem;
      flex-wrap: wrap;

      @include md-laptop-devices {
        @include flexy();
      }
      a {
        @include flexy-dir();
        column-gap: 4px;
        padding: .35rem .55rem;
        margin: 3px 0;
        border-radius: 6px;
        background: var(--lm-platforms);
      }

      a, small {
        cursor: pointer;
      }
    }
  }

  // Music platform colors
  &-apple-music:hover {
    background: linear-gradient(135deg, #fa57c1, #7572ff)
  }

  &-deezer:hover {
    background: linear-gradient(90deg, #ff0092, #ff0000, #00c7f2);
    background-size: 400%;
  }

  &-soundcloud:hover {
    background: #ff8800;
  }

  &-spotify:hover {
    background: #1db954;
  }

  &-bandcamp:hover {
    background: #629aa9;
  }

  :is(&-apple-music, &-spotify, &-deezer, &-soundcloud, &-bandcamp):hover {
    color:whitesmoke;
  }

  :is(&-apple-music, &-spotify, &-deezer, &-soundcloud, &-bandcamp) {
    transition: none;
  }

}
</style>