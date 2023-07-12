<script setup lang="ts">
const menus = [
  { name: "Engineering", href: "/engineering" },
  { name: "Engineering", href: "/engineering" },
  { name: "Engineering", href: "/engineering" }
]
</script>

<template>
  <nav class="flex justify-between px-6 py-2.5">
    <div>Blog</div>
    <ul>
      <li v-for="({ name, href }, index) in menus" :key="index">
        <a :href="href">{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>
