import Link from "next/link"
import s from "./navbar.module.scss"

export function Navbar() {
  return (
    <header id={s["wrapper"]}>
      <div id={s["fixed-wrapper"]}>
        <div className={s["responsive-container"]}>
          <Link href="/" className={s["logo"]}>
            Kuroji Fusky
          </Link>
          <nav className={s["nav-links"]}>
            <Link href="/projects">Projects</Link>
            <Link href="/projects">Creative Works</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
