<template>
  <section id="about-me" class="grid-full-width">
    <div id="young-boi-frame" style="grid-column: 7">
      <img src="../../assets/img/03.png">
    </div>
    <article class="bubble-info" style="grid-column: 8 / span 3; margin: 90px 0;">
      <h1>About me</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur officiis autem voluptatem a ea fuga quasi harum nobis quae, laboriosam blanditiis.</p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
#about-me {
  margin: 2rem 0;
  img {
    border: 9px solid white;
    box-shadow: 0 0 13px rgba(#000, 45%);
    width: 300px;
    transform: rotate(-5deg) translate(-98px, 10px);
  }
}

#young-boi-frame {
  position: absolute;
  inset: 0 auto auto auto;
  z-index: -1;
}
</style>