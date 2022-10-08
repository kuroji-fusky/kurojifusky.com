import Link from "next/link"
import styles from "./Button.module.scss"
import { SharedBtnProps } from "@/utils/SharedBtnProps"

interface BtnLinkProps extends SharedBtnProps {
  emojiFix?: boolean
  ariaList?: boolean
}

export function BtnLink(props: BtnLinkProps) {
  return (
    <Link href={props.link ?? ""}>
      <a
        id={styles.style1}
        data-text={props.name}
        onClick={props.onClick}
        role={!props.ariaList ? undefined : "listitem"}
        style={
          {
            "--text-padding-hover": !props.emojiFix ? "" : "var(--emoji-fix)"
          } as React.CSSProperties
        }
      >
        {props.name}
      </a>
    </Link>
  )
}
