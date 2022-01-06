<template>
  <a href="#">
    <figure class="album-item">
      <img :src="require(`@/img/album-covers/${cover}`)" :alt="`Album cover for ${title}`" :aria-label="`Album cover for ${title}`">
      <figcaption class="album-item_info">
        <h3>{{ title }}</h3>
        <ul>
          <li v-if="isAlbum">Album</li>
          <li v-else-if="isEP">EP</li>
          <li v-else>Single</li>
          <li>{{year}}</li>
          <li>{{length}}</li>
        </ul>
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  props: {
    title: {type: String, default: "Album Title"},
    cover: {type: String, default: "A New Life final cover.png"},
    length: {type: String, default: 'undefined'},
    year: {type: Number, default: new Date().getFullYear()},

    isAlbum: Boolean,
    isEP: Boolean,
  }
}
</script>