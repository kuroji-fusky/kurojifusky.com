<template>
  <a
    class="card-container"
    :class="[isNew ? 'new' : '']"
    :href="`https://${link}`"
  >
      <div
      class="card-container-sub"
      :class="[
        idSeries ? 'cardprop-id-series' : '',
        idMusic ? 'cardprop-id-music' : '',
        idProject ? 'cardprop-id-project' : '',
        idFilm ? 'cardprop-id-film' : '',
        idMisc ? 'cardprop-id-misc' : '',
      ]"
    >
      <div v-if="idSeries">
        <i class="fas fa-video"></i>
      </div>
      <div v-else-if="idMusic">
        <i class="fas fa-music"></i>
      </div>
      <div v-else-if="idProject">
        <i class="fas fa-project-diagram"></i>
      </div>
      <div v-else-if="idFilm">
        <i class="fas fa-film"></i>
      </div>
      <div v-else-if="idMisc">
        <i class="fas fa-box"></i>
      </div>
      <div v-else></div>
    </div>
    <div class="card-container-bg">
      <img 
        :src="require(`@/img/${img}`)"
        :alt="`Cover of ${title}`"
        :width="imgSize"
        >
    </div>

    <article class="card-container-info">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    idSeries: Boolean,
    idMusic: Boolean,
    idFilm: Boolean,
    idProject: Boolean,
    idMisc: Boolean,

    isNew: Boolean,

    img: {
      type: String,
      default: 'placeholder.png'
    },

    imgSize: {
      type: Number,
      default: 780,
    },
    link: {
      type: String,
      default: "youtube.com",
    },
    title: {
      type: String,
      default: "Title unspecified",
    },
    desc: {
      type: String,
      default: "You didn't specify a description you stupid",
    },
  },
};
</script>

<style lang="scss">
$hover-time: 400ms;

$new-dark: (
  1: darken(red, 22%),
  2: darken(red, 31%),
);

:root {
  @each $increment, $value in $new-dark {
    --sc-new-#{$increment}: #{$value};
  }
}

.top-heading.spacing-tablet {
  @include md-tablet-devices {
    margin-bottom: 2.5rem;
  }
}

:root {
  --sc-gradient-top: var(--sf-borahae-dark-600);
  --sc-gradient-btm: var(--sf-blue-dark-400);
}

.card-container {
  @include soft-corners();
  background: linear-gradient(165deg,
      var(--sc-gradient-top),
      var(--sc-gradient-btm));
  box-shadow: 0 0 16px rgba(black, 45%);
  transform: translateY(0px);
  cursor: pointer;
  transition: transform $hover-time ease, filter $hover-time ease;
  padding-top: 0;
  overflow: hidden;

  @include md-tablet-devices {
    padding-bottom: 1rem;
    box-shadow: none;
    border-radius: 0 !important;
    border-bottom: 2px solid white;
  }

  >* {
    width: 100%;
  }

  &-bg {
    overflow: hidden;
    z-index: 2;
    height: 16rem;
    @include flexy();

    img {
      transform: scale(1);
      @include prop-transition(transform);
    }
  }

  &-sub {
    position: relative;
    padding: 0.75rem 0.75rem;
    top: -3px;
    z-index: 1;
    font-size: 88%;
    @include pos-a(12px, unset, unset, 14px);
    z-index: 5;
    width: unset;
    @include soft-corners;

    div {
      @include md-tablet-devices {
        font-size: 120% !important;
      }

      @include flexy(flex-start, center, row);
      column-gap: 0.5rem;
      font-weight: 700;
    }
  }

  :is(&-bg, &-sub) {
    @include md-tablet-devices {
      border-radius: 0;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 0.55rem;
    padding: 0 0.85rem;

    h2 {
      font-size: 127%;
    }

    @include md-tablet-devices {
      padding: 0 12px;
      font-size: 98%;

      h2 {
        font-size: 148%;
      }
    }

    p {
      font-size: 86.7%;
    }
  }

  &:hover {
    transform: translateY(-4px);

    @include md-tablet-devices {
      transform: translateY(0);
    }

    .card-container {
      &-bg img {
        transform: scale(1.05);
        
        @include md-tablet-devices {
          transform: scale(1);
        } 
      }
    }
  }
}

.card-container.new::before {
  @include pos-a(1rem, unset, 1rem);
  content: 'NEW';
  display: block;
  background: linear-gradient(95deg,
      var(--sc-new-1),
      var(--sc-new-2)) !important;
  z-index: 3;
  padding: 0.15rem 0.65rem;
  border-radius: 3px;
  font-size: 95%;
  font-weight: 700;
  color: white !important;
}

// sum content
:root {
  --prop-id-series: #193a9e;
  --prop-id-music: #802300;
  --prop-id-film: #b6005b;
  --prop-id-project: #a12a9c;
  --prop-id-misc: #404040;
}

.cardprop-id {
  &-series {
    background: var(--prop-id-series);
  }

  &-music {
    background: var(--prop-id-music);
  }

  &-film {
    background: var(--prop-id-film);
  }

  &-project {
    background: var(--prop-id-project);
  }

  &-misc {
    background: var(--prop-id-misc);
  }
}
</style>