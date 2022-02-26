<template>
  <section>
    <article class="bubble-info">
      <h1>About me</h1>
      <p>
        I'm Kerby Keith Aquino, but I'd prefer being called as
        <span id="name-highlight">skepfusky</span>, or simply as
        <span id="name-highlight">Skep</span>, I'm also known by my stage name
        <span id="name-highlight">Kokoro Husky</span> on streaming platforms;
        I'm a 20-year-old high school graduate immediate college dropout from
        the Philippines who's extremely passionate about sharing and inspiring
        future generations through talent and art as a self-taught individual.
      </p>
      <hr />
      <p>
        I have an equal passion for programming, music production, and
        filmmaking!
      </p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 2rem auto;
  text-align: center;
  img {
    border: 9px solid white;
    box-shadow: 0 0 13px rgba(#000, 45%);
    width: 300px;
    transform: rotate(-5deg) translate(-98px, 10px);
  }

  .bubble-info {
    margin: 0 10%;
    transition: margin 300ms ease;

    @media (max-width: 768px) {
      margin: 0 1%;
    }
  }
}

#name-highlight {
  background: linear-gradient(to left, orchid, royalblue);
  background-clip: text;
  font-weight: 700;
  -webkit-text-fill-color: transparent;
}
</style>