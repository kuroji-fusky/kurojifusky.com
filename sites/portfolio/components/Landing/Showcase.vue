<script setup lang="ts"></script>

<template>
  <LandingWrapper heading="Showcase">
    <div
      class="mx-auto grid w-fit grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] items-start gap-5 px-8"
    >
      <ContentList path="/showcase" v-slot="{ list }" :query="{ sort: [{ date: -1 }] }">
        <div v-for="item in list" :key="item._path" class="flex w-full flex-col gap-y-6 p-4">
          <NuxtLink
            :to="item._path"
            draggable="false"
            class="relative aspect-[16/8] w-full overflow-hidden rounded-xl"
          >
            <NuxtImg
              provider="cloudinary"
              src="/sf-website/irl/yeseu.png"
              class="absolute inset-0 h-full w-full object-cover"
              fetchpriority="high"
            />
          </NuxtLink>
          <div class="flex flex-col gap-y-1.5">
            <h2 class="text-kuro-lavender-100 text-4xl font-bold">
              <NuxtLink :to="item._path">
                {{ item.title }}
              </NuxtLink>
            </h2>
            <p class="opacity-75">
              {{ item.description }}
            </p>
            <span class="opacity-75">
              {{ item.date }}
            </span>
          </div>
        </div>
      </ContentList>
    </div>
  </LandingWrapper>
</template>
