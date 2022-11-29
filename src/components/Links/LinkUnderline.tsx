import Link from "next/link"
import styles from "./LinkUnderline.module.scss"

interface LinkUnderlineProps extends Pick<Components, "className">, ISharedBtnProps {
	name?: string
	link?: string
  children: string
  external: boolean
}

export function LinkUnderline(props: Partial<LinkUnderlineProps>) {
  return (
    <Link href={props.link ?? ""} passHref>
      <a
        className={`${styles["link"]} ${props.className}`}
        onClick={props.onClick}
        target={!props.external ? undefined : "_blank"}
        rel={!props.external ? undefined : "noopener noreferrer"}
      >
        {props.name ?? props.children}
      </a>
    </Link>
  )
}
