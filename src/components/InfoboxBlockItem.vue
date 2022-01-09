<template>
  <div class="infobox-block-item">
    <span class="infobox-block-item_data">{{ title }}</span>
    <span class="infobox-block-item_label">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, default: 'Title'},
    value: {type: String, default: 'Value'},
  }
}
</script>