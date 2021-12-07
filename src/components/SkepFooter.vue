<template>
  <footer>
    <div id="about">
      <p>Skep is a broke ass developer lol</p>
    </div>
    <div id="social-row">
      <ul>
        <li>
          <a target="_blank" href="https://youtube.com/kokorohuskyproductions">
            <i class="fab fa-youtube"></i>
            <div class="tooltip">
              <span>skepfusky</span>
            </div>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/skepfusky">
            <i class="fab fa-github"></i>
            <div class="tooltip">
              <span>skepfusky</span>
            </div>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/skepfusky">
            <i class="fab fa-twitter"></i>
            <div class="tooltip">
              <span>@skepfusky</span>
            </div>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://instagram.com/skepfusky">
            <i class="fab fa-instagram"></i>
            <div class="tooltip">
              <span>@skepfusky</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div id="copyright">
      <p>Site built using Vue.js</p>
      <p>Copyright &copy; {{ new Date().getFullYear() }} Skepfusky. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@include list_spacing(25px);

footer {
  max-width: 1280px;
  margin: 0 auto;
  background: darken($skep-blue, 15%);
  padding: 1rem 2.5rem;
  color: white;
}

:is(#about, #copyright) {
  text-align: center;
}

#social-row {
  @include flex_params(center, center, column);
  font-size: 130%;

  &::before {
    content: "";
    display: block;
    width: 3em;
    height: 3px;
    background: $skep-lightblue;
    margin-block: 10px;
  }

  a {
    position: relative;
  }
}

a {
  &:hover {
    .tooltip {
      filter: opacity(100%);
      opacity: 1;
    }
  }
}
.tooltip {
  $tt-w: 300px;
  @include flex_params(center, center, unset);
  width: $tt-w;
  position: absolute;
  top: -35px;
  font-size: 69%;
  left: calc($tt-w / 2 - ($tt-w - 10px)); // wow math
  pointer-events: none;
  filter: opacity(0%);
  opacity: 0;
  transition: all 300ms ease;

  span {
    padding: 0.55rem 0.95rem;
    background-color: rgba(black, 50%);
    border-radius: 5px;
  }
}

ul {
  @include flex_params(unset, unset, row);
}

li {
  filter: opacity(70%);
  opacity: 0.7;
  transform: translateY(0px);
  @include prop_transition();

  &:hover {
    filter: opacity(100%);
    transform: translateY(-2px);
    opacity: 1;
  }
}

#copyright {
  margin-top: 0.55rem;
  font-size: 80%;
}
</style>