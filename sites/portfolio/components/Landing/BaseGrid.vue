<script setup lang="ts">
const gridRoot = ref<HTMLDivElement>()

const gridDims = ref({ w: 0, h: 0 })

onMounted(() => {
  const handleDemGrids = () => {
    const CHOKE = 100
    const gridDimsVal = gridDims.value
    const gridRootDomVal = gridRoot.value

    const [ww, wh] = [Math.round(window.innerWidth / CHOKE), Math.round(window.innerHeight / CHOKE)]

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
    class="before:top-unset before:from-kuro-dark2 pointer-events-none absolute left-0 right-0 top-0 -z-[1] h-screen overflow-hidden before:absolute before:inset-0 before:block before:h-32 before:bg-gradient-to-t"
    :style="{ '--ww': gridDims.w, '--wh': gridDims.h }"
  >
    <div class="bg-kuro-dark1 h-full"></div>
    <div ref="gridRoot" id="grid-prerender-client"></div>
  </div>
</template>
