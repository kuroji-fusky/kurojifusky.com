<script setup lang="ts">
import { techStack, creativeStack } from "../models/Content";
</script>

<template>
  <div class="page-wrapper">
    <TBA />
    <div class="page-wrapper-separator">
      <div class="profile-hero">
        <img src="/static/fursonas/08.png" alt="skepfusky" />
        <div>Socials WIP</div>
      </div>
      <div id="container">
        <ResumeSection title="About Me">
          <p>
            An independent freelance hobbyist residing from the mountainous
            regions in the Philippines specialing on various mediums, such as
            web technologies, design, visual effects, filmmaking, and music
            production. Enthusiast in various creative works and data science.
            An aspiring developer, content creator, music artist, and lead
            vocalist hoping to inspire future self-taught individuals.
          </p>
        </ResumeSection>
        <ResumeSection techTitle="Web">
          <ul class="resume-section-grid">
            <li
              class="resume-tech-item"
              v-for="tech of techStack"
              :key="tech.name"
            >
              <i :class="`devicon-${tech.icon}`"></i>
              <span>{{ tech.name }}</span>
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection techTitle="Creative">
          <ul class="resume-section-grid">
                        <li
              class="resume-tech-item"
              v-for="creative of creativeStack"
              :key="creative.name"
            >
              <i :class="`devicon-${creative.icon}`"></i>
              <span>{{ creative.name }}</span>
            </li>
          </ul>
        </ResumeSection>
        <!-- <ResumeSection techTitle="Music">
          <ul class="resume-section-grid"></ul>
        </ResumeSection> -->
        <ResumeSection title="Quotes">
          <div></div>
        </ResumeSection>
      </div>
    </div>
    <BaseHead title="Resume" description="Find out what da skepfusky doin" />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  @apply mx-auto max-w-screen-xl px-7;

  &-separator {
    @apply flex gap-4 flex-col md:flex-row;
  }
}

.profile-hero {
  @apply flex flex-col gap-y-1;

  img {
    @apply w-[21rem] rounded-md;
  }
}

#container {
  @apply flex flex-col;
}

.resume-section-grid {
  @apply grid grid-cols-6 gap-2;
}

.resume-tech-item {
  @apply flex flex-col justify-center items-center gap-y-2 p-4 rounded-md bg-sona-borahae-600 bg-opacity-20;

  i {
    @apply text-[42px];
  }

  span {
    @apply text-white text-sm text-center select-none;
  }
}
</style>
