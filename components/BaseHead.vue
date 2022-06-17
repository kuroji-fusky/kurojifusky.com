<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    keywords?: string[] | any;
    img?: string;
    isDefaultIndex?: boolean;
  }>(),
  {
    title: "",
    description: "",
    keywords: ["programming", "music", "skepfusky", "kokoro husky", "yes"],
    img: "",
  }
);

const SITE_TITLE = ref("skepfusky");
</script>

<template>
  <Head>
    <Title>{{ title }} - {{ SITE_TITLE }}</Title>
    <Meta name="title" :content="`${title} - ${SITE_TITLE}`" />
    <Meta name="description" :content="description" />
    <Meta property="og:title" :content="`${title} - ${SITE_TITLE}`" />
    <Meta property="og:description" :content="description" />
    <Meta name="twitter:title" :content="`${title} - ${SITE_TITLE}`" />
    <Meta name="twitter:description" :content="description" />

    <!-- No change -->
    <Meta rel="shortcut icon" href="/favicon.ico" />
    <Meta v-if="keywords" name="keywords" :content="keywords?.join(', ')" />
    <Meta v-if="img" name="image" :content="img" />
    <Meta property="og:type" content="website" />
    <Meta v-if="img" property="og:image" :content="img" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta v-if="img" name="twitter:image" :content="img" />
  </Head>
</template>
