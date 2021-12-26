<template>
  <a class="home-card-container" :class="[isNew ? 'home-card-new':'']" :href="`https://${link}`">
      <div class="home-card-container__bg">
        <img src="@img/skep-vars/SkepFormalBrand.png" :alt="`Cover of ${title}`" :width="imgSize" >
      </div>
    <div class="home-card-container__sub"></div>
    <article class="home-card-container__info">
      <h2 :class="[isNew ? 'append-new' : '']">{{ title }}</h2>
      <p>{{ desc }}</p>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean
    },
    imgSize: {
      type: Number,
      default: 600
    },
    link: { 
      type: String,
      default: "youtube.com"
    },
    title: { 
      type: String,
      default: "Title unspecified"
    },
    desc: {
      type: String,
      default: "You didn't specify a description you stupid",
    },
  },
};
</script>