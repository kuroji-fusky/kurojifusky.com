<template>
  <div id="project-item" class="card">
    <img src="https://github.com/skepfusky.png" />
    <h3>Project name</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, autem. Vero
      delectus odio debitis quo at vel iusto sint repellendus natus, quod
      suscipit quas rerum placeat ad consequuntur officiis nulla, provident
      cumque. Eum, maxime?
    </p>
  </div>
</template>

<style lang="scss" scoped>
#project-item {
  @apply flex flex-col justify-center items-center p-6 text-center gap-y-2;

  p {
    @apply leading-6 w-[17.45rem];
  }

  img {
    @apply w-[12rem] h-auto rounded-full;
  }
}
</style>
