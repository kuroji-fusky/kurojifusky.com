<script setup lang="ts">
defineProps<{
  hide: boolean
}>()
</script>

<template>
  <Teleport to="body">
    <div
      id="kuro-preloader"
      class="fixed inset-0 grid z-[999] bg-kuro-dark1 place-items-center transition-opacity"
      aria-hidden="true"
      :class="[!hide ? 'opacity-100' : 'opacity-0 pointer-events-none']"
    >
      <div class="flex flex-col gap-y-10">
        <div
          class="k-logo-wrapper aspect-square grid place-items-center rounded-lg bg-kuro-dark1 relative"
        >
          <svg id="k-logo" width="55%">
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M0,161.05V3.16h35.58V132l-10.1-7.16L123.15,3.16h38.1L32.21,161.05H0z M75.37,83.79l25.68-22.95l62.52,100.21h-40.84 L75.37,83.79z"
            />
          </svg>
        </div>
        <span>Spreading the pathOwOgen since 2019</span>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
#k-logo {
  fill: whitesmoke;
}

.k-logo-wrapper::before {
  content: "";
  position: absolute;
  inset: -0.25rem;
  background: radial-gradient(
    20rem circle at 50% 50%,
    cyan,
    royalblue,
    #0000 75%
  );
  background-size: 200% 200%;
  z-index: -1;
  border-radius: inherit;
  transition: all 300ms ease;
  animation: lol 2.5s linear infinite;
}

@keyframes lol {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
}
</style>
