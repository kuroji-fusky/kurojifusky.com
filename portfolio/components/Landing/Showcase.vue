<script setup lang="ts">
const sillies = [
  {
    name: "BEtsy",
    description: "Your mom",
    repo: "kuroji-fusky/betsy",
  },
];
</script>

<template>
  <div>
    <h1>Showcase</h1>
    <div class="flex flex-col">
      <ContentList path="/showcase" v-slot="{ list }">
        <div v-for="item in list" :key="item._path" class="p-4">
          <div>img</div>
          <h2 class="text-3xl font-bold">
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
      </ContentList>
    </div>
  </div>
</template>
