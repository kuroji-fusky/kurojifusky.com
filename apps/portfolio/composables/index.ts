import gsap from "gsap"

export const useGsap = (
  scope: string | object | Element | undefined,
  callbackFn: gsap.ContextFunc
) => {
  const ctx = ref<gsap.Context>()

  onMounted(() => (ctx.value = gsap.context(callbackFn, scope)))
  onUnmounted(() => ctx.value!.revert())
}

export const useGsapMobileLimit = (callfackFn: gsap.ContextFunc) => {
  gsap.matchMedia().add("(min-width: 768px)", callfackFn)
}
