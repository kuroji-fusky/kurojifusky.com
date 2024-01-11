<script setup lang="ts">
useTastySEO({
  title: "Showcases",
  description: "Here's all of my amazing creations or idfk lol"
})
</script>

<template>
  <main>
    <div>
      <ContentList path="/showcase" v-slot="{ list }"> </ContentList>
    </div>
  </main>
</template>
