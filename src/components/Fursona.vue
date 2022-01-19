<template>
  <article>
    <div id="gallery-layout">
      <figure>
        <img src="@/assets/img/drawings-ext/JAKEmegaSNAKE.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Drawn by JAKEmegaSNAKE</figcaption>
      </figure>
      <figure>
        <img src="@/assets/img/drawings-ext/JAKEmegaSNAKE_orig.jpg" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Drawn by JAKEmegaSNAKE (uncropped)</figcaption>
      </figure>
      <figure>
        <img src="@/assets/img/drawings-ext/ZAMBOY_orig.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Drawn by ZAMBOYYT</figcaption>
      </figure>
      <figure>
        <img src="@/assets/img/drawings-ext/JakeJune.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Drawn by JAKEmegaSNAKE</figcaption>
      </figure>
    </div>
  </article>
</template>

<style lang="scss">
#gallery-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .65rem;

  figure {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  figcaption {
    opacity: .65;
    padding: 1rem 0;
  }
  img {
    height: 250px;
  }
}
</style>