<template>
  <TheBaseNavbar :landing="true" />
  <TheBaseNavMenu />
  <main>
    <slot />
  </main>
  <TheBaseFooter />
</template>
