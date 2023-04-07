import { gsap } from "gsap"
import { MOBILE_SCREEN } from "~~/components/Constants"

/**
 * A small ass function to make sure mobile users get those performance GAINS BITCH
 */
export function useGsapMobileLimit(callbackFn: gsap.ContextFunc) {
	const mm = gsap.matchMedia()
	mm.add(MOBILE_SCREEN, callbackFn)
}
