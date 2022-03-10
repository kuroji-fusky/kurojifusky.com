<script lang="ts" setup>
interface gitGudKid {
  skill: string;
  since?: number;
  level: number;
  icon: string;
}

const props = withDefaults(defineProps<gitGudKid>(), {
  since: 2069,
  icon: "fa-bar",
})
</script>

<template>
  <div id="proficency-item">
    <div>
      <div id="svg-center">
        <i :class="['fas', icon]"></i>
      </div>
      <h3>{{ skill }}</h3>
      <p><slot></slot></p>
    </div>
    <div id="proficency-lower">
      <div style="width: 30%; border-right: 2px dashed #aaa">Since {{ since }}</div>
      <div style="width: 70%">
        <div v-if="level === 1" id="proficency-identicator" style="--donut-fill: red; --donut-val: 10;">
          <div id="donut"></div>
          <strong>Inexperienced</strong>
        </div>
        <div v-else-if="level === 2" id="proficency-identicator" style="--donut-fill: orange; --donut-val: 25;">
          <div id="donut"></div>
          <strong>Novice</strong>
        </div>
        <div v-else-if="level === 3" id="proficency-identicator" style="--donut-fill: yellow; --donut-val: 50;">
          <div id="donut"></div>
          <strong>Intermediate</strong>
        </div>
        <div v-else-if="level === 4" id="proficency-identicator" style="--donut-fill: #92dc0f; --donut-val: 75;">
          <div id="donut"></div>
          <strong>Advanced</strong>
        </div>
        <div v-else-if="level === 5" id="proficency-identicator" style="--donut-fill: lime; --donut-val: 100;">
          <div id="donut"></div>
          <strong>Experienced</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;

h3 {
  margin-bottom: 4px;
}

p {
  font-size: 90%;
  line-height: 1.45rem;
}

#svg-center {
  @include flex-center;
  height: 120px;
  font-size: 4.5rem !important;
}

#proficency-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 0.35rem;
  padding: var(--item-padding);
  background: var(--overlay);
  border-radius: 6px;

  div {
    font-size: 96%;
  }
}

#proficency-lower {
  @include justify-between;
  column-gap: 0.75em;
  background: rgb(60, 60, 60);
  padding: 0.45rem 0.65rem;
  border-radius: 3px;
}

#proficency-identicator {
  position: relative;
  @include item-center;
  column-gap: 0.45rem;
  font-size: 85%;
  color: rgb(220,220,220);
  text-transform: uppercase;
}

#donut {
  --donut-border: 3px;
  --donut-size: 18px;
  width: var(--donut-size);
  height: var(--donut-size);
  border-radius: 50%;
  transform: scale(1.055);
  background: radial-gradient(farthest-side, #0000 calc(99% - var(--donut-border)), rgb(31, 31, 31) calc(100% - var(--donut-border)));

  &::before {
    content: "";
    position: absolute;
    border-radius: inherit;
    inset: 0;
    background: conic-gradient(var(--donut-fill) calc(var(--donut-val, 50)*1%),#0000 0);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--donut-border)),#000 calc(100% - var(--donut-border)));
    mask:radial-gradient(farthest-side,#0000 calc(99% - var(--donut-border)),#000 calc(100% - var(--donut-border)));
  }
}
</style>