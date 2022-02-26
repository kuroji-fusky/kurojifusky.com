<script lang="ts" setup>
const props = defineProps<{
  skill: string,
  since: number,
  level: number,
  levelCustom: string,
}>()
</script>

<template>
  <div id="proficency-item">
    <h3>{{ skill }}</h3>
    <div id="proficency-lower">
      <div style="width: 30%; border-right: 2px dashed #aaa">Since {{ since }}</div>
      <div style="width: 70%">
        <div v-if="level === 1" id="proficency-identicator" style="--donut-fill: red; --donut-val: 10;">
          <div id="donut"></div>
          <strong v-if="levelCustom">{{ levelCustom }}</strong>
          <strong v-else>Inexperienced</strong>
        </div>
        <div v-else-if="level === 2" id="proficency-identicator" style="--donut-fill: orange; --donut-val: 25;">
          <div id="donut"></div>
          <strong v-if="levelCustom">{{ levelCustom }}</strong>
          <strong>Novice</strong>
        </div>
        <div v-else-if="level === 3" id="proficency-identicator" style="--donut-fill: yellow; --donut-val: 50;">
          <div id="donut"></div>
          <strong v-if="levelCustom">{{ levelCustom }}</strong>
          <strong>Intermediate</strong>
        </div>
        <div v-else-if="level === 4" id="proficency-identicator" style="--donut-fill: #92dc0f; --donut-val: 75;">
          <div id="donut"></div>
          <strong v-if="levelCustom">{{ levelCustom }}</strong>
          <strong>Advanced</strong>
        </div>
        <div v-else-if="level === 5" id="proficency-identicator" style="--donut-fill: lime; --donut-val: 90;">
          <div id="donut"></div>
          <strong v-if="levelCustom">{{ levelCustom }}</strong>
          <strong v-else>Experienced</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin-bottom: 4px;
}
#proficency-item {
  display: flex;
  flex-direction: column;
  row-gap: 0.15rem;
  padding: var(--item-padding);
  background: var(--overlay);
  border-radius: 6px;

  div {
    font-size: 96%;
  }
}

#proficency-lower {
  display: flex;
  justify-content: space-between;
  column-gap: 0.55em;
}

#proficency-identicator {
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 0.45rem;
  font-size: 88%;
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