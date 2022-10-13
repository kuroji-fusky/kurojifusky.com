import Link from "next/link"
import styles from "./HobbySticky.module.scss"

interface HobbyStickyProps {
  active?: boolean
}

export default function HobbySticky(props: HobbyStickyProps) {
  const hobbyItems = [
    "Overview",
    "Videos",
    "Music",
    "Projects",
    "Blog",
    "More About Me"
  ]

  return (
    <nav id={styles.wrapper}>
      <ul id={styles.row}>
        {hobbyItems.map((items, index) => (
          <HobbyStickyItem
            key={index}
            name={items}
            link={`#${items.replace("s", "-").toLowerCase()}`}
          />
        ))}
      </ul>
    </nav>
  )
}

interface HobbyStickyItemProps {
  link?: string
  name?: string
}

export function HobbyStickyItem(props: HobbyStickyItemProps) {
  return (
    <li>
      <Link href={props.link ?? ""}>{props.name}</Link>
    </li>
  )
}