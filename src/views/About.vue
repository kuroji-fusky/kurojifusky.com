<template>
  <main role="main" class="w-large-desktop">
    <h2 class="top-heading spacing-tablet">Proficency</h2>
    <section class="responsive-grid">
      <skill-bar skill="Video editing" :level="4"></skill-bar>
      <skill-bar skill="Doo dooing" :level="1"></skill-bar>
      <skill-bar skill="Music producer" :level="3"></skill-bar>
      <skill-bar skill="Vocalz" :level="2"></skill-bar>
    </section>
    <!-- <section class="container-info"></section> -->
  </main>
</template>

<script>
import skillBar from "@/components/SkillBar.vue";

export default {
  components: {
    skillBar,
  },

  data() {
    return {
      levels: []
    }
  }
};
</script>

<style lang="scss">
$hover-time: 400ms;

.skill {
  &-container {
    @include flexy-dir;
    @include soft-corners;
    padding: 1rem;
    background: gray;
  }

  &-bar {
    $bar-width: 12px;
    $bar-fill-2: calc($bar-width + 3px);
    $bar-fill-3: calc($bar-width + 4px * 4.6);
    $bar-fill-4: calc($bar-width + 4px * 8.6);

    &.low {
      height: 32px;
      width: $bar-width;
      background: red;
      box-shadow: $bar-fill-2 0 0 white, $bar-fill-3 0 0 white,
        $bar-fill-4 0 0 white;

      &::after {
        content: "SHIT";
        position: relative;
        left: 60px;
      }
    }
  }
}

.container-info {
  @include flexy();

  @include md-tablet-devices {
    @include flexy(center, center, column);

    article {
      text-align: center;
    }
  }

  margin: 0 1rem;
  padding: 0.45rem;

  img {
    width: 200px;

    @include md-tablet-devices {
      width: 300px;
    }
  }
}

.info-responsive {
  @include flexy(center, center, column);
  @include md-desktop-devices {
    padding: 1.25rem;
  }
  padding: 0 1rem;

  @include md-tablet-devices {
    padding: 1rem;
  }
}
</style>