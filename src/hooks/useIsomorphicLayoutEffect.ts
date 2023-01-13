import { useEffect, useLayoutEffect } from "react"
import { clientOnly } from "./../constants/index"

const useIsomorphicLayoutEffect = clientOnly ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
