export interface ClickableUI<T = HTMLElement, S = undefined> {
  children?: React.ReactNode
  className?: string
  uiType?: S

  onClick?: React.MouseEventHandler<T>
  onTap?: React.TouchEventHandler<T>

  // A11y stuff
  "aria-label"?: string

  tooltip?: NonNullable<React.ReactNode>

  // Link only
  to?: string
  external?: boolean
}
