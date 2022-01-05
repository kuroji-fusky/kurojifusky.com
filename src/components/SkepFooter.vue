<template>
  <footer>
    <div id="wrapper">
      <div id="social-wrapper">
        <div class="ft-container">
          <strong style="font-size: 115%; opacity: 0.65; cursor: default">PLACES TO STALK ME</strong>
          <div class="ft-container_row">
            <a href="#" title="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="#" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="#" title="Discord Server" target="_blank"><i class="fab fa-discord"></i></a>
            <a href="#" title="GitHub" target="_blank"><i class="fab fa-github"></i></a>
            <a href="#" title="Twitch" target="_blank"><i class="fab fa-twitch"></i></a>
          </div>
        </div>
        <div class="ft-container">
          <strong style="font-size: 115%; opacity: 0.65; cursor: default">HOT GARBAGE MIXTAPES</strong>
          <div class="ft-container_row">
            <a href="#" title="Spotify" target="_blank"><i class="fab fa-spotify"></i></a>
            <a href="#" title="Apple Music" target="_blank"><i class="fab fa-itunes-note"></i></a>
            <a href="#" title="SoundCloud" target="_blank"><i class="fab fa-soundcloud"></i></a>
            <a href="#" title="Bandcamp" target="_blank"><i class="fab fa-bandcamp"></i></a>
            <a href="#" title="Deezer" target="_blank"><i class="fab fa-deezer"></i></a>
          </div>
        </div>
      </div>
      <div id="ft-text">
        <p>Been making non-stop hot garbage since 2014!</p>
        <p>
          <strong id="vue-label">Site proudly made in Vue.js</strong>&copy; {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
:root {
  --footer-gradient-top: var(--sf-blue-dark-300);
  --footer-gradient-btm: var(--sf-borahae-dark-600);
}

footer {
  @include flexy(center, unset, row);
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-size: 90%;
  background: linear-gradient(
    75deg,
    var(--footer-gradient-top),
    var(--footer-gradient-btm)
  );
}

#wrapper {
  @include flexy(space-between, center, row);
  max-width: $desktop-w;
  width: 100%;
  padding: 1.65rem 2rem;

  @media only screen and (max-width: 900px) {
    @include flexy(center, center, column);
    padding: calc(0.65rem + 0.8rem) 1rem;
  }

  @include md-tablet-devices {
    row-gap: 1rem;
  }
}

#social-wrapper {
  @include flexy-dir(column);
  row-gap: 0.8rem;

  @media only screen and (max-width: 900px) {
    @include flexy-dir();
    width: 100%;
  }

  @include md-tablet-devices {
    @include flexy-dir(column);
    row-gap: 1rem;
  }
}

:root {
  --brand-logo: whitesmoke;
  --brand-logo-hover:  var(--sf-borahae-light-200);
}

.ft-container {
  @include flexy-dir(column);

  @media only screen and (max-width: 900px) {
    @include flexy(center, center, column);
    width: 100%;
  }

  a {
    color: var(--brand-logo);
    padding: 0.45rem 0;
    background: none;
    font-size: 1.35rem;

    @include md-tablet-devices {
      padding: 1rem 0;
      font-size: 1.45rem;
    }

    &:hover {
      color: var(--brand-logo-hover);
    }
  }

  &_row {
    @include flexy-dir();
    column-gap: 1.5rem;

    @media only screen and (max-width: 900px) {
      column-gap: 2rem;
    }
  }
}

#ft-text {
  @include flexy(flex-end, flex-end, column);
  cursor: default;
  text-align: center;
  column-gap: 0.5em;
  font-size: 110%;
  height: 100%;
  opacity: 0.75;
  font-size: 96.7%;
  filter: opacity(85%);

  @media only screen and (max-width: 900px) {
    @include flexy(center, center, column);
    row-gap: 1rem;
    margin-top: 1rem;
  }

  @include md-tablet-devices {
    margin-top: 0;
  }
}

#vue-logo {
  --logo-size: 17px;

  @include md-phone-devices {
    --logo-size: 15px;
  }

  position: relative;
  top: 3px;
  margin: 0 3px;
  width: var(--logo-size);
  height: var(--logo-size);
}

#vue-label::after {
  content: '|';
  margin: 0 6px;
}
</style>