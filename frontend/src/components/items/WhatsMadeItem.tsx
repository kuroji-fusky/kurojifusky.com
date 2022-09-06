import Link from "next/link"
import styles from "@/styles/sections/WhatsMade.module.scss"

export default function WhatsMadeItem({
  icon,
  name,
  link
}: IWhatsMadeItemProps) {
  return (
    <Link href={link} passHref>
      <a className={styles.item} data-icon={icon}>
        <i className={`devicon-${icon}-plain text-5xl`}></i>
        <span>{name}</span>
      </a>
    </Link>
  )
}
