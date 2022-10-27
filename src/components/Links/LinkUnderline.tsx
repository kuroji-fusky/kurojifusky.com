import Link from "next/link"
import { SharedBtnProps } from "@/utils/SharedBtnProps"
import styles from "./LinkUnderline.module.scss"

interface LinkUnderlineProps extends SharedBtnProps {
  children?: string
  external?: boolean
}

export function LinkUnderline(props: LinkUnderlineProps) {
  return (
    <Link href={props.link ?? ""}>
      <a
        className={styles.link}
        onClick={props.onClick}
        target={!props.external ? undefined : "_blank"}
        rel={!props.external ? undefined : "noopener noreferrer"}
      >
        {props.name ?? props.children}
      </a>
    </Link>
  )
}
