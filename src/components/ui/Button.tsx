import style from "./Button.module.scss"
import { ClickableUI } from "./types"

type ButtonUITypes = "default" | "fill" | "minimal" | "link-minimal"

// prettier-ignore
interface ButtonProps extends Omit<ClickableUI<HTMLButtonElement, ButtonUITypes>, "to" | "external"> {}

export function Button(props: ButtonProps) {
  const { uiType = "minimal" } = props

  const BUTTON_STYLES = {
    "default": style["default"],
    "fill": style["fill"],
    "minimal": style["minimal"],
    "link-minimal": style["link-minimal"]
  }

  const parseStyles = !props.className
    ? BUTTON_STYLES[uiType]
    : `${BUTTON_STYLES[uiType]} ${props.className}`

  return (
    <button className={parseStyles} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
