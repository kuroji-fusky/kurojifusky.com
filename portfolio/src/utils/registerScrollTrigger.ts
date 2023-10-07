"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export function registerScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger)
}
