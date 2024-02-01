<script setup lang="ts">
const gridRoot = ref<HTMLDivElement>()

const gridDims = ref({ w: 0, h: 0 })

onMounted(() => {
  const handleDemGrids = () => {
    const CHOKE = 100
    const gridDimsVal = gridDims.value
    const gridRootDomVal = gridRoot.value

    const [ww, wh] = [
      Math.round(window.innerWidth / CHOKE),
      Math.round(window.innerHeight / CHOKE)
    ]

    gridDimsVal.h = wh
    gridDimsVal.w = ww

    const fillerDiv = document.createElement("div")
    const emptyArr = [...Array(wh * ww)]

    emptyArr.map(() => {
      gridRootDomVal?.append(fillerDiv)
    })
  }

  // handleDemGrids()
  // window.addEventListener("resize", handleDemGrids)
})
</script>

<template>
  <div
    class="h-screen top-0 left-0 right-0 absolute pointer-events-none -z-[1] before:absolute before:inset-0 before:top-unset before:h-32 before:block overflow-hidden before:bg-gradient-to-t before:from-kuro-dark2"
    :style="{ '--ww': gridDims.w, '--wh': gridDims.h }"
  >
    <div class="bg-kuro-dark1 h-full"></div>
    <div ref="gridRoot" id="grid-prerender-client"></div>
  </div>
</template>
