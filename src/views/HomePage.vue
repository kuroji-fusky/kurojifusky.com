<template>
  <main role="main">
    <section class="md-wrapper">
      <div id="main-profile" class="flex gap-x-1.5 item-center">
        <div id="bg-profile" class="rounded-full">
          <img class="rounded-full" src="@/assets/logo.png" alt="An autist">
        </div>
        <article class="flex flex-col gap-y-1">
          <h1>Skeperino</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quos temporibus consequatur aliquam, illo corrupti assumenda nemo, exercitationem, non blanditiis nesciunt unde quibusdam! Cum, dolor. Quaerat voluptatibus fugit a ullam necessitatibus id natus nisi dolorum consequatur. Ipsa aperiam a perspiciatis rerum error culpa quibusdam soluta, quam vero ea repellendus deserunt illo ipsam dolorem, labore aliquid similique beatae fugiat quo dolores officiis asperiores modi quidem? Accusantium recusandae quae hic consequatur.</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
#main-profile {
  margin: 0 auto;
  max-width: 1300px;
  padding: 1.15rem 0;
  
  article {
    width: 100%;

    h1 {
      font-size: 2.5rem;
    }

    p {
      display: inline;
      line-height: 1.55em;
    }
  }
}

#bg-profile {
  background: linear-gradient(90deg,#1ba3ab 0%,#5c0496 33%,#1ba3ab 66%, #5c0496 100%);
  background-size: 300%;
  animation: smoothBaby 15s linear infinite;

  img {
    transform: scale(0.93);
    width: 250px;
  }
}

@keyframes whomp {
    0% {transform: scale(0)};
  100% {transform: scale(1)};
}
</style>