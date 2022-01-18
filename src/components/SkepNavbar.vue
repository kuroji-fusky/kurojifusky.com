<template>
  <header>
    <nav class="desktop-hero-brand" role="navigation">
      <a class="desktop-hero-brand_btn">
        <i class="fas fa-bars"></i>
        <!-- <div class="desktop-dropdown_menu">
          Put something incredibly dumb in here
        </div> -->
      </a>
      <router-link id="icon-desktop" to="/">
        <img
          :alt="logoAlt"
          :aria-label="logoAlt"
        >
      </router-link>
      <ul>
        <li id="containsContext">
          <a href="#">Shit Content<span class="navbar-line"></span></a>
          <div class="desktop-dropdown">
            <router-link to="/use-of-content">Use of Content</router-link>
            <router-link to="/discography">Discography</router-link>
          </div>
        </li>
        <li id="containsContext">
          <a href="#">About<span class="navbar-line"></span>
          <div class="desktop-dropdown">
            <router-link to="/about">About Me</router-link>
            <a href="#">Biography</a>
            <a href="#">My Dying Career lmao</a>
            <a href="#">My Sona lol</a>
          </div>
        </a></li>
        <!-- <li><router-link to="/quotes">Quotes<span class="navbar-line"></span></router-link></li> -->
      </ul>
    </nav>
    <router-link id="icon-mobile" to="/">
      <img 
        :alt="logoAlt"
        :aria-label="logoAlt"
      >
    </router-link>
  </header>
  <div id="mobile-padding"></div>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      logoAlt: "skepfusky",
    };
  },
};
</script>