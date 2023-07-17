<template>
  <NuxtLoadingIndicator color="var(--loading-indicator)" />
  <Navbar />
  <slot />
  <Footer />
</template>

<style>
:root {
  --loading-indicator: theme("colors.kuro-lavender.400");
}
</style>
