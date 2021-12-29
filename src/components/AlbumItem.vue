<template>
  <a href="#" class="album-item">
    <img :src="`/src/img/album-covers/${cover}`" :alt="`Album cover for ${title}`" :aria-label="`Album cover for ${title}`">
    <div class="album-item_info">
      <h3>{{ title }}</h3>
      <ul>
        <li v-if="isAlbum">Album</li>
        <li v-else-if="isEP">EP</li>
        <li v-else>Single</li>
        <li>{{year}}</li>
        <li>{{length}}</li>
      </ul>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {type: String, default: "Album Title"},
    cover: {type: String, default: "anl final copy 3.png"},
    length: {type: String, default: 'undefined'},
    year: {type: Number, default: new Date().getFullYear()},

    isAlbum: Boolean,
    isEP: Boolean,
  }
}
</script>

<style lang="scss">
.album-item {
  @include flexy(center, center, column);
  cursor: pointer;
  z-index: 20;

  &_info {
    margin-top: 1.45rem;
    line-height: 29px;
    @include flexy(center, center, column);
    text-align: center;
  }

  img {
    width: 90%;
    transform: translateX(0px) translateY(0px);
    transition: transform $hover-time ease, box-shadow $hover-time ease;
  }

  &:hover {
    img {
      box-shadow: 8px 8px 0 orange;
      transform: translateX(-4px) translateY(-4px);
    }
  }

  ul {
    display: flex;
    list-style: none;
    font-size: 78%;
  }

  li {
    margin-right: 3px;
    &:first-child {
      &::before {
        display: none;
      }
    }

    &::before {
      content: ' • ';
    }
  }
}
</style>