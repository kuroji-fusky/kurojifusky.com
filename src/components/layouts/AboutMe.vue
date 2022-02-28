<template>
  <section id="about-me">
    <article class="bubble-info">
      <h1>About me</h1>
      <p>
        I'm Kerby Keith Aquino, but I'd prefer being called as
        <span id="name-highlight">skepfusky</span>, or simply as
        <span id="name-highlight">Skep</span>, I'm also known by my stage name
        <span id="name-highlight">Kokoro Husky</span> on streaming platforms;
        I'm a 20-year-old high school graduate immediate college dropout from
        the Philippines!
      </p>
      <p>
        I'm not trying to be a celebrity, or even a <strong><i>popufur</i></strong>...
        No, I'm just trying to get my name out there as I'm extremely passionate
        about sharing and possibly inspiring future generations through my broad
        set of skills, talent, and art as a self-taught individual.
      </p>
      <p>
        I have an equal passion for programming, music production, and
        filmmaking!
      </p>
      <hr>
      <p>
        <strong>Fun fact:</strong> The drawings you see on the scrolling
        carousel is entirely drawn by me! Yes, I draw adorable floofs in my
        free-time or when I get burnt out in coding stuff.
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

hr, p:last-child {
  @media (max-width: 768px) {
    display: none;
  }
}

#name-highlight {
  background: linear-gradient(to left, orchid, royalblue);
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: 700;
  -webkit-text-fill-color: transparent;
}
</style>