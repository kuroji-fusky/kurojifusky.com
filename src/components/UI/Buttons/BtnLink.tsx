import Link from "next/link"
import styles from "./BtnLink.module.scss"

interface BtnLinkProps extends ISharedBtnProps {
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
      >
        {props.name}
      </a>
    </Link>
  )
}
