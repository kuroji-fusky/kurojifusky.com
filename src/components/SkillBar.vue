<template>
  <div class="skill-bar">
    <h2>{{ skill }}</h2>
    <span class="bar-block b2"></span>
    <span class="bar-text"></span>
  </div>
</template>

<script>
export default {
  props: {
    skill: String,
    level: Number,
  },
};
</script>

<style lang="scss">
:root {
  --bar-fill: #464646;
  --bar-lvl-2: orange;
  --bar-lvl-3: yellow;
  --bar-lvl-4: lime;
}
.bar {
  &-block {
    height: 32px;
    width: 12px;
    box-shadow: 16px 0 0 var(--bar-fill), calc(16px * 2) 0 0 var(--bar-fill),
      calc(16px * 3) 0 0 var(--bar-fill);

    &.b1 {
      background: red;
    }

    &.b2 {
      background: var(--bar-lvl-2);
      box-shadow: 16px 0 0 var(--bar-lvl-2), calc(16px * 2) 0 0 var(--bar-fill),
        calc(16px * 3) 0 0 var(--bar-fill);
    }

    &.b3 {
      background: var(--bar-lvl-3);
      box-shadow: 16px 0 0 var(--bar-lvl-3), calc(16px * 2) 0 0 var(--bar-lvl-3),
        calc(16px * 3) 0 0 var(--bar-fill);
    }

    &.b4 {
      background: var(--bar-lvl-4);
      box-shadow: 16px 0 0 var(--bar-lvl-4), calc(16px * 2) 0 0 var(--bar-lvl-4),
        calc(16px * 3) 0 0 var(--bar-lvl-4);
    }
  }
}
</style>