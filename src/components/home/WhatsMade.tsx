import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/WhatsMade.module.scss"
import Link from "next/link"

export default function WhatsMade() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h2 className={styles["section-heading"]}>
          Made with
          <FontAwesomeIcon
            icon={faHeart}
            style={{ marginInline: "1rem" }}
            size="sm"
          />
          in
        </h2>
        <div className={styles["icon-row"]}>
          <WebStackItem icon="react" name="React" link="https://reactjs.org" />
          <WebStackItem
            icon="nextjs"
            name="Next.js"
            link="https://nextjs.org"
          />
          <WebStackItem icon="sass" name="Sass" link="https://sass-lang.com" />
          <WebStackItem
            icon="tailwindcss"
            name="Tailwind CSS"
            link="https://tailwindcss.com"
          />
          <WebStackItem
            icon="typescript"
            name="TypeScript"
            link="https://www.typescriptlang.org/"
          />
        </div>
      </div>
    </section>
  )
}

export function WebStackItem({
  icon,
  name,
  link
}: {
  icon: string
  name: string
  link: string
}) {
  return (
    <Link href={link} passHref>
      <a className={styles.item} data-icon={icon}>
        <i className={`devicon-${icon}-plain text-5xl`}></i>
        <span>{name}</span>
      </a>
    </Link>
  )
}
