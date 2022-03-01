<template>
  <section>
    <div id="rm-line"></div>
    <div id="rm-content">
      <RoadmapItem :year=2022 heading="Getting into your mom development">
        succ
      </RoadmapItem>
      <RoadmapItem :year=2021 heading="Starting from the front-end">
        Started with HTML, then some knowledge about CSS, but jackshit about JavaScript lmao
      </RoadmapItem>
      <RoadmapItem :year=2020 heading="Releasing my first album">
        lmao
      </RoadmapItem>
      <RoadmapItem :year=2020 heading="Editing FANDOM wikis and basic CSS">
        succ
      </RoadmapItem>
      <RoadmapItem :year=2015 heading="Basic ass HTML website">
        lmao
      </RoadmapItem>
      <RoadmapItem :year=2014 heading="Making pointless VB .NET apps">
        yes
      </RoadmapItem>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const RoadmapItem = defineAsyncComponent(() => import('@/components/RoadmapItem.vue'))
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
section {
  display: block;
  overflow: hidden;
  position: relative;
  max-width: 1440px;

  &::before, &::after {
    content: '';
    display: block;
    height: 100px;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  &::before {
    top: 0;
    background: linear-gradient(to top, var(--gradient-pnt-0), var(--gradient-pnt-1) 98%);
  }
  
  &::after {
    bottom: 0;
    background: linear-gradient(to bottom, var(--gradient-pnt-0), var(--gradient-pnt-1) 98%);
  }
}

#rm {
  &-line, &-content {
    display: flex;
  }
}

#rm-line {
  width: 16%;
  height: 100%;
  position: absolute;
  top: 0;

  &::before {
    content: '';
    display: block;
    background: white;
    width: 5px;
    height: 100%;
  }
}

#rm-line::before, #rmi-item-intersect {
  position: relative;
  margin-left: 120px;
}

#rm-content {
  
  width: 100%;
  margin: 90px 0;
  flex-direction: column;
  row-gap: 3rem;
}
</style>