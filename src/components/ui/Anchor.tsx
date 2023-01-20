import Link from "next/link"
import style from "./Anchor.module.scss"
import { ClickableUI } from "./types"

type AnchorUITypes = "button" | "button-fill" | "minimal" | "large"

interface AnchorProps extends ClickableUI<HTMLAnchorElement, AnchorUITypes> {}

export function Anchor(props: AnchorProps) {
  const { uiType = "minimal" } = props

  const LINK_STYLES = {
    button: style["button"],
    "button-fill": style["button-fill"],
    minimal: style["minimal"],
    large: style["large"],
  }

  const parseStyles = !props.className
    ? LINK_STYLES[uiType]
    : `${LINK_STYLES[uiType]} ${props.className}`

  return (
    <Link
      href={props.to ?? ""}
      target={!props.external ? undefined : "_blank"}
      className={parseStyles}
    >
      {props.children}
    </Link>
  )
}
