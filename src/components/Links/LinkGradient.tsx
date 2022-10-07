import Link from "next/link"
import styles from "./LinkGradient.module.scss"
import { SharedBtnProps } from "@/utils/SharedBtnProps"

interface LinkGradientProps extends SharedBtnProps {}

export function LinkGradient(props: LinkGradientProps) {
  return (
    <Link href={props.link ?? ""}>
      <a className={styles.link}>{props.name}</a>
    </Link>
  )
}
