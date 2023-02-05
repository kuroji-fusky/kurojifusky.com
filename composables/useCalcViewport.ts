/**
 * Inspired by basement.studio's way of calculating viewport height and width
 * Originally written in React, re-written in Vue by @kuroji-fusky
 */
export function useCalcViewport() {
	function handleResize() {
		const Vw = (window.innerWidth / 100).toString()

		const htmlRoot = document.documentElement

		htmlRoot.style.setProperty("--vw", `${Vw}px`)
	}

	onBeforeMount(() => handleResize())

	onMounted(() => window.addEventListener("resize", handleResize))
	onUnmounted(() => window.removeEventListener("resize", handleResize))
}
