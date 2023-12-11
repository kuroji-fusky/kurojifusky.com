import { gsap } from "gsap"

export const useGsapContext = (
  cb: gsap.ContextFunc,
  scope?: string | Object | Element,
) => {
  const ctx = ref<gsap.Context>()

  onMounted(() => (ctx.value = gsap.context(cb, scope)))
  onUnmounted(() => ctx.value!.revert())
}
