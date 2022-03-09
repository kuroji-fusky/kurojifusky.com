<template>
  <section>
    <div id="top-content">
      <p>I'm in the process of learning:</p>
      <ul>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Firebase</li>
        <li>Svelte</li>
      </ul>
    </div>
    <skep-roadmap-wrapper>
      <div id="rm-line"></div>
      <div id="rm-content">
        <RoadmapItem
          year="March 2022"
          heading="Getting into back-end web development"
          desc="succ"
        >
          
        </RoadmapItem>
        <RoadmapItem
          year="December 2021"
          heading="Released my second album"
          desc="This time it's filled with bangers"
        >
          
        </RoadmapItem>
        <RoadmapItem
          year="August 2021"
          heading="Starting from the front-end"
          desc="Started with HTML, then some knowledge about CSS, but jackshit about JavaScript lmao"
        >
          
        </RoadmapItem>
        <RoadmapItem
          year="March 2021"
          heading="Releasing my first album"
          desc="Horizon was okay"
        >
          
        </RoadmapItem>
        <RoadmapItem
          year="June 2020"
          heading="Editing FANDOM wikis and basic CSS"
          desc="succ"
        >
        </RoadmapItem>
        <RoadmapItem
          year="2012-2014"
          heading="Making pointless VB .NET apps"
          desc="yes"
        >
        </RoadmapItem>
      </div>
    </skep-roadmap-wrapper>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { useMeta } from 'vue-meta'

const homedesc = "A shitty roadmap for my multi-talented skills lol"
const title = "Roadmap"

export default {
  components: {
    RoadmapItem: defineAsyncComponent(() => import('@/components/RoadmapItem.vue'))
  },
  setup() {
    useMeta({
      title: title,
      description: homedesc,
      og: {
        title: title,
        description: homedesc,
      },
      twitter: {
        title: title,
        description: homedesc,
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
section {
  max-width: 1440px;
}

#top-content {
  background: var(--overlay);
  padding: 2.5ex;
  z-index: 100;
  position: relative;
  border-radius: 6px;
}

skep-roadmap-wrapper {
  display: block;
  overflow: hidden;
  position: relative;
  transform: translateY(-25px);

  @media only screen and (max-width: 820px) {
    @include justify-center;
  }

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

  @media only screen and (max-width: 820px) {
    @include justify-center;
  }

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

  @media only screen and (max-width: 820px) {
    margin-left: 0;
  }
}

#rm-content {
  width: 100%;
  margin: 90px 0;
  flex-direction: column;
  row-gap: 3rem;
}
</style>