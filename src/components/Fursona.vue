<template>
  <article>

  </article>
  <article>
    <h2>Different iterations</h2>
    <div id="gallery-layout">
      <figure>
        <img src="../assets/img/drawings-self/Nov4.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Enlarged eyes &amp; glasses</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Nov2.png" draggable="false" alt="Final w/ Shading">
        <figcaption>Final w/ Shading</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Nov1.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Rough Draft</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/NovSketch.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Formal Pose Sketch; November 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Sep1.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Exaggerated expression; September 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Aug1.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Shorted left floof for perspective and collar change; August 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June4.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Bold glasses</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June3.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Re-traced in Adobe Illustrator</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June2.png" draggable="false" alt="Re-added glasses and changed eye color">
        <figcaption>Re-added glasses and changed eye color</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June1.png" draggable="false" alt="Traced drawing on Photoshop">
        <figcaption>Traced drawing on Photoshop; June 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Aug2020.jpg" draggable="false" alt="Drawn professionally in mspaint on August 2020 lol">
        <figcaption>First iteration drawn <i>professionally</i> in mspaint on August 2020 lol</figcaption>
      </figure>
    </div>
  </article>

  <article>
    <h2>Sum fanart</h2>
    <div id="gallery-layout">
      <figure>
        <img src="../assets/img/drawings-ext/JAKEmegaSNAKE.png" draggable="false" alt="Drawn by JAKEmegaSNAKE (cropped)">
        <figcaption>Drawn by JAKEmegaSNAKE<br>(cropped)</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-ext/JAKEmegaSNAKE_orig.jpg" draggable="false" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Drawn by JAKEmegaSNAKE</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-ext/ZAMBOY_orig.png" draggable="false" alt="Drawn by ZAMBOYYT">
        <figcaption>Drawn by ZAMBOYYT</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-ext/JakeJune.png" draggable="false" alt="Drawn by JAKEmegaSNAKE">
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
    text-align: center;
    width: 300px;
  }
  img {
    height: 250px;
  }
}
</style>