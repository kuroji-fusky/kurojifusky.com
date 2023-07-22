<script setup lang="ts">
const props = defineProps<{ prefix?: string; date: string }>()

const formatDate = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const parseDate = formatDate.format(new Date(props.date))
</script>

<template>
  <div :aria-label="prefix ? `${prefix} ${parseDate}` : parseDate">
    <span v-if="prefix">
      {{ `${prefix} ` }}
    </span>
    <time :datetime="new Date(date).toISOString()">
      {{ parseDate }}
    </time>
  </div>
</template>
