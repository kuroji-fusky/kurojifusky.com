import {
  createSharedContext,
  createAnchorState,
} from "../../utils/sharedContext";

const [getDropdownCtx, setDropdownCtx] = createSharedContext<ReturnType<typeof useSharedDropdownState>>("Dropdown")

export const useSharedDropdownState = () => {
  const coreState = createAnchorState<HTMLButtonElement>()

  setDropdownCtx(coreState)
  return coreState
}

export { getDropdownCtx, setDropdownCtx }
