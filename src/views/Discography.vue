<template>
  <Backdrop imgUrl="album-covers/WATCH THE GODDAMN SUNSET.jpg"/>
  <main role="main" class="w-large-desktop">
    <h2 class="top-heading spacing-tablet">DISCOGRAPHY</h2>
    <latest-music 
      title="A New Life"
      date="12/15/2021"
      length="30:00"
      :year="2021"
      genre="Alternate/Indie"
      label="Fusky & Co."
    />
    <div id="discography-layout-grid" role="navigation">
      <album-item :year="2021" title="Timeless"/>
      <album-item :year="2021" title="Fever Dream"/>
      <album-item :year="2021" title="Nostalgia" :isEP="true" />
      <album-item :year="2021" title="Sea of Clouds (Extended)"/>
      <album-item :year="2021" title="Utopian Dream"/>
      <album-item :year="2021" title="Eclipse"/>
      <album-item :year="2021" title="Origins (Remastered)"/>
      <album-item :year="2021" title="Horizon" :isAlbum="true"/>
      <album-item :year="2020" title="Watch the Sunset"/>
      <album-item :year="2020" title="Awaken"/>
      <album-item :year="2020" title="Metalic Emperor"/>
      <album-item :year="2020" title="Origins"/>
      <album-item :year="2018" title="Migloco"/>
    </div>
  </main>
</template>

<script>
import LatestGarbage from '@/components/LatestMusic.vue'
import Backdrop from '@/components/Backdrop.vue'
import AlbumItem from '@/components/AlbumItem.vue'

export default {
  components: {
    Backdrop,
    "latest-music": LatestGarbage,
    AlbumItem,
}
}
</script>

<style lang="scss">
.w-large-desktop {
  padding: 0 1rem;
  padding-bottom: .75rem !important;
}

#discography-layout-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: .55rem;
  padding: 1.25rem 0;
}
</style>