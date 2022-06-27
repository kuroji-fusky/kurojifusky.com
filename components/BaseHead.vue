<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    img?: string;
    isDefaultIndex?: boolean;
  }>(),
  {}
);

const SITE_TITLE = "skepfusky";
const keywords = ["programming", "music", "skepfusky", "kokoro husky", "yes"];

const indexTitle = "skepfusky official website";
const indexDescription = "Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines! Feel free to browse my cringe, or not...";
</script>

<template>
  <Head>
    <Title v-if="$route.name === 'index'">{{ indexTitle }}</Title>
    <Title v-else>{{ title }} - {{ SITE_TITLE }}</Title>

    <Meta v-if="$route.name === 'index'" name="title" :content="indexTitle" />
    <Meta v-else name="title" :content="`${title} - ${SITE_TITLE}`" />

    <Meta
      v-if="$route.name === 'index'"
      name="description"
      :content="indexDescription"
    />
    <Meta v-else name="description" :content="description" />

    <Meta
      v-if="$route.name === 'index'"
      property="og:title"
      :content="indexTitle"
    />
    <Meta v-else property="og:title" :content="`${title} - ${SITE_TITLE}`" />

    <Meta
      v-if="$route.name === 'index'"
      property="og:description"
      :content="indexDescription"
    />
    <Meta v-else property="og:description" :content="description" />

    <Meta
      v-if="$route.name === 'index'"
      name="twitter:title"
      :content="indexTitle"
    />
    <Meta v-else name="twitter:title" :content="`${title} - ${SITE_TITLE}`" />

    <Meta
      v-if="$route.name === 'index'"
      name="twitter:description"
      :content="indexDescription"
    />
    <Meta v-else name="twitter:description" :content="description" />

    <!-- No change -->
    <Meta v-if="keywords" name="keywords" :content="keywords?.join(', ')" />
    <Meta v-if="img" name="image" :content="img" />
    <Meta property="og:type" content="website" />
    <Meta v-if="img" property="og:image" :content="img" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta v-if="img" name="twitter:image" :content="img" />
  </Head>
</template>
