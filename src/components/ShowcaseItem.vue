<template>
  <a id="project-item" href="#">
    <div id="project-img" class="flex flex-center">
      <img src="~@/assets/img/placeholder.png" :alt="title" :aria-label="title">
    </div>
    <div id="project-bottom">
      <h3>{{ title }}</h3>
      <span>{{ desc }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: { default: 'Title' },
    desc:{ default: 'desc' }
  }
}
</script>

<style lang="scss">
#project-item {
  overflow: hidden;
  border-radius: 6px;
  height: 275px;
  border: 1px solid gray;
  position: relative;

  img {
    width: 100%;
    transition: transform 250ms ease;
  }

  &:hover img {
    transform: scale(1.035);
  }
}

#project-img {
  height: 100%;
}

#project-bottom {
  @include pos-a(auto, auto, 0);
  padding: 0.65rem;
  padding-top: 1.75rem;
  width: 100%;
  text-align: left;
  font-size: 115%;
  background: linear-gradient(rgba(black, 0%), rgba(black, 90%));
}
</style>