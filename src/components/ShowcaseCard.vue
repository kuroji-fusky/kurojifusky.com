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
