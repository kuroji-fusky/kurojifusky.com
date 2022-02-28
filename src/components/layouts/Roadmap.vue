<template>
  <section id="roadmap">
    <h2>My Shitty Roadmap</h2>
    <div id="roadmap-container">
      <div id="namjoon-grid">

      </div>
      <div id="namjoon-line">
        <div id="bar">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;

span {
  display: block;
}

#roadmap-container {
  --gradient-pnt-0: #2c2c2c00;
  --gradient-pnt-1: #2c2c2c;
  
  position: relative;
  border-radius: 6px;
  padding: var(--item-padding);
  background: var(--overlay);

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 50px;
    bottom: 0;
    z-index: 5;
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

#roadmap-container, #namjoon-line, #namjoon-grid, #bar {
  width: 100%;
}

#roadmap-container, #namjoon-line, #namjoon-grid {
  height: 250px !important;
}

#bar {
  height: 7px;
  position: relative;

  &::before, &::after {
    content: '';
  }

  &::before {
    height: 7px;
    width: 21%;
    position: absolute;
    left: 0;
    background: lime;
  }

  &::after {
    width: 27px;
    height: 27px;
    position: absolute;
    top: -10px;
    left: calc(21% - 10px);
    background: green;
    border: 3px solid white;
    border-radius: 50%;
  }
}

#namjoon {
  &-grid, &-line {
    position: absolute;
    inset: 0 0 0 0;
  }

  &-grid {
    display: grid;
  }

  &-line {
    @include item-center;    
  }
}

#namjoon-line {
    width: 100%;
    height: 9px;
  }

#bar {
  background: rgb(69, 69, 69);
}
</style>