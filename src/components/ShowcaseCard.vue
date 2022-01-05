<template>
  <a
    class="showcase-card-container"
    :class="[isNew ? 'showcase-card-new' : '']"
    :href="`https://${link}`"
  >
    <div class="showcase-card-container__bg">
      <img 
        src="@/img/placeholder.png"
        :alt="`Cover of ${title}`"
        :width="imgSize"
        >
    </div>
    <div
      class="showcase-card-container__sub"
      :class="[
        idSeries ? 'cardprop-id-series' : '',
        idMusic ? 'cardprop-id-music' : '',
        idProject ? 'cardprop-id-project' : '',
        idFilm ? 'cardprop-id-film' : '',
        idMisc ? 'cardprop-id-misc' : '',
      ]"
    >
      <div v-if="idSeries"><i class="fas fa-video"></i>Video series</div>
      <div v-else-if="idMusic"><i class="fas fa-music"></i>Discography</div>
      <div v-else-if="idProject"><i class="fas fa-project-diagram"></i>Project</div>
      <div v-else-if="idFilm"><i class="fas fa-film"></i>Film</div>
      <div v-else-if="idMisc"><i class="fas fa-box"></i>Miscellaneous</div>
      <div v-else><i class="fas fa-question"></i>Undefined tag</div>
    </div>
    <article class="showcase-card-container__info">
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
