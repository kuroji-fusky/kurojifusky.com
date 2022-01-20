<template>
  <article>
    <h2>Fursona<span id="gradient-block"></span></h2>
    <p>TBA</p>
  </article>
  
  <article>
    <h3>Sketches/other versions</h3>
    <div id="gallery-layout">
      <figure>
        <img src="../assets/img/drawings-self/Jan2022Sketch.png" alt="Was learning TypeScript in the middle of drawing this adorable boi">
        <figcaption>Warmup Sketch #2; January 2022<br> <i style="opacity: .5">Was learning TypeScript in the middle of drawing this adorable boi</i></figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Nov4.png" alt="Enlarged eyes & glasses">
        <figcaption>Enlarged eyes &amp; glasses</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Nov2.png" alt="Final w/ Shading">
        <figcaption>Final w/ Shading</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Nov1.png" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Rough Draft</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/NovSketch.png" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Formal Pose Sketch; November 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Sep1.png" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Exaggerated and "excited" expression; September 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Aug1.png" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Shorted left floof for perspective and collar change; August 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Aug3.gif" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>I'm not sure why I made this; made in After Effects</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June4.png" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Thicc glasses</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June3.png" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Re-traced in Adobe Illustrator</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June2.png" alt="Re-added glasses and changed eye color">
        <figcaption>Re-added glasses and changed eye color</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/June1.png" alt="Traced drawing on Photoshop">
        <figcaption>Traced drawing on Photoshop; June 2021</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-self/Aug2020.jpg" alt="Drawn professionally in mspaint on August 2020 lol">
        <figcaption>First iteration drawn <i>professionally</i> in mspaint on August 2020 lol</figcaption>
      </figure>
    </div>
  </article>

  <article>
    <h2>Sum fanart<span id="gradient-block"></span></h2>
    <div id="gallery-layout">
      <figure>
        <img src="../assets/img/drawings-ext/JAKEmegaSNAKE.png" alt="Drawn by JAKEmegaSNAKE (cropped)">
        <figcaption>Drawn by JAKEmegaSNAKE<br>(cropped)</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-ext/JAKEmegaSNAKE_orig.jpg" alt="Drawn by JAKEmegaSNAKE">
        <figcaption>Drawn by JAKEmegaSNAKE</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-ext/ZAMBOY_orig.png" alt="Drawn by ZAMBOYYT">
        <figcaption>Drawn by ZAMBOYYT</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/drawings-ext/JakeJune.png" alt="Drawn by JAKEmegaSNAKE">
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
    max-height: 250px;
    background: rgba(gray, 11%);
    border-radius: 8px;
    @include phone-devices {
      max-height: 210px;
    }
  }
}
</style>