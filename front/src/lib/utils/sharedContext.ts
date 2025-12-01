import { getContext, setContext } from "svelte"

/**
 * Creates a unique shared context used in tandem with `createAnchorState`
 * @param componentName Name of the context
 */
export const createSharedContext = <C extends object>(componentName: string) => {
  const key = Symbol(`${componentName.toLowerCase()}-context`)

  const set = (data: C) => {
    setContext(key, data)
    return data
  }

  const get = () => {
    const context = getContext<C>(key)

    if (!context) {
      throw new Error(`Couldn't retrieve context - did you forget to mount component related to ${componentName}?`)
    }

    return context
  }

  return [get, set] as const
}

/**
 * @param initialState Initial state of the moment an anchor is created, default: false
 * @template E The anchor element it targets to
 */
export const createAnchorState = <E extends HTMLElement>(initialState?: boolean) => {
  let _isOpen = $state(initialState || false)
  let elementAnchor = $state<E | undefined>(undefined)

  return {
    isOpen: () => _isOpen,
    open: () => {
      _isOpen = true
    },
    close: () => {
      _isOpen = false
    },
    /**
     * Registers an element to be anchored based on its relative position
     */
    registerAnchor: (el: E) => {
      elementAnchor = el
    },
    /**
     * Returns a registered anchored element; returns error if registered element returns `undefined`
     */
    getAnchor: () => {
      if (!elementAnchor) {
        throw new Error("Anchor may not have been initialized with `registerAnchor`")
      }
      return elementAnchor
    },
  }
}
