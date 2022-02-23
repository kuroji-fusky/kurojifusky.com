<template>
  <div id="skep-art-wrapper">
    <div id="carousel-inline-scroll">
      <img src="../assets/img/01.png">
      <img src="../assets/img/02.png">
      <img src="../assets/img/03.png">
      <img src="../assets/img/03.png">
      <img src="../assets/img/03.png">
      <img src="../assets/img/03.png">
      <!--Loop dis shit-->
      <img src="../assets/img/01.png">
      <img src="../assets/img/02.png">
      <img src="../assets/img/03.png">
    </div>
  </div> 
</template>

<style lang="scss" scoped>
@use '../assets/scss/mixin' as *;

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

#carousel-inline-scroll {
  filter: blur(1px);
  transform: translateY(16px);
  opacity: .65;
  display: flex;
  column-gap: 3rem;
  position: absolute;
  left: 0px;
  animation: cool 45s linear infinite;

  img {
    width: var(--img-scroll);
    height: var(--img-scroll);
  }
}

@keyframes cool {
  100% {
    left: -1440px;
  }
}
</style>