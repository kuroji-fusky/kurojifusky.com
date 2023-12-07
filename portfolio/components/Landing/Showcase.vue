<script setup lang="ts">
const sillies = [
  {
    name: "BEtsy",
    description: "Your mom",
    repo: "kuroji-fusky/betsy",
  },
]
</script>

<template>
  <div>
    <div class="flex flex-col">
      <ContentList path="/showcase" v-slot="{ list }">
        <div
          v-for="item in list"
          :key="item._path"
          class="p-4 flex flex-col gap-y-6 w-[60rem]"
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
            />
          </NuxtLink>
          <div class="flex flex-col gap-y-1.5">
            <h2 class="text-5xl font-bold">
              <NuxtLink :to="item._path">
                {{ item.title }}
              </NuxtLink>
            </h2>
            <p>
              {{ item.description }}
            </p>
            <span>
              {{ item.date }}
            </span>
          </div>
        </div>
      </ContentList>
    </div>
  </div>
</template>
