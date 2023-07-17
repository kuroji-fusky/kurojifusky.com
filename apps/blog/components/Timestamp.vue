<script setup lang="ts">
const props = defineProps<{ prefix?: string; date: string }>()

const formatDate = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
})

const parseDate = formatDate.format(new Date(props.date))
</script>

<template>
  <div :aria-label="prefix ? `${prefix} ${parseDate}` : parseDate">
    <span v-if="prefix">
      {{ `${prefix} ` }}
    </span>
    <time>
      {{ parseDate }}
    </time>
  </div>
</template>
