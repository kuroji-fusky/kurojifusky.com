<template>
  <footer>
    <div id="wrapper">
      <div id="social-row">
        <ul>
          <li>
            <a target="_blank" href="https://youtube.com/kokorohuskyproductions">
              <i class="fab fa-youtube"></i>
              <social-tooltip content="hot garbage" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/skepfusky">
              <i class="fab fa-twitter"></i>
              <social-tooltip content="unfunny code" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/skepfusky">
              <i class="fab fa-instagram"></i>
              <social-tooltip content="narcissist lol" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/skepfusky">
              <i class="fab fa-github"></i>
              <social-tooltip content="terrible code" />
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <i class="fab fa-deviantart"></i>
              <social-tooltip content="horrible drawings" />
            </a>
          </li>
        </ul>
      </div>
      <div id="copyright">
        <p>
          Site built using
          <a href="https://vuejs.org" target="_blank">
            <img
              src="../assets/img/vue-logo.png"
              alt="Vue logo"
              style="width: 20px; margin: 0 4px;"
            />
            <strong style="color: #41b883">Vue.js</strong>
          </a>
        </p>
        <p>&copy; 2021 Skepfusky. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Tooltip from "./Tooltip.vue"

export default {
  name: "skepFooter",
  components: {
    'social-tooltip': Tooltip
  }
}
</script>

<style lang="scss" scoped>
@include list_spacing(25px);

footer {
  background: linear-gradient(mix($skep-blue, black, 50%), mix($skep-lightblue,black, 40%));
  color: whitesmoke;
}

#wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 2.5rem;
  @include flex_params(space-between, center, row);
}

#social-row {
  @include flex_params(center, center, row);
  font-size: 130%;

  a {
    position: relative;
  }
}

a {
  @include tooltip_comp();
}

ul {
  @include flex_params(unset, unset, row);
}

li {
  @include prop_transition();
  filter: opacity(70%);
  opacity: 0.7;
  transform: translateY(0px);

  &:hover {
    filter: opacity(100%);
    transform: translateY(-2px);
    opacity: 1;
  }
}

#copyright {
  @include disable_drag();
  @include flex_params(unset, center, row);
  font-size: 80%;
  text-align: right;

  p {
    &:first-child {
      margin-right: 15px;
    }
  }

  p,
  a {
    @include flex_params(unset, center, row);
  }
}
</style>