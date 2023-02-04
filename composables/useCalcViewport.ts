/**
 * Inspired by basement.studio's way of calculating viewport height and width
 * Originally written in React, re-written in Vue by @kuroji-fusky
 */
export default function useCalcViewport() {
	function handleResize() {
		const Vw = (window.innerWidth / 100).toString(),
			Vh = (window.innerHeight / 100).toString()

		const htmlRoot = document.documentElement

		htmlRoot.style.setProperty("--g-vw", `${Vw}px`)
		htmlRoot.style.setProperty("--g-vh", `${Vh}px`)
	}

	onBeforeMount(() => handleResize())

	onMounted(() => window.addEventListener("resize", handleResize))
	onUnmounted(() => window.addEventListener("resize", handleResize))
}
