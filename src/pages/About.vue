<template>
  <section class="laptop-wrapper section-col">
    <article id="about-paragraph">
      <h2>Lorem ipusm</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque neque harum, possimus, sed veritatis fugit officia voluptatibus facilis unde dolorem voluptas.</p>
      <h2>Loremuh</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis suscipit aliquam corrupti consequatur. Itaque iste eaque soluta ullam ratione explicabo tenetur accusamus voluptates tempore! Tempore doloribus explicabo soluta corrupti.</p>
    </article>
    <div id="about-infocard">
      <img src="../assets/img/skep_glasses.png" alt="Autist" aria-label="Autist" />
      <h2>Skep</h2>
      <span>Experience in failure, experienced video editor, a total and complete dumbass</span>
    </div>
  </section>
  <section class="laptop-wrapper">
    <h2>Ref sheet</h2>
    <img src="../assets/img/vue-logo.png" alt="Ref shit" />
  </section>
</template>

<style lang="scss" scoped>
.laptop-wrapper {
  padding: 0.75rem 1rem;
}

.section-col {
  @include flex_params(unset, unset, row);
}

#about {
  &-paragraph {
    padding: 1.25rem;
    padding-left: 0 !important;
  }

  &-infocard {
    @include disable_drag();
    @include flex_params(center, center, column);

    width: 40%;
    padding: 0.5rem 2rem;

    img {
      @include prop_transition(transform);
      width: 200px;
      border-radius: 50%;
    }

    h2 {
      font-size: 1.75rem;
    }

    h2,
    span {
      text-align: center;
    }
  }
}
</style>