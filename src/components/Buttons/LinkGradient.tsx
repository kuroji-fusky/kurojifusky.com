import Link from "next/link"
import styles from "./LinkGradient.module.scss"

interface LinkGradientProps {
  link?: string
  name?: string
}

export default function LinkGradient({ link = "", name }: LinkGradientProps) {
  return (
    <Link href={link}>
      <a className={styles.link}>
        {name}
      </a>
    </Link>
  )
}
