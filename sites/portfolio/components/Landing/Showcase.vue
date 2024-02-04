<script setup lang="ts">
const sillies = [
  {
    name: "BEtsy",
    description: "Your mom",
    repo: "kuroji-fusky/betsy"
  }
]
</script>

<template>
  <LandingWrapper heading="Showcase">
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] items-start gap-5 px-8 w-fit mx-auto"
    >
      <ContentList
        path="/showcase"
        v-slot="{ list }"
        :query="{ sort: [{ date: -1 }] }"
      >
        <div
          v-for="item in list"
          :key="item._path"
          class="p-4 flex flex-col gap-y-6 w-full"
        >
          <NuxtLink
            :to="item._path"
            draggable="false"
            class="aspect-[16/8] relative w-full overflow-hidden rounded-xl"
          >
            <NuxtImg
              provider="cloudinary"
              src="/sf-website/irl/yeseu.png"
              class="absolute inset-0 h-full w-full object-cover"
              fetchpriority="high"
            />
          </NuxtLink>
          <div class="flex flex-col gap-y-1.5">
            <h2 class="text-4xl font-bold text-kuro-lavender-100">
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
