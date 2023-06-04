import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function useLenisInit() {
  // Add responsive stuff
  const handleResize = () => {
    const Vw = window.innerWidth / 100
    document.body.style.setProperty("--vw", `${Vw}px`)
  }
  onBeforeMount(() => handleResize())
  onMounted(() => window.addEventListener("resize", handleResize))
  onUnmounted(() => window.removeEventListener("resize", handleResize))

  // Register GSAP and Lenis
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.125,
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      infinite: false
    })

    const raf = (time: unknown) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((t) => {
      lenis.raf(t * 1000)
    })
  })
}
