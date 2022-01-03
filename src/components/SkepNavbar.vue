<template>
  <header :class="[themeToggle ? 'theme-light' : '']">
    <div class="desktop-hero-brand">
      <a class="desktop-hero-brand_btn">
        <i class="fas fa-bars"></i>
        <!-- <div class="desktop-dropdown_menu">
          Put something incredibly dumb in here
        </div> -->
      </a>
      <router-link id="icon-desktop" to="/">
        <img :alt="logoAlt" :aria-label="logoAlt" />
      </router-link>
    </div>
    <router-link id="icon-mobile" to="/">
      <img :alt="logoAlt" :aria-label="logoAlt" />
    </router-link>
    <a class="theme-toggle-btn">
      <i class="fas fa-adjust"></i>
      <!-- <div class="desktop-dropdown_toggle">
        <strong>Theme</strong>
        <strong>Language</strong>
      </div> -->
    </a>
  </header>
  <div id="mobile-padding"></div>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      logoAlt: "Insert stupid logo",
    };
  },
  props: {
    themeToggle: Boolean,
  },
};
</script>
