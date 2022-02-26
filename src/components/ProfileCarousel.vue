<template>
  <div id="skep-art-wrapper">
    <div id="carousel-inline-scroll">
      <img src="@/assets/img/01.jpg">
      <img src="@/assets/img/02.png">
      <img src="@/assets/img/03.png">
      <img src="@/assets/img/04.png">
      <img src="@/assets/img/05.png">
      <img src="@/assets/img/06.png">
      <img src="@/assets/img/07.png">
      <img src="@/assets/img/08.png">
      <!--Transition breakpoint-->
      <img src="@/assets/img/01.jpg">
      <img src="@/assets/img/02.png">
      <img src="@/assets/img/03.png">
      <img src="@/assets/img/04.png">
      <img src="@/assets/img/05.png">
      <img src="@/assets/img/06.png">
      <img src="@/assets/img/07.png">
    </div>
  </div> 
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;

#skep-art-wrapper {
  position: relative;
  overflow-x: scroll;
  max-width: 1400px;
  padding: 0 2ex;
  height: calc(var(--img-scroll) + 30px);
  margin: 0 auto;
  pointer-events: none;
  width: 100%;
  scrollbar-width: none;

  @media (max-width: 768px) {
    animation: hideCarousel 100ms ease forwards;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: var(--carousel-fader);
    z-index: 69;
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, var(--gradient-pnt-0), var(--gradient-pnt-1) 98%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, var(--gradient-pnt-0), var(--gradient-pnt-1) 98%);
  }
}

@keyframes hideCarousel {
  from {opacity: 1}
  to {opacity: 0}
}

#carousel-inline-scroll {
  filter: blur(1px);
  transform: translateY(16px);
  opacity: .65;
  display: flex;
  column-gap: 3rem;
  position: absolute;
  left: 0px;
  animation: scrollDatShit 35s linear infinite;

  img {
    width: var(--img-scroll);
    height: var(--img-scroll);
    border-radius: 50%;
    background: linear-gradient(to bottom, hsla(302, 59%, 65%, 0.5), hsla(225, 73%, 57%, 0.5));
  }
}

@keyframes scrollDatShit {
  100% {
    left: -1985px;
  }
}
</style>