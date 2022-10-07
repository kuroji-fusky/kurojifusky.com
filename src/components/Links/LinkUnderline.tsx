import Link from "next/link"
import { SharedBtnProps } from "../../utils/SharedBtnProps"
import styles from "./LinkGradient.module.scss"

interface LinkUnderlineProps extends SharedBtnProps {}

export function LinkUnderline(props: LinkUnderlineProps) {
  props.link = ""

  return (
    <Link href={props.link}>
      <a className={styles.link} onClick={props.onClick}>
        {props.name}
      </a>
    </Link>
  )
}
