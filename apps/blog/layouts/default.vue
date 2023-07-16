<template>
  <NuxtLoadingIndicator color="var(--loading-indicator)" />
  <Navbar />
  <slot />
  <footer>© Kuroji Fusky</footer>
</template>

<style>
:root {
  --loading-indicator: theme("colors.kuro-lavender.400");
}
</style>
