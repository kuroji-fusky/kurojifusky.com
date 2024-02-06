import { gsap } from "gsap"

export const useGsapContext = (
  scope: string | Object | Element | undefined,
  cb: gsap.ContextFunc
) => {
  const ctx = ref<gsap.Context>()

  onMounted(() => (ctx.value = gsap.context(cb, scope)))
  onUnmounted(() => ctx.value!.revert())
}
