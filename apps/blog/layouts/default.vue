<template>
  <NuxtLoadingIndicator color="var(--loading-indicator)" />
  <TheBaseNavbar />
  <slot />
  <TheBaseFooter />
</template>

<style>
:root {
  --loading-indicator: theme("colors.kuro-lavender.400");
  --selection-bg: theme("colors.kuro-lavender.700");
  --selection-fg: theme("colors.kuro-lavender.50");
}

::-moz-selection,
::selection {
  background: var(--selection-bg) !important;
  color: var(--selection-fg) !important;
}
</style>
