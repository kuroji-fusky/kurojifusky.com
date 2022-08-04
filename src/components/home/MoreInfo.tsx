import Link from "next/link"
import styles from "@/styles/MoreInfo.module.scss"

export default function MoreInfo() {
  return (
    <section className={styles.divider} aria-label="More about me">
      <div className={styles.wrapper}>
        <h2 className="mt-8 mb-2">More about me</h2>
        <div className="grid grid-cols-3"></div>
      </div>
    </section>
  )
}

export function MoreInfoButton({ name }: { name: string }) {
  return (
    <button className={styles.button}>
      <Link href="#">
        <a>{name}</a>
      </Link>
    </button>
  )
}
