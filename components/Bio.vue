<template>
  <article
    class="backdrop w-full lg:w-[40%] pl-3 md:pr-10 pr-3 text-center lg:text-left flex flex-col gap-y-4 items-center lg:items-start"
    dir="ltr"
  >
    <h2
      class="text-5xl lg:text-6xl font-bold text-center lg:text-left"
      aria-label="Hi, I'm skepfusky!"
    >
      Hi, I'm

    </h2>
    <p>
      I'm a 20-year-old self-taught hobbyist as a video editor, web developer,
      designer, and self-produced music producer from the Philippines!
    </p>
    <p>
      I mostly work on coding projects, YTPs, and other videos whenever I feel
      like it. I also draw floofs occasionally also as a hobby. I have a near
      decade of experience in editing videos, specializing in videography and
      motion graphics. I currently use Premiere Pro and After Effects since
      2017!
    </p>
    <p>
      I also have a fairly decent knowledge in other endevors such as producing
      and mastering my own music and recently, web development - with a fair
      experience with JavaScript, TypeScript and Python.
    </p>
    <SocialRow />
  </article>
</template>

<style scoped>
h2 {
  @apply font-inter;
}

article {
  @apply font-open-sans;
}

p {
  @apply xl:text-xl lg:text-lg text-base;
}

.backdrop {
  @apply relative;
}

.backdrop::before {
  @apply content-[""] absolute -z-10 left-1 right-1 lg:-left-5 lg:right-0 top-6 -bottom-7 bg-neutral-900;
}

.backdrop::after {
  @apply content-[""] absolute -z-[9] left-0 right-0 top-5 h-2 bg-gradient-to-r from-sona-skycyan-900 to-sona-borahaealt-700;
}
</style>
