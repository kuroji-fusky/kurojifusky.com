<template>
  <header>
    <div id="wrapper">
      <NuxtLink to="/">
        <span id="logo">
          <img src="" alt="skepfusky" />
        </span>
      </NuxtLink>
      <nav id="nav-header">
        <ul>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <DropdownContainer class="translate-x-[6rem]">
              <DropdownList heading="Personal">
                <DropdownItem
                  v-for="proj in personalCrap"
                  :title="proj.title"
                  :page-link="proj.link"
                />
              </DropdownList>
              <DropdownList heading="Contributed">
                <DropdownItem
                  ext-link="https://myfursona.art"
                  title="MyFursona"
                />
              </DropdownList>
            </DropdownContainer>
          </li>
          <li>
            <NuxtLink to="#">Other works</NuxtLink>
            <DropdownContainer>
              <DropdownList>
                <DropdownItem page-link="/discography" title="Discography" />
                <DropdownItem page-link="/videos" title="Videos" />
              </DropdownList>
            </DropdownContainer>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">About</NuxtLink>
            <DropdownContainer class="translate-x-4">
              <DropdownList>
                <DropdownItem page-link="/fursona" title="Fursona" />
                <DropdownItem page-link="#" title="Technologies" />
                <DropdownItem page-link="#" title="Resume" />
              </DropdownList>
            </DropdownContainer>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const personalCrap = [
  { title: "Fren Time Tracker", link: "/projects/fren-time-tracker" },
  { title: "Scammerino", link: "/projects/scammerino" },
  { title: "Paco Drawing Stats", link: "/projects/paco-drawing-stats" },
  { title: "Crimson Paw", link: "/projects/the-crimson-paw" },
]
</script>

<style lang="scss" scoped>
#wrapper {
  @apply flex justify-between items-center select-none px-10;
}

nav > ul {
  @apply flex gap-x-14;
}

#nav-header {
  li {
    @apply relative py-[1.65rem];

    &:hover #dropdown {
      @apply opacity-100 top-[4rem] pointer-events-auto;
    }
  }
}

#dropdown {
  @apply opacity-0 z-10 flex pointer-events-none absolute top-[3.5rem] right-0 gap-1 p-1 rounded-md bg-neutral-500 shadow-md transition-all duration-300 w-max;

  li {
    @apply p-0 #{!important};
  }
}
</style>
