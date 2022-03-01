<template>
  <section>
    <div id="rm-line"></div>
    <div id="rm-content">
      <div class="roadmap-item">
        <div id="rmi-item-intersect">
          <img src="@/assets/img/08.png" alt="" aria-label="">
        </div>
        <div id="rmi-item-content">
          <h2>Lorem ipsum shit</h2>
          Lorem ipsum gay
        </div>
      </div>
      <div class="roadmap-item">
        <div id="rmi-item-intersect">
          <img src="@/assets/img/08.png" alt="" aria-label="">
        </div>
        <div id="rmi-item-content">
          <h2>Lorem ipsum shit</h2>
          Lorem ipsum gay
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
section {
  display: flex;
  height: 100vh;
  position: relative;

  &::before, &::after {
    content: '';
    display: block;
    height: 100px;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  &::before {
    top: 0;
    background: linear-gradient(to top, var(--gradient-pnt-0), var(--gradient-pnt-1) 98%);
  }
  
  &::after {
    bottom: 0;
    background: linear-gradient(to bottom, var(--gradient-pnt-0), var(--gradient-pnt-1) 98%);
  }
}

#rm {
  &-line, &-content {
    display: flex;
  }
}

#rm-line {
  width: 16%;

  &::before {
    content: '';
    display: block;
    background: white;
    width: 5px;
    height: 100vh;
  }
}

.roadmap-item {
  @include item-center;
  width: 100% !important;
}

#rm-line::before, #rmi-item-intersect {
  position: relative;
  margin-left: 120px;
}

#rm-content {
  width: 16%;
  position: absolute;
  top: 0;
  width: 100%;
  margin: 90px 0;
  flex-direction: column;
  row-gap: 3rem;
}

#rmi-item {
  &-intersect {
    --roadmap-item-size: 120px;
    --roadmap-item-position: 65px;
    display: block;
    transition: all 300ms ease;
    transform: translateX(calc(-1% - var(--roadmap-item-size) + var(--roadmap-item-position)));
    height: var(--roadmap-item-size);
    width: var(--roadmap-item-size);
    background: red;
    border-radius: 50%;
    flex-shrink: 0;

    img {
      width: 100%;
      border-radius: inherit;
    }
  }

  &-content {
    background: orchid;
    display: block;
    margin-right: 4rem;
    padding: 1.75ex;
    border-radius: 6px;
    width: 100%;
  }
}
</style>