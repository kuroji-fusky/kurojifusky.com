<template>
  <NuxtLoadingIndicator color="var(--loading-indicator)" />
  <TheBaseNavbar />
  <slot />
  <TheBaseFooter />
</template>

<style>
:root {
  --loading-indicator: theme("colors.kuro-lavender.400");
}
</style>
