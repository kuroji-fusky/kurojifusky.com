<script setup lang="ts"></script>

<template>
  <ContentDoc tag="article" v-slot="{ doc }">
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>
