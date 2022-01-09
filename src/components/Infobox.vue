<template>
  <aside class="infobox">
    <h2 
      :class="[
        isAlbum ? 'heading-album' : '',
        isEP ? 'heading-ep' : '',
      ]"
    >
      {{ title }}
    </h2>
    <img src="" :alt="alt" :aria-label="alt">
    <hr>
    <div v-if="infoboxMusic" id="info-music">
      <InfoboxBlockItem title="Release date" :value="value"/>
      <InfoboxBlockItem title="Release date" :value="value"/>
    </div>
    <div v-else-if="infoboxSeries" id="info-series">
      <InfoboxBlockItem title="No. of seasons" :value="value"/>
      <InfoboxBlockItem title="No. of epsodes" :value="value"/>
    </div>
    <div v-else></div>
  </aside>
</template>

<script>
import InfoboxBlockItem from "./InfoboxBlockItem.vue";

export default {
  props: {
    title: { type: String, default: 'Infobox Title' },
    alt: { type: String },
    value: { type: String, default: 'Value' },

    // Infobox stuff
    infoboxMusic: {type: Boolean, default: false},
    infoboxSeries: {type: Boolean, default: false},

    // Music stuff
    isAlbum: {type: Boolean, default: false},
    isEP: {type: Boolean, default: false},
  },
  components: {
    InfoboxBlockItem,
  },
};
</script>

<style lang="scss">
.infobox {
  float: left;
  position: sticky;
  top: 10rem;
  left: 0;
}

.heading {

}
</style>